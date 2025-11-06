import type { Filter } from '~/shared/types/components';

interface SwitchFilterProps {
  activeFilterId: string
  filters: Filter[]
  handleClick: (filter: string) => void;
}

const SwitchFilter = ({
  activeFilterId,
  filters,
  handleClick
}: SwitchFilterProps) => (
  <div className="flex items-center gap-2 bg-gray-100 rounded-4xl p-1 border border-gray-200">
    {filters.map((filter) => (
      <button
        key={filter.id}
        onClick={() => handleClick(filter.id)}
        className={`px-4 py-2 text-sm font-medium rounded-4xl transition-colors ${
          activeFilterId === filter.id
            ? 'bg-white text-gray-900'
            : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        {filter.label}
      </button>
    ))}
  </div>
);

export default SwitchFilter;
