export interface ICalendarCard {
	id: string
	date: Date
	shortName: string
	description: string
}

export const calendarItemTransformer = (notes: ICalendarCard[], date: Date): ICalendarCard[] => {
	if (!notes.length) return []
	return notes.filter(
		note =>
			note &&
			note.date.getFullYear() === date.getFullYear() &&
			note.date.getMonth() === date.getMonth() &&
			note.date.getDate() === date.getDate()
	)
}
