import UpcomingEvent from "./TimelineRow"

export default function UpcomingEventCard({ event }: { event: EventType }) {
  return (
    <div className="w-400 grow border-dashed border-l-2 border-gray-300 dark:border-[#28272c]">
      <div className="relative left-[-0.45rem]">
        {/* TODO: Only add this glowing dot every time there's a new date. e.g. on StartDate switch		 */}
        <div className="-left absolute mt-1 h-3 w-3 animate-ping rounded-full border border-white bg-indigo-600 dark:border-gray-900 dark:bg-emerald-500"></div>
        <div className="-left absolute mt-1 h-3 w-3 rounded-full border border-white bg-indigo-600 dark:border-gray-900 dark:bg-emerald-500"></div>
      </div>
      <div className="mb-10 ml-8 flex grow flex-col rounded-lg text-[#717078] bg-slate-100 p-5 dark:bg-[#27262b] border-2 border-t-[rgba(64,63,68,1)] border-l-[#313035] border-r-[#313035] border-b-[#333237] dark:hover:border-[#a1a1a3] dark:hover:bg-[#1b1a1f] dark:hover:text-[#a1a1a3] dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.1)] duration-300">
        <a href={event.link}>
          <h3 className="text-medium font-normal text-gray-900 dark:text-white mb-2">
            {event.event}
          </h3>
          <p className="text-base font-normal">
            {event.location}
          </p>

          {/* <a
          href={event.link}
          className="mt-4 inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Sign Up{" "}
          <svg
            className="ml-2 h-3 w-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a> */}
        </a>
      </div>
    </div>
  )
}
