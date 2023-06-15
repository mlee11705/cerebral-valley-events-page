import { format } from "date-fns"
import { processDate } from "src/utils/helpers"

export default function DateComponent({
  startDate,
  endDate,
}: {
  startDate: string
  endDate: string
}) {
  // TODO: Output in this format:
  // Jun 15 Thurs -
  // Jun 18 Sun
  // Where Thurs/Sun are small and grayer than the date

  // TODO: Only add dates on startDate change

  return (
    <div className="w-40 flex-none">
      <time className="sticky mb-1 font-mono text-base font-bold leading-none text-gray-400 dark:text-gray-500">
        {processDate(startDate, endDate)}
      </time>
    </div>
  )
}

//TODO: What is the time element/what does it do
