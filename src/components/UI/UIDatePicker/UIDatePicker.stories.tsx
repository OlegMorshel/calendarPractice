import { Meta, Story } from "@storybook/react"

import UIDatePicker, { IUIDatePickerProps } from "./UIDatePicker"
import "./UIDatePicker.scss"

export default {
	title: "UI/DatePicker",
	component: UIDatePicker,
} as Meta

const Template: Story<IUIDatePickerProps> = args => <UIDatePicker {...args} />

export const Defaut = Template.bind({})

Defaut.args = {
	placeholder: "ДД.ММ.ГГ",
	setFieldValue: () => null,
	classNameForWrapper: "",
	values: null,
}
export const Error = Template.bind({})

Error.args = {
	placeholder: "ДД.ММ.ГГ",
	error: "Обязательное поле",
	setFieldValue: () => null,
}
