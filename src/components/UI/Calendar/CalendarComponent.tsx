import React, { useState } from "react"
import { Calendar } from "@mantine/dates"
import CalendarItem from "./components/CalendarItem/CalendarItem"
import { calendarItemTransformer, ICalendarCard } from "./utils"
import "./CalendarComponent.scss"

export interface ICalendarComponentProps {
	calendarNotes: ICalendarCard[]
}

const CalendarComponent: React.FC<ICalendarComponentProps> = ({ calendarNotes }) => {
	const [value, setValue] = useState<Date | null>(null)

	return (
		<Calendar
			value={value}
			onChange={setValue}
			classNames={{
				calendarBase: "calendar__base",
				calendarHeader: "calendar__header",
				calendarHeaderControl: "header__control",
				calendarHeaderLevel: "header__level",
				cell: "calendar__cell",
				day: "calendar__day",
				month: "calendar__month",
				weekday: "weekday",
				weekdayCell: "weekday__cell",
			}}
			allowLevelChange={false}
			weekdayLabelFormat={"ddd"}
			style={{ borderRadius: "8px" }}
			renderDay={date => <CalendarItem notes={calendarItemTransformer([...calendarNotes], date)} date={date} />}
		/>
	)
}

export default CalendarComponent
