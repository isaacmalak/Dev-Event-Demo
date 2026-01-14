export function EventDetailsSkeleton() {
  return (
    <div className="details mt-12 flex w-full animate-pulse flex-col items-start gap-12 max-lg:items-center lg:flex-row">
      {/* Left Section (Banner) */}
      <div className="flex w-full max-w-lg flex-1 flex-col gap-8">
        <div className="banner h-[300px] max-h-[457px] w-full rounded-lg bg-gray-700/60 object-cover" />
      </div>
      {/* Right Section (Content) */}
      <div className="content flex flex-[2] flex-col gap-8 max-lg:w-full">
        {/* Title & Subtitle */}
        <div className="h-10 w-2/3 rounded-xl bg-gray-700/80" />
        <div className="h-6 w-1/3 rounded-lg bg-gray-700/60" />
        {/* Description */}
        <div className="h-4 w-full rounded-md bg-gray-700/40" />
        <div className="h-4 w-5/6 rounded-md bg-gray-700/30" />
        {/* Agenda Skeleton */}
        <div className="agenda flex flex-col gap-2">
          <ul>
            <li className="text-light-100 mb-2 h-4 w-2/3 rounded bg-gray-700/30 text-lg max-sm:text-sm" />
            <li className="text-light-100 mb-2 h-4 w-1/2 rounded bg-gray-700/40 text-lg max-sm:text-sm" />
            <li className="text-light-100 h-4 w-1/3 rounded bg-gray-700/20 text-lg max-sm:text-sm" />
          </ul>
        </div>
        {/* Actions Skeleton */}
        <div className="mt-6 flex gap-4">
          <div className="h-10 w-24 rounded-lg bg-gray-700/50" />
          <div className="h-10 w-24 rounded-lg bg-gray-700/30" />
        </div>
      </div>
    </div>
  );
}
