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

// export const Full = Template.bind({})

// Empty.args = {
// 	calendarNotes: [{ date: new Date(), description: "Описание заметки 1", id: "1322", shortName: "Название заметки 1" }],
// }
