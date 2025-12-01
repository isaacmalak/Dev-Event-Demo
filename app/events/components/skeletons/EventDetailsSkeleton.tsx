export function EventDetailsSkeleton() {
  return (
    <div className="details ">
      
        {/* Event Details */}
        <div className="content">
          <div className="h-14 w-80 animate-pulse rounded-2xl bg-gray-700" />
          <div className="h-7 w-50 rounded-2xl bg-gray-700" />
          <div className="h-5 w-120 rounded-2xl bg-gray-700" />
        </div>
        {/* Divider */}
        <div className="divide-accent-black"> </div>
        {/* Event Form*/}

        <div className="booking">
            <div className="h-10 w-60 animate-pulse rounded-2xl bg-gray-700" />
            <div className="h-10 w-60 animate-pulse rounded-2xl bg-gray-700" />
            <div className="h-10 w-60 animate-pulse rounded-2xl bg-gray-700" />

        </div>
      </div>
    
  );
}


// flex h-screen flex-col rounded-2xl bg-[#15363186] p-8