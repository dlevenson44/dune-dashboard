import type { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
  customClassName?: string;
}

const TableCell = ({ children, customClassName }: TableCellProps) => (
  <td className={`px-6 py-4 whitespace-nowrap ${customClassName}`}>
    {children}
  </td>
);

export default TableCell;
