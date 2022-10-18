import React from "react"
import { Button } from "@mantine/core"

import "./UIButton.scss"

export interface IUIButtonProps {
	label?: string
	classNameForWrapper?: string
	disabled?: boolean
	onClick?: () => void
	type?: "button" | "submit" | "reset"
}

const UIButton: React.FC<IUIButtonProps> = ({ label, classNameForWrapper, disabled = false, onClick, type }) => {
	return (
		<Button
			title="text"
			type={type}
			classNames={{ root: `${classNameForWrapper} button`, label: "button__label" }}
			disabled={disabled}
			onClick={onClick}
		>
			{label}
		</Button>
	)
}

export default UIButton
