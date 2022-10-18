import { Meta, Story } from "@storybook/react"

import Input, { IInputProps, InputTypeEnum } from "./Input"
import "./Input.scss"

export default {
	title: "UI/Input",
	component: Input,
} as Meta

const Template: Story<IInputProps> = args => <Input {...args} />
export const Empty = Template.bind({})

Empty.args = {
	setValue: () => null,
	placeholder: "Search",
}
export const InputError = Template.bind({})

InputError.args = {
	setValue: () => null,
	placeholder: "Search",
	error: "Некорректное значение",
}
export const Textarea = Template.bind({})

Textarea.args = {
	setValue: () => null,
	placeholder: "Описание",
	inputType: InputTypeEnum.TEXTAREA,
}
export const TextareaError = Template.bind({})

TextareaError.args = {
	setValue: () => null,
	placeholder: "Описание",
	inputType: InputTypeEnum.TEXTAREA,
	error: "Минимальное количество символов 20",
}
