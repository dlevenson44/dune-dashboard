import { SankeyDiagram } from "~/shared/components";

interface SankeyNode {
  label?: string;
  value?: number;
  color?: string;
  column: number; // which column this node belongs to (0, 1, 2, etc.)
  row?: number; // position within the column
  startColumn?: boolean; // applies styles for left most column
  id?: string; // used to track tabs
}

interface UserInteractionSankeyProps {
  handleTabChange: (id: string) => void;
  totalInteractions: number;
  nodes: SankeyNode[];
}

const UserInteractionSankey = ({
  handleTabChange,
  totalInteractions,
  nodes,
}: UserInteractionSankeyProps) => {
  return (
    <div className="px-6 py-6 border-b border-gray-200">
      {/* Header */}
      <div className="mb-6">
        <div className="mt-2">
          <div className="text-3xl font-semibold text-gray-900">{totalInteractions.toLocaleString()}</div>
          <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">TOTAL INTERACTIONS</div>
        </div>
      </div>

      {/* Sankey Flow */}
      <SankeyDiagram
        nodes={nodes}
        handleNodeClick={handleTabChange}
      />
    </div>
  );
};

export default UserInteractionSankey;
