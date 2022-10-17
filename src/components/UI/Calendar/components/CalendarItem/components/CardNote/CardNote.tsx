import { Text } from "@mantine/core"
import { ICalendarCard } from "@src/components/UI/Calendar/utils"
import React from "react"
import "./CardNote.scss"

interface Props {
	note: ICalendarCard
}

const CardNote: React.FC<Props> = ({ note }) => {
	const onCardClick = () => console.log("note", note)
	return (
		<div className="note" onClick={onCardClick}>
			<Text component="p" align="start" size="xl" className={"note__text"}>
				{note.shortName}
			</Text>
		</div>
	)
}

export default CardNote
