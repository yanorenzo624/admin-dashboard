const TableSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 animate-pulse">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-3"
        />
      ))}
    </div>
  );
};

export default TableSkeleton;
