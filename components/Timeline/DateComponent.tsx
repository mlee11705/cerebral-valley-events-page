export default function DateComponent({ event }: { event: EventType }) {
  return (
    <div className="w-44 flex-none">
      <time className="sticky mb-1 font-mono text-base font-bold leading-none text-gray-400 dark:text-gray-500">
        {event.startDate}
        {event.startDate !== event.endDate && ` - ${event.endDate}`}
      </time>
    </div>
  )
}
