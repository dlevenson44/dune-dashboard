import type { Tab } from "~/shared/types/components"

interface TabsProps {
  activeTab: string;
  handleTabChange: (id: string) => void;
  tabs: Tab[];
}

const Tabs = ({
  activeTab,
  handleTabChange,
  tabs
}: TabsProps) => {
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <nav className="flex -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`whitespace-nowrap px-4 py-2 text-xs border-b-2 transition-colors hover:cursor-pointer ${
              activeTab === tab.id
                ? "border-green-600 border-b-4"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Tabs;
