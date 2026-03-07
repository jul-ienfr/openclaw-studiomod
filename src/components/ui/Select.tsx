"use client";

import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  type SelectHTMLAttributes,
  type ReactNode,
  type KeyboardEvent,
} from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptionData {
  value: string;
  label: string;
  disabled?: boolean;
}

function extractOptions(children: ReactNode): OptionData[] {
  const options: OptionData[] = [];
  const iterate = (nodes: ReactNode) => {
    if (!nodes) return;
    const arr = Array.isArray(nodes) ? nodes : [nodes];
    for (const child of arr) {
      if (!child || typeof child !== "object" || !("props" in child)) continue;
      if (child.type === "option") {
        options.push({
          value: child.props.value ?? "",
          label:
            typeof child.props.children === "string"
              ? child.props.children
              : String(child.props.children ?? child.props.value ?? ""),
          disabled: child.props.disabled ?? false,
        });
      } else if (child.type === "optgroup" && child.props.children) {
        iterate(child.props.children);
      }
    }
  };
  iterate(children);
  return options;
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      children,
      disabled,
      placeholder,
      value,
      defaultValue,
      onChange,
      name,
      id,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const hiddenRef = useRef<HTMLSelectElement>(null);

    const options = extractOptions(children);

    // Determine selected value: controlled vs uncontrolled
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string>(
      (defaultValue as string) ?? "",
    );
    const selectedValue = isControlled ? String(value) : internalValue;

    const selectedOption = options.find((o) => o.value === selectedValue);
    const displayLabel = selectedOption?.label ?? placeholder ?? "";
    const hasSelection = !!selectedOption;

    const animationDuration = 150; // matches --transition-fast

    const closeDropdown = useCallback(() => {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
        setFocusedIndex(-1);
      }, animationDuration);
    }, []);

    const openDropdown = useCallback(() => {
      if (disabled) return;
      setIsOpen(true);
      setClosing(false);
      const idx = options.findIndex((o) => o.value === selectedValue);
      setFocusedIndex(idx >= 0 ? idx : 0);
    }, [disabled, options, selectedValue]);

    const toggleDropdown = useCallback(() => {
      if (isOpen && !closing) {
        closeDropdown();
      } else if (!isOpen) {
        openDropdown();
      }
    }, [isOpen, closing, closeDropdown, openDropdown]);

    const selectOption = useCallback(
      (opt: OptionData) => {
        if (opt.disabled) return;
        if (!isControlled) {
          setInternalValue(opt.value);
        }
        // Fire a synthetic change event
        if (onChange) {
          const syntheticEvent = {
            target: { value: opt.value, name: name ?? "" },
            currentTarget: { value: opt.value, name: name ?? "" },
          } as React.ChangeEvent<HTMLSelectElement>;
          onChange(syntheticEvent);
        }
        closeDropdown();
      },
      [isControlled, setInternalValue, onChange, name, closeDropdown],
    );

    // Click outside
    useEffect(() => {
      if (!isOpen) return;
      const handleClick = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          closeDropdown();
        }
      };
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }, [isOpen, closeDropdown]);

    // Scroll focused option into view
    useEffect(() => {
      if (!isOpen || focusedIndex < 0 || !listRef.current) return;
      const items = listRef.current.querySelectorAll("[role='option']");
      items[focusedIndex]?.scrollIntoView({ block: "nearest" });
    }, [focusedIndex, isOpen]);

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return;

        switch (e.key) {
          case "Enter":
          case " ": {
            e.preventDefault();
            if (!isOpen) {
              openDropdown();
            } else if (focusedIndex >= 0 && options[focusedIndex]) {
              selectOption(options[focusedIndex]);
            }
            break;
          }
          case "ArrowDown": {
            e.preventDefault();
            if (!isOpen) {
              openDropdown();
            } else {
              setFocusedIndex((prev) => {
                let next = prev + 1;
                while (next < options.length && options[next].disabled) next++;
                return next < options.length ? next : prev;
              });
            }
            break;
          }
          case "ArrowUp": {
            e.preventDefault();
            if (!isOpen) {
              openDropdown();
            } else {
              setFocusedIndex((prev) => {
                let next = prev - 1;
                while (next >= 0 && options[next].disabled) next--;
                return next >= 0 ? next : prev;
              });
            }
            break;
          }
          case "Escape": {
            if (isOpen) {
              e.preventDefault();
              closeDropdown();
            }
            break;
          }
          case "Home": {
            if (isOpen) {
              e.preventDefault();
              const first = options.findIndex((o) => !o.disabled);
              if (first >= 0) setFocusedIndex(first);
            }
            break;
          }
          case "End": {
            if (isOpen) {
              e.preventDefault();
              for (let i = options.length - 1; i >= 0; i--) {
                if (!options[i].disabled) {
                  setFocusedIndex(i);
                  break;
                }
              }
            }
            break;
          }
          case "Tab": {
            if (isOpen) {
              closeDropdown();
            }
            break;
          }
        }
      },
      [
        disabled,
        isOpen,
        focusedIndex,
        options,
        openDropdown,
        closeDropdown,
        selectOption,
      ],
    );

    const actuallyOpen = isOpen;

    return (
      <div
        ref={containerRef}
        className={cn("relative inline-block", className)}
        onKeyDown={handleKeyDown}
      >
        {/* Hidden native select for form compatibility */}
        <select
          ref={(node) => {
            (
              hiddenRef as React.MutableRefObject<HTMLSelectElement | null>
            ).current = node;
            if (typeof ref === "function") ref(node);
            else if (ref)
              (
                ref as React.MutableRefObject<HTMLSelectElement | null>
              ).current = node;
          }}
          value={selectedValue}
          name={name}
          id={id}
          disabled={disabled}
          onChange={() => {}}
          tabIndex={-1}
          aria-hidden="true"
          className="sr-only"
          {...props}
        >
          {children}
        </select>

        {/* Trigger button */}
        <button
          type="button"
          role="combobox"
          aria-expanded={actuallyOpen}
          aria-haspopup="listbox"
          aria-controls={
            actuallyOpen ? `${id ?? name ?? "select"}-listbox` : undefined
          }
          disabled={disabled}
          onClick={toggleDropdown}
          className={cn(
            "flex w-full items-center justify-between gap-2",
            "rounded-lg border border-border bg-surface-1 px-3 py-2 text-sm",
            "transition-all duration-[var(--transition-fast)]",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:bg-card",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "disabled:pointer-events-none disabled:opacity-50",
            actuallyOpen && "ring-2 ring-ring bg-card",
            !hasSelection && "text-muted-foreground",
          )}
        >
          <span className="truncate">{displayLabel}</span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-[var(--transition-fast)]",
              actuallyOpen && "rotate-180",
            )}
            strokeWidth={1.75}
          />
        </button>

        {/* Dropdown panel */}
        {actuallyOpen && (
          <ul
            ref={listRef}
            id={`${id ?? name ?? "select"}-listbox`}
            role="listbox"
            aria-label={props["aria-label"] ?? "Options"}
            className={cn(
              "absolute z-50 mt-1 max-h-60 w-full overflow-auto",
              "rounded-xl border border-border bg-card shadow-lg",
              "py-1",
              closing
                ? "animate-[selectFadeOut_var(--transition-fast)_ease_forwards]"
                : "animate-[selectFadeIn_var(--transition-fast)_ease_forwards]",
            )}
          >
            {options.map((opt, idx) => {
              const isSelected = opt.value === selectedValue;
              const isFocused = idx === focusedIndex;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={opt.disabled || undefined}
                  data-focused={isFocused || undefined}
                  onClick={() => selectOption(opt)}
                  onMouseEnter={() => !opt.disabled && setFocusedIndex(idx)}
                  className={cn(
                    "flex cursor-pointer items-center px-3 py-2 text-sm",
                    "transition-colors duration-[var(--transition-fast)]",
                    opt.disabled && "pointer-events-none opacity-40",
                    isSelected && "text-primary font-medium",
                    isFocused &&
                      !opt.disabled &&
                      "bg-accent text-accent-foreground",
                    !isFocused && !isSelected && "text-foreground",
                  )}
                >
                  {opt.label}
                </li>
              );
            })}
            {options.length === 0 && (
              <li className="px-3 py-2 text-sm text-muted-foreground">
                No options
              </li>
            )}
          </ul>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";

export default Select;
