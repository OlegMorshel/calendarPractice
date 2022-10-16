import React from "react"
import CardNote from "./components/CardNote/CardNote"
import { ICalendarCard } from "../../utils"
import "./CalendarItem.scss"

interface Props {
	notes: ICalendarCard[]
	date: Date
}

const CalendarItem: React.FC<Props> = ({ notes, date }) => {
	const day = date.getDate()
	return (
		<>
			<p className="day__text">{day}</p>
			<div className={notes.length <= 1 ? "notes__wrapper-single" : "notes__wrapper-miltiple"}>
				{notes.map(note => (
					<CardNote note={note} key={note.id} />
				))}
			</div>
		</>
	)
}

export default CalendarItem
