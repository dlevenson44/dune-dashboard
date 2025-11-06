"use client"

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { UserInteractionResponse, TabType } from "~/features/dashboard/types/dashboard";
import { getInitials } from "~/shared/utils/helpers";

interface UserInteractionTableProps {
  interactions: UserInteractionResponse[];
}

const UserInteractionTable = ({ interactions }: UserInteractionTableProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("clickedLink");

  const tabs = [
    { id: "clickedLink", label: "Clicked Link" },
    { id: "scannedQR", label: "Scanned QR" },
    { id: "hybridTest", label: "Hybrid Test" },
    { id: "smsLinkClicked", label: "SMS Link Clicked" },
    { id: "downloadedAttachment", label: "Downloaded Attachment" },
    { id: "responded", label: "Responded" },
    { id: "ignored", label: "Ignored" },
    { id: "submittedCredentials", label: "Submitted Credentials" },
    { id: "enteredMFA", label: "Entered MFA" },
  ];

  const getRiskScoreColor = (score: number) => {
    if (score >= 80) return "text-red-600";
    if (score >= 60) return "text-orange-600";
    if (score >= 40) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* Tabs */}
      <div className="overflow-x-auto overflow-y-hidden">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
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

      {/* Table */}
      <div className="overflow-x-auto mt-2">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-light text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-light text-gray-500 uppercase tracking-wider">
                Attack Modality
              </th>
              <th className="px-6 py-3 text-left text-xs font-light text-gray-500 uppercase tracking-wider">
                Risk Score
              </th>
              <th className="px-6 py-3 text-left text-xs font-light text-gray-500 uppercase tracking-wider">
                Frequency
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {interactions.map((attack, index) => {
              console.log('attack: ', attack)
              return (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-gray-100 text-gray-400 rounded-full mr-2 pt-1 text-center">{getInitials(attack.name)}</span>
                    <span className="text-sm font-medium text-gray-900">{attack.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">{attack.attackModality}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                  <span className={`px-2 py-1 rounded-full text-3xl font-bold ${getRiskScoreColor(attack.riskScore)}`}>
                    •
                  </span>
                  <span className="mt-1 text-sm">{attack.riskScore}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">{attack.frequency}</span>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-3 flex flex-col items-end justify-between mt-4">
        <div className="flex items-center gap-2">
          <ChevronLeft />
          <button className="px-2.5 py-1 text-sm bg-green-600 text-center text-white rounded">1</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">2</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">3</button>
          <span className="px-3 py-1 text-sm text-gray-600">...</span>
          <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">10</button>
          <ChevronRight />
        </div>
        <div className="text-sm text-gray-500 mt-2">
          Viewing 10 of 100
        </div>
      </div>
    </div>
  );
};

export default UserInteractionTable;
