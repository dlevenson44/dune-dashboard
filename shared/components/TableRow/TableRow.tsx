import type { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode
  key: string
}

const TableRow = ({ children, key }: TableRowProps) => (
  <tr key={key} className="hover:bg-gray-50 transition-colors">
    {children}
  </tr>
);

export default TableRow;
