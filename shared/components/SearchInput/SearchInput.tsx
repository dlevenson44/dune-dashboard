import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  handleChange: ChangeEventHandler<HTMLInputElement>
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: string;
}

const SearchInput = ({
  handleChange,
  placeholder,
  type = "text",
  value,
}: SearchInputProps) => (
  <div className="pt-4 mb-6">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-1/3 pl-9 pr-4 py-2 text-sm rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent focus:bg-white"
      />
    </div>
  </div>
);

export default SearchInput;
