import { Text } from "@mantine/core"
import { ICalendarCard } from "@src/components/UI/Calendar/utils"
import React from "react"
import "./CardNote.scss"

interface Props {
	note: ICalendarCard
}

const CardNote: React.FC<Props> = ({ note }) => {
	return (
		<div className="note">
			<Text
				component="p"
				align="start"
				gradient={{ from: "indigo", to: "cyan", deg: 45 }}
				size="xl"
				style={{ fontFamily: "Greycliff CF, sans-serif" }}
				className={"note__text"}
			>
				{note.shortName}
			</Text>
		</div>
	)
}

export default CardNote
