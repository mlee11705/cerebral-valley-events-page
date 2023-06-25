import DateComponent from "./DateComponent"
import UpcomingEventCard from "./UpcomingEventCard"

export default function TimelineRow({ event }: { event: EventType }) {
  return (
    <div className="flex-row border-dashed border-l-2 border-[#e8e8ea] dark:border-[#28272c] pt-10">
      <DateComponent startDate={event.startDate} endDate={event.endDate} />
      <UpcomingEventCard event={event} />
    </div>
  )
}
