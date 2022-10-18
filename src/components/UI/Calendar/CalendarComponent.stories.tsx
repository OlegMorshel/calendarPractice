import { Meta, Story } from "@storybook/react"

import CalendarComponent, { ICalendarComponentProps } from "./CalendarComponent"
import "./CalendarComponent.scss"

export default {
	title: "UI/Calendar",
	component: CalendarComponent,
} as Meta

const Template: Story<ICalendarComponentProps> = args => <CalendarComponent {...args} />
export const Empty = Template.bind({})

Empty.args = {
	calendarNotes: [],
}

export const Full = Template.bind({})

Full.args = {
	calendarNotes: [
		{ date: new Date(), description: "Магнит, Лента", id: "123", shortName: "Купить продукты" },
		{ date: new Date(), description: "На Ленина", id: "1234", shortName: "Сходить в салон" },
		{ date: new Date(), description: "Спортзал", id: "12345", shortName: "Потренироваться" },
	],
}
