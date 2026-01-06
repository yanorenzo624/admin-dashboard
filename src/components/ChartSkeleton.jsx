const ChartSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl animate-pulse">
      <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded mb-4 w-40" />
      <div className="h-56 bg-gray-200 dark:bg-gray-700 rounded" />
    </div>
  );
};

export default ChartSkeleton;
