import Airtable from "airtable"
import {
  AIRTABLE_BASE,
  AirtableTableEventColumns,
  AirtableTableEventViews,
  AirtableTables,
} from "src/utils/constants"

class AirtableService {
  base: Airtable.Base

  constructor() {
    Airtable.configure({
      endpointUrl: "https://api.airtable.com",
      apiKey: process.env.AIRTABLE_PERSONAL_TOKEN,
    })
    this.base = Airtable.base(AIRTABLE_BASE)
  }

  //   async fetchUpcomingEvents(): Promise<EventType[]> {
  //     const records = await this.base(AirtableTables.EVENTS_TABLE)
  //       .select({ view: AirtableTableEventViews.ALL_EVENTS })
  //       .all()

  //     // TODO: strict casting like this doesn't seem right
  //     const events: EventType[] = records.map((record) => {
  //       return {
  //         id: record.id,
  //         event: record.get("event") as string,
  //         startDate: record.get("startDate") as string,
  //         endDate: record.get("endDate") as string,
  //         location: record.get("location") as string,
  //         link: record.get("link") as string,
  //         tags: record.get("tags") as string[] | undefined,
  //       }
  //     })

  //     return events
  //   }
  // }

  async fetchUpcomingEvents() {
    let allRecords: any[] = []

    const records = await this.base(AirtableTables.EVENTS_TABLE)
      .select({ view: AirtableTableEventViews.ALL_EVENTS })
      .all()

    allRecords.push(records)
    return allRecords
  }
}

const airtableService = new AirtableService()
export default airtableService
