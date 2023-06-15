import Link from "next/link"
import airtableService from "@/src/services/airtable"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import TimelineContainer from "@/components/Timeline/TimelineContainer"

export default async function IndexPage() {
  return <TimelineContainer />
}
