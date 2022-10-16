import CalendarComponent from "@src/components/UI/Calendar/CalendarComponent"
import { ICalendarCard } from "@src/components/UI/Calendar/utils"
import React, { useState } from "react"

import "./CalendarPage.scss"
import AddNoteForm from "./components/AddNoteForm/AddNoteForm"

const CalendarPage: React.FC = () => {
	const [calendarNotes, setCalendarNotes] = useState<ICalendarCard[]>([])

	const addCalendarNote = (note: ICalendarCard) => {
		setCalendarNotes(prev => [...prev, note])
	}

	return (
		<div className="page__wrapper">
			<h3 className="page__title">Календарь</h3>
			<div className="content__wrapper">
				<CalendarComponent calendarNotes={calendarNotes} />
				<AddNoteForm classNamesForWrapper="content__form" addCalendarNote={addCalendarNote} />
			</div>
		</div>
	)
}

export default CalendarPage
