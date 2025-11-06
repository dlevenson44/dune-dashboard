import type { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode
}

const TableRow = ({ children }: TableRowProps) => (
  <tr className="hover:bg-gray-50 transition-colors">
    {children}
  </tr>
);

export default TableRow;
