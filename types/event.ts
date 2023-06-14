export default interface EventType {
  id: string
  event: string
  startDate: string
  endDate: string
  location: string
  link: string
  tags?: string[]
}

// TODO: Would have liked to use a type instead of interface but it's causing errors
