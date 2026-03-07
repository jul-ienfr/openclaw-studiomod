import { cn } from "@/lib/utils";

export function Table({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className={cn("w-full text-sm", className)}>{children}</table>
    </div>
  );
}

export function Th({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <th
      scope="col"
      className={cn(
        "sticky top-0 z-10 bg-surface-1 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground",
        className,
      )}
    >
      {children}
    </th>
  );
}

export function Td({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <td className={cn("border-t border-border px-3 py-2", className)}>
      {children}
    </td>
  );
}

export function Tr({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <tr
      className={cn(
        "transition-colors duration-[var(--transition-fast)] hover:bg-surface-2/50",
        className,
      )}
    >
      {children}
    </tr>
  );
}

export default Table;
