import * as Yup from "yup"

export const AddNoteValidationSchema = Yup.object({
	date: Yup.string().nullable().required("Поле обязательно для заполнения"),
	name: Yup.string().required("Поле обязательно для заполнения"),
	description: Yup.string().required("Поле обязательно для заполнения"),
})
