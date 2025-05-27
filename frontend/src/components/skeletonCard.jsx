const SkeletonCard = () => (
  <li className="p-4 border rounded-xl bg-white shadow space-y-3 dark:bg-gray-800 animate-pulse">
    {/* Status & Priority */}
    <div className="flex items-end space-x-2">
      <div className="h-4 w-16 bg-gray-300 dark:bg-gray-800 rounded-full"></div>
      <div className="h-4 w-12 bg-gray-300 dark:bg-gray-800 rounded-full"></div>
    </div>

    <div className="flex justify-between items-start">
      <div className="space-y-2">
        <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-800 rounded"></div>
        <div className="h-3 w-full bg-gray-300 dark:bg-gray-800 rounded"></div>
      </div>
    </div>

    <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-800 rounded"></div>
    <div className="w-full h-2.5 bg-gray-300 dark:bg-gray-800 rounded-full"></div>

    <div className="flex justify-between text-xs text-gray-400">
      <div className="h-3 w-20 bg-gray-300 dark:bg-gray-800 rounded"></div>
      <div className="h-3 w-20 bg-gray-300 dark:bg-gray-800 rounded"></div>
    </div>

    <div className="flex space-x-2">
      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-800 rounded-full"></div>
      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-800 rounded-full"></div>
      <div className="w-8 h-8 bg-gray-300 dark:bg-gray-800 rounded-full"></div>
    </div>

    <div className="flex justify-end space-x-2 mt-3">
      <div className="h-8 w-16 bg-gray-300 dark:bg-gray-800 rounded"></div>
      <div className="h-8 w-16 bg-gray-300 dark:bg-gray-800 rounded"></div>
    </div>
  </li>
);

export default SkeletonCard;