import { ChevronLeft, ChevronRight } from "lucide-react";

import type { UserInteractionResponse } from "~/features/dashboard/types/dashboard";
import { Pagination, TableCell, TableHeader, TableRow, Tabs } from "~/shared/components";
import { getInitials } from "~/shared/utils/helpers";
import { userInteractionTableTabs } from "~/features/dashboard/utils/userInteraction";

interface UserInteractionTableProps {
  interactions: UserInteractionResponse[];
}

const UserInteractionTable = ({ interactions }: UserInteractionTableProps) => {
  const columns = ['Name', 'Attack Modalisty', 'Risk Score', 'Frequency']
  const getRiskScoreColor = (score: number) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-600";
    if (score >= 40) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Tabs */}
      <Tabs tabs={userInteractionTableTabs} />

      {/* Table */}
      <div className="overflow-x-auto mt-2">
        <table className="w-full">
          <TableHeader headers={columns} />
          <tbody className="bg-white divide-y divide-gray-200">
            {interactions.map((attack, idx) => (
              <TableRow key={`ui-table-${idx}`}>
                <TableCell>
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-gray-100 text-gray-400 rounded-full mr-2 pt-1 text-center">
                      {getInitials(attack.name)}
                    </span>
                    <span className="text-sm font-medium text-gray-900">{attack.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-gray-900">{attack.attackModality}</span>
                </TableCell>
                <TableCell customClassName="flex items-center justify-center">
                  <span className={`px-2 py-0 rounded-full text-3xl font-bold ${getRiskScoreColor(attack.riskScore)}`}>
                    •
                  </span>
                  <span className="text-sm mt-1">{attack.riskScore}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-gray-900">{attack.frequency}</span>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default UserInteractionTable;
