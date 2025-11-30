export function EventSkeleton() {
  return (
    <div className="m-auto flex h-120 w-auto flex-col items-start gap-2 rounded-3xl bg-gray-950 p-4">
      <div className="h-75 w-full animate-pulse rounded-3xl bg-gray-800" />
      <div className="h-10 w-100 animate-pulse rounded-3xl bg-gray-800" />
      <div className="mt-2 h-6 w-32 animate-pulse rounded-3xl bg-gray-800" />
      <div className="mt-2 h-6 w-48 animate-pulse rounded-3xl bg-gray-800" />
      <div className="mt-2 h-6 w-48 animate-pulse rounded-3xl bg-gray-800" />
      <div className="mt-2 h-6 w-48 animate-pulse rounded-3xl bg-gray-800" />
    </div>
  );
}
