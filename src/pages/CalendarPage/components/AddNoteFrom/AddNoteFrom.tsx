import Input, { InputTypeEnum } from "@src/components/UI/Input/Input"
import UIButton from "@src/components/UI/UIButton/UIButton"
import React from "react"

import "./AddNoteFrom.scss"

interface Props {
	classNamesForWrapper?: string
}

const AddNoteFrom: React.FC<Props> = ({ classNamesForWrapper }) => {
	return (
		<div className={`form__inner ${classNamesForWrapper}`}>
			<h5 className="form__title">Добавить событие</h5>
			<form className="form">
				<Input inputType={InputTypeEnum.DATE} classNameForWrapper="input__date" />
				<Input classNameForWrapper="input__name" placeholder="Укажите короткое название" />
				<Input inputType={InputTypeEnum.TEXTAREA} classNameForWrapper="input__description" placeholder="Введите описание" />
				<UIButton label="Добавить" />
			</form>
		</div>
	)
}

export default AddNoteFrom
