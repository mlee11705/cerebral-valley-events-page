import UpcomingEvent from "./TimelineRow"

export default function UpcomingEventCard({ event }: { event: EventType }) {
  return (
    <div className="w-400 grow border-l border-gray-300 dark:border-gray-700">
      <div className="relative -left-2">
        <div className="-left absolute mt-1 h-3 w-3 animate-ping rounded-full border border-white bg-indigo-600 dark:border-gray-900 dark:bg-emerald-500"></div>
        <div className="-left absolute mt-1 h-3 w-3 rounded-full border border-white bg-indigo-600 dark:border-gray-900 dark:bg-emerald-500"></div>
      </div>
      <div className="mb-10 ml-4 flex grow flex-col rounded-lg bg-slate-100 p-5 dark:bg-slate-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {event.event}
        </h3>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {event.location}
        </p>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          By Cerebral Valley
        </p>
        <a
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
        </a>
      </div>
    </div>
  )
}
