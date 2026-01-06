const StatSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-3 w-1/2" />
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
    </div>
  );
};

export default StatSkeleton;
