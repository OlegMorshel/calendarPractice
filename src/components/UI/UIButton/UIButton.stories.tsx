import { Meta, Story } from "@storybook/react"

import UIButton, { IUIButtonProps } from "./UIButton"
import "./UIButton.scss"

export default {
	title: "UI/Button",
	component: UIButton,
} as Meta

const Template: Story<IUIButtonProps> = args => <UIButton {...args} />

export const Defaut = Template.bind({})

Defaut.args = {
	label: "Default",
	type: "button",
	disabled: false,
}
