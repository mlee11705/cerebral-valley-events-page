const AIRTABLE_BASE = "appNOa0dRcLXhHft1"

enum AirtableTables {
  EVENTS_TABLE = "tblY9mWxFMnTp7IzP",
}

enum AirtableTableEventViews {
  ALL_EVENTS = "viwGjHO5VHWJMFaRn",
  UPCOMING_EVENTS = "viwKfbSNjj5KeKtpD",
  PAST_EVENTS = "viwzNbCT5E20LpmH5",
}

enum AirtableTableEventColumns {
  EVENT = "Event",
  START = "Start",
  END = "End",
  LOCATION = "Location",
  LINK = "Link",
  TAGS = "Tags",
}

export {
  AIRTABLE_BASE,
  AirtableTables,
  AirtableTableEventViews,
  AirtableTableEventColumns,
}
