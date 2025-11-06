import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => (
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
);

export default Pagination;
