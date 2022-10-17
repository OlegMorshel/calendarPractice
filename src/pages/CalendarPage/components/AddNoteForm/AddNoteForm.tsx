import Input, { InputTypeEnum } from "@src/components/UI/Input/Input"
import UIButton from "@src/components/UI/UIButton/UIButton"
import React from "react"
import { AddNoteValidationSchema } from "./utils"
import { useFormik } from "formik"
import UIDatePicker from "@src/components/UI/UIDatePicker/UIDatePicker"
import "./AddNoteForm.scss"
import { ICalendarCard } from "@src/components/UI/Calendar/utils"
import { generateId } from "@src/utils/generateId"

interface IAddNote {
	date: string | null
	name: string
	description: string
}

interface Props {
	classNamesForWrapper?: string
	addCalendarNote: (note: ICalendarCard) => void
}

const AddNoteFrom: React.FC<Props> = ({ classNamesForWrapper, addCalendarNote }) => {
	const initialAddNoteFormValues = {
		date: "",
		name: "",
		description: "",
	}

	const addNoteForm = useFormik<IAddNote>({
		initialValues: { ...initialAddNoteFormValues },
		validationSchema: AddNoteValidationSchema,
		validateOnMount: true,
		validateOnChange: true,
		onSubmit: values => {
			addCalendarNote({
				description: values.description,
				shortName: values.name,
				date: values.date ? new Date(values.date) : new Date(),
				id: generateId(),
			})
			resetValues()
		},
	})

	const { values, errors, handleChange, handleSubmit, setFieldValue, isValid, resetForm } = addNoteForm

	function resetValues() {
		resetForm({ values: { date: "", description: "", name: "" } })
	}

	return (
		<div className={`form__inner ${classNamesForWrapper}`}>
			<h5 className="form__title">Добавить событие</h5>
			<form className="form" onSubmit={e => e.preventDefault()}>
				<UIDatePicker
					id="date"
					name="date"
					setFieldValue={setFieldValue}
					classNameForWrapper="input__date"
					values={values.date ? new Date(values.date) : null}
					error={errors.date}
				/>
				<Input
					classNameForWrapper="input__name"
					placeholder="Укажите короткое название"
					setValue={handleChange}
					values={values.name}
					error={errors.name}
					id={"name"}
					name={"name"}
				/>
				<Input
					inputType={InputTypeEnum.TEXTAREA}
					classNameForWrapper="input__description"
					placeholder="Укажите короткое название"
					setValue={handleChange}
					id={"description"}
					name={"description"}
					values={values.description}
					error={errors.description}
				/>
				<UIButton label="Добавить" onClick={handleSubmit} disabled={!isValid} type="submit" />
			</form>
		</div>
	)
}

export default AddNoteFrom
