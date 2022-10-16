import { Textarea, TextInput } from "@mantine/core"
import { DatePicker } from "@mantine/dates"
import React from "react"
import "./Input.scss"

export enum InputTypeEnum {
	DATE = "DATE",
	TEXT = "TEXT",
	TEXTAREA = "TEXTAREA",
}

interface Props {
	inputType?: InputTypeEnum
	classNameForWrapper?: string
	name?: string
	id?: string
	placeholder?: string
}

const Input: React.FC<Props> = ({ inputType = InputTypeEnum.TEXT, classNameForWrapper, id, name, placeholder }) => {
	// const handleChange = (e: Date | string) => {}
	switch (inputType) {
		case InputTypeEnum.DATE:
			return (
				<DatePicker
					required
					placeholder="ДД.ММ.ГГ"
					inputFormat="DD.MM.YYYY"
					classNames={{ input: `${classNameForWrapper} input__date` }}
					className={classNameForWrapper}
					name={name}
					id={id}
				/>
			)
		case InputTypeEnum.TEXTAREA:
			return <Textarea classNames={{ input: `${classNameForWrapper} input__textarea`, label: "input__wrapper" }} placeholder={placeholder} />
		default:
			return <TextInput classNames={{ input: `${classNameForWrapper} input__text` }} placeholder={placeholder} />
	}
}

export default Input
