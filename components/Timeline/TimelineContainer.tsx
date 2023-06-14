"use client"

import React, { useEffect, useState } from "react"
import AirtableService from "src/services/airtable"
import { AirtableTableEventColumns } from "src/utils/constants"

import TimelineRow from "./TimelineRow"

export default function TimelineContainer({ events }: { events: EventType[] }) {
  return (
    <div className="relative mx-auto mt-12  w-3/4 justify-center xl:w-1/2">
      {events.map((event) => (
        <TimelineRow key={event.id} event={event} />
      ))}
    </div>
  )
}

// const MyComponent = () => {
//   const [events, setEvents] = useState<EventType[]>([])
//   const [filteredData, setFilteredData] = useState([])

//   const eventObjMapper = (events: any[]) => {
//     const mappedEvents: EventType[] = []

//     events.forEach(async (event) => {
//       const mappedEventObj: EventType = {
//         id: event.getId(),
//         event: event.get(AirtableTableEventColumns.EVENT),
//         startDate: event.get(AirtableTableEventColumns.START),
//         endDate: event.get(AirtableTableEventColumns.END),
//         location: event.get(AirtableTableEventColumns.LOCATION),
//         link: event.get(AirtableTableEventColumns.LINK),
//         tags: event.get(AirtableTableEventColumns.TAGS) || [],
//       }
//       mappedEvents.push(mappedEventObj)
//     })
//     return mappedEvents
//   }

//   useEffect(() => {
//     // Fetch the initial data
//     fetchData()
//   }, [])

//   const fetchData = async () => {
//     // Fetch data from API or database
//     const response = await AirtableService.fetchUpcomingEvents()
//     setEvents(eventObjMapper(response))
//     // setFilteredData(data) // Set initial filtered data same as the initial data
//   }

//   //   const filterData = () => {
//   //     // Apply filtering logic to update filteredData state
//   //     // e.g., filter based on a condition or user input
//   //     const filtered = data.filter((item) => {
//   //       // Your filtering condition goes here
//   //       return item.someProperty === "someValue"
//   //     })
//   //     setFilteredData(filtered)
//   //   }

//   return (
//     <div className="relative mx-auto mt-12  w-3/4 justify-center xl:w-1/2">
//       {events.map((event) => (
//         <TimelineRow key={event.id} event={event} />
//       ))}
//     </div>
//   )

//   //   return (
//   //     <div>
//   //       <button onClick={filterData}>Filter Data</button>
//   //       {filteredData.map((item) => (
//   //         <div key={item.id}>{item.name}</div>
//   //       ))}
//   //     </div>
//   //   )
// }
