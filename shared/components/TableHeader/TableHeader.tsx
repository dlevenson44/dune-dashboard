interface TableHeaderProps {
  headers: string[]
}

const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {headers.map((header, idx) => (
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider" key={`${header}-${idx}`}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeader
