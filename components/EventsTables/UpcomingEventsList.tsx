import React, { useState } from "react"

// import useStore from "src/store"
// import { AirtableTableEventColumns } from "src/utils/constants"
// import { processDate, trimString } from "src/utils/helpers"

// import AirtableService from "@/src/services/airtable"

import UpcomingEvent from "./UpcomingEvent"

export default function UpcomingEventsList({
  events,
}: {
  events: EventType[]
}) {
  return (
    <ol className="relative mt-12 border-l border-gray-200 dark:border-gray-700">
      {events.map((event) => (
        <UpcomingEvent key={event.id} event={event} />
      ))}
    </ol>
  )
}
