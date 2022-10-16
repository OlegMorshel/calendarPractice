import CalendarComponent from "@src/components/UI/Calendar/CalendarComponent"
import React from "react"

import "./CalendarPage.scss"
import AddNoteFrom from "./components/AddNoteFrom/AddNoteFrom"

const CalendarPage: React.FC = () => {
	return (
		<div className="page__wrapper">
			<h3 className="page__title">Календарь</h3>
			<div className="content__wrapper">
				<CalendarComponent />
				<AddNoteFrom classNamesForWrapper="content__form" />
			</div>
		</div>
	)
}

export default CalendarPage
