import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(4).fill(null);

  return (
    <aside className="w-80 h-full bg-base-100 text-base-content border-r border-base-300 flex flex-col p-4">
      {/* Profile Section Skeleton */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <div className="bg-accent w-20 h-20 rounded-full animate-pulse" />
        </div>
        <div className="bg-accent w-24 h-5 mt-3 rounded animate-pulse" />
        <div className="bg-accent w-32 h-4 mt-2 rounded animate-pulse" />
      </div>

      {/* Toggle Online Only Skeleton */}
      <div className="flex items-center mb-4">
        <div className="bg-accent w-5 h-5 rounded animate-pulse mr-2" />
        <div className="bg-accent w-24 h-4 rounded animate-pulse" />
      </div>

      {/* Contacts List Skeleton */}
      <div className="flex-1 overflow-y-auto">
        <div className="bg-accent w-24 h-4 mb-3 rounded animate-pulse" />
        <div className="space-y-2">
          {skeletonContacts.map((_, idx) => (
            <div
              key={idx}
              className="flex items-center p-3 rounded-lg space-x-3"
            >
              <div className="bg-accent w-12 h-12 rounded-full animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="bg-accent w-28 h-4 rounded animate-pulse" />
                <div className="bg-accent w-20 h-3 rounded animate-pulse" />
              </div>
              <div className="bg-accent w-10 h-3 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {skeletonContacts.length === 0 && (
          <div className="text-center text-secondary py-4">No users found</div>
        )}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;


