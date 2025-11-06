interface SankeyNode {
  label?: string;
  value?: number;
  color?: string;
  column: number; // which column this node belongs to (0, 1, 2, etc.)
  row?: number; // position within the column
  startColumn?: boolean; // applies styles for left most column
  id?: string; // used to track tabs
}

interface SankeyDiagramProps {
  handleNodeClick?: (id: string) => void;
  nodes: SankeyNode[];
}

const SankeyDiagram = ({
  handleNodeClick,
  nodes,
}: SankeyDiagramProps) => {
  const getColorClasses = (color: SankeyNode['color']) => {
    switch (color) {
      case 'gray':
        return 'bg-gray-200';
      case 'darkgray':
        return 'bg-gray-400';
      case 'green':
        return 'bg-green-600';
      case 'yellow':
        return 'bg-yellow-400';
      case 'orange':
        return 'bg-orange-400';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-200';
    }
  };

  const nodeHeight = 30;
  const nodeSpacing = 10;
  const columnWidth = 250;
  const numColumns = Math.max(...nodes.map(n => n.column)) + 1;
  const maxRowsInColumn = nodes.reduce((acc, node) => {
    acc[node.column] = Math.max(acc[node.column] || 0, (node.row ?? 0) + 1);
    return acc;
  }, {} as Record<number, number>);

  // SVG Dimmensions
  const svgHeight = Math.max(...Object.values(maxRowsInColumn)) * (nodeHeight + nodeSpacing) + 80;
  const svgWidth = numColumns * columnWidth;

  // Calculate node positions
  const nodePositions = nodes.map(node => ({
    x: node.column * columnWidth - 175,
    y: 40 + (node.row ?? 0) * (nodeHeight + nodeSpacing),
  }));

  return (
    <div className="relative w-full overflow-x-auto">
      <div className="relative" style={{ minWidth: svgWidth, height: svgHeight }}>
        {/* Nodes */}
        {nodes.map((node, index) => {
          const pos = nodePositions[index];
          if (!node.value && !node.label && !node.startColumn) {
            return null;
          }

          if (node.startColumn) {
            return (
              <div
                key={`sankey-node-${index}`}
                className="absolute rounded bg-gray-200 mt-20 h-3/5 w-[15px]"
              />
            )
          }

          return (
            <div
              key={`sankey-node-${index}`}
              className={`absolute px-3 py-1.5 rounded text-xs font-medium whitespace-nowrap text-gray-700 flex items-center z-10 hover:cursor-pointer ${getColorClasses(node.color)}`}
              onClick={() => (handleNodeClick && node.id) && handleNodeClick(node.id)}
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                height: `${nodeHeight}px`,
              }}
            >
              <strong>{node.value}&nbsp;</strong>
              {node.label}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SankeyDiagram;
