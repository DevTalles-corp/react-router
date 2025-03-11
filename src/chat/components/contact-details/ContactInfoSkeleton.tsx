export const ContactInfoSkeleton = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-muted animate-pulse mb-3" />
        <div className="h-6 w-32 bg-muted animate-pulse rounded mb-2" />
        <div className="h-4 w-24 bg-muted animate-pulse rounded mb-2" />
        <div className="flex items-center mt-1">
          <div className="h-2 w-2 rounded-full bg-muted animate-pulse mr-1" />
          <div className="h-3 w-12 bg-muted animate-pulse rounded" />
        </div>
      </div>

      <div className="py-4 space-y-4">
        <div>
          <div className="h-4 w-32 bg-muted animate-pulse rounded mb-4" />
          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="h-4 w-16 bg-muted animate-pulse rounded" />
              <div className="h-4 w-32 bg-muted animate-pulse rounded" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-16 bg-muted animate-pulse rounded" />
              <div className="h-4 w-24 bg-muted animate-pulse rounded" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              <div className="h-4 w-20 bg-muted animate-pulse rounded" />
            </div>
          </div>
        </div>

        <div>
          <div className="h-4 w-28 bg-muted animate-pulse rounded mb-4" />
          <div className="space-y-3">
            <div className="flex justify-between">
              <div className="h-4 w-12 bg-muted animate-pulse rounded" />
              <div className="h-4 w-16 bg-muted animate-pulse rounded" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-muted animate-pulse rounded" />
              <div className="h-4 w-20 bg-muted animate-pulse rounded" />
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-16 bg-muted animate-pulse rounded" />
              <div className="h-4 w-16 bg-muted animate-pulse rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="h-8 w-full bg-muted animate-pulse rounded" />
      </div>
    </div>
  );
};
