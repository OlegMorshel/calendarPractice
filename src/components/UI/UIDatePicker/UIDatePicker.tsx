import { DatePicker } from "@mantine/dates"
import React from "react"
import "./UIDatePicker.scss"
export interface IUIDatePickerProps {
	name: string
	id: string
	placeholder?: string
	error?: string
	values?: Date | null
	setFieldValue: (field: string, value: Date | null) => void
	classNameForWrapper?: string
}
const UIDatePicker: React.FC<IUIDatePickerProps> = ({ setFieldValue, error, id, name, placeholder, values, classNameForWrapper }) => {
	const handleChange = (e: Date | null) => {
		setFieldValue(name, e)
	}

	return (
		<DatePicker
			required
			placeholder={placeholder ?? "ДД.ММ.ГГ"}
			inputFormat="DD.MM.YYYY"
			classNames={{ root: `${classNameForWrapper}`, wrapper: "date__input" }}
			className={classNameForWrapper}
			name={name}
			id={id}
			error={error}
			value={values}
			onChange={handleChange}
		/>
	)
}

export default UIDatePicker
