import { Textarea, TextInput } from "@mantine/core"
import React, { ChangeEventHandler } from "react"
import "./Input.scss"

export enum InputTypeEnum {
	TEXT = "TEXT",
	TEXTAREA = "TEXTAREA",
}

interface Props {
	inputType?: InputTypeEnum
	name?: string
	id?: string
	placeholder?: string
	error?: string
	values?: string
	setValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
	classNameForWrapper?: string
}

const Input: React.FC<Props> = ({ setValue, error, id, placeholder, values, name, classNameForWrapper, inputType }) => {
	const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
		setValue(event)
	}

	switch (inputType) {
		case InputTypeEnum.TEXTAREA:
			return (
				<Textarea
					value={values}
					classNames={{ root: `${classNameForWrapper} input__textarea`, label: "input__wrapper" }}
					placeholder={placeholder}
					onChange={e => handleChange(e)}
					name={name}
					error={error}
					id={id}
				/>
			)
		default:
			return (
				<TextInput
					value={values}
					classNames={{ root: `${classNameForWrapper} input__text` }}
					placeholder={placeholder}
					onChange={e => handleChange(e)}
					name={name}
					error={error}
					id={id}
				/>
			)
	}
}

export default Input
