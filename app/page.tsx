import Link from "next/link"
import airtableService from "@/src/services/airtable"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import TimelineContainer from "@/components/Timeline/TimelineContainer"

export default async function IndexPage() {
  const eventsData: EventType[] = [
    {
      id: "1",
      event: "The AI Salon",
      startDate: "Jun 14",
      endDate: "Jun 15",
      location: "San Francisco, CA",
      link: "https://lu.ma/z93cl6io",
    },
    {
      id: "2",
      event: "Scale AI Hackathon",
      startDate: "Jun 15",
      endDate: "Jun 17",
      location: "San Francisco, CA",
      link: "https://scale-ai.typeform.com/hackathon?typeform-source=t.co",
      tags: ["Hackathon"],
    },
    {
      id: "3",
      event: "Privacy Protecting AI Graphics: SecureRender, WebGL/GPU",
      startDate: "Jun 19",
      endDate: "Jun 19",
      location: "San Francisco, CA",
      link: "https://www.meetup.com/sfnode/events/294065543",
    },
  ]

  return <TimelineContainer events={eventsData} />
}
