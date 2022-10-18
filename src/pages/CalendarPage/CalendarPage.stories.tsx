import { Meta } from "@storybook/react"

import CalendarPage from "./CalendarPage"
import "./CalendarPage.scss"

export default {
	title: "CalendarPage",
	component: CalendarPage,
} as Meta

const Template = () => <CalendarPage />

export const Defaut = Template.bind({})
