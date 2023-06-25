"use client"

import React, { useEffect, useState } from "react"
import AirtableService from "src/services/airtable"
import { AirtableTableEventColumns } from "src/utils/constants"

import TimelineRow from "./TimelineRow"

//TODO: add filtering logic
//TODO: add search logic

const TimelineContainer = () => {
  const [events, setEvents] = useState<EventType[]>([])
  const [filteredData, setFilteredData] = useState([])

  const eventObjMapper = (events: any[]) => {
    const mappedEvents: EventType[] = []

    events.forEach(async (event) => {
      const mappedEventObj: EventType = {
        id: event.getId(),
        event: event.get(AirtableTableEventColumns.EVENT),
        startDate: event.get(AirtableTableEventColumns.START),
        endDate: event.get(AirtableTableEventColumns.END),
        location: event.get(AirtableTableEventColumns.LOCATION),
        link: event.get(AirtableTableEventColumns.LINK),
        tags: event.get(AirtableTableEventColumns.TAGS) || [],
      }
      mappedEvents.push(mappedEventObj)
    })
    return mappedEvents
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await AirtableService.fetchUpcomingEvents()
    setEvents(eventObjMapper(response))
    // setFilteredData(data) // Set initial filtered data same as the initial data
  }

  //   const filterData = () => {
  //     // Apply filtering logic to update filteredData state
  //     // e.g., filter based on a condition or user input
  //     const filtered = data.filter((item) => {
  //       // Your filtering condition goes here
  //       return item.someProperty === "someValue"
  //     })
  //     setFilteredData(filtered)
  //   }

  return (
    <div className="relative mx-8 xl:mx-auto lg:mx-auto md:mx-auto lg:w-3/4 md:w-3/4 mt-12 justify-center xl:w-1/2">
      {events.map((event) => (
        <TimelineRow key={event.id} event={event} />
      ))}
    </div>
  )
}

export default TimelineContainer
