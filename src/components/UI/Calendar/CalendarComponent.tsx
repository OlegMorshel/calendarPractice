import React, { useState } from "react"
import { Calendar } from "@mantine/dates"
import CalendarItem from "./components/CalendarItem/CalendarItem"
import { calendarItemTransformer } from "./utils"
import "./CalendarComponent.scss"

const CalendarComponent: React.FC = () => {
	const [value, setValue] = useState<Date | null>(null)

	return (
		<div className={"calendar__wrapper"}>
			<Calendar
				value={value}
				onChange={setValue}
				classNames={{
					calendarBase: "calendar__base",
					cell: "calendar__cell",
					day: "calendar__day",
					month: "calendar__month",
					weekday: "weekday",
					weekdayCell: "weekday__cell",
				}}
				allowLevelChange={false}
				weekdayLabelFormat={"ddd"}
				renderDay={date => (
					<CalendarItem
						notes={calendarItemTransformer(
							[
								{ date: new Date("2022-10-16"), description: "dfs", id: "dfs", shortName: "1 note" },
								{ date: new Date("2022-10-16"), description: "dfs", id: "dsadfs", shortName: "2 note" },
								{ date: new Date("2022-10-16"), description: "dfs", id: "dfssaddsa", shortName: "3 note" },
							],
							new Date()
						)}
						date={date}
					/>
				)}
			/>
		</div>
	)
}

export default CalendarComponent
