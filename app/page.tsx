import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import UpcomingEventsList from "@/components/EventsTables/UpcomingEventsList"

export default function IndexPage() {
  const eventsData: EventType[] = [
    {
      id: "1",
      event: "The AI Salon",
      startDate: "2023-07-16T20:00:00.000Z",
      endDate: "2023-07-16T23:00:00.000Z",
      location: "San Francisco, CA",
      link: "https://lu.ma/z93cl6io",
    },
    {
      id: "2",
      event: "Scale AI Hackathon",
      startDate: "2023-07-15T16:00:00.000Z",
      endDate: "2023-07-15T23:00:00.000Z",
      location: "San Francisco, CA",
      link: "https://scale-ai.typeform.com/hackathon?typeform-source=t.co",
      tags: ["Hackathon"],
    },
    {
      id: "3",
      event: "Privacy Protecting AI Graphics: SecureRender, WebGL/GPU",
      startDate: "2023-06-30T01:00:00.000Z",
      endDate: "2023-06-30T04:00:00.000Z",
      location: "San Francisco, CA",
      link: "https://www.meetup.com/sfnode/events/294065543",
    },
  ]

  return <UpcomingEventsList events={eventsData} />
}
