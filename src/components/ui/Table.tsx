export function Table({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className={`w-full text-sm ${className}`}>{children}</table>
    </div>
  );
}

export function Th({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <th
      className={`bg-surface-1 px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground ${className}`}
    >
      {children}
    </th>
  );
}

export function Td({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <td className={`border-t border-border px-3 py-2 ${className}`}>
      {children}
    </td>
  );
}
