import DateComponent from "./DateComponent"
import UpcomingEventCard from "./UpcomingEventCard"

export default function TimelineRow({ event }: { event: EventType }) {
  return (
    <div className="flex flex-col md:flex-row">
      <DateComponent startDate={event.startDate} endDate={event.endDate} />
      <UpcomingEventCard event={event} />
    </div>
  )
}
