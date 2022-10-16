import React from "react"
import { Button } from "@mantine/core"

import "./UIButton.scss"

interface Props {
	label?: string
	classNameForWrapper?: string
	disabled?: boolean
}

const UIButton: React.FC<Props> = ({ label, classNameForWrapper, disabled = false }) => {
	return (
		<Button title="text" classNames={{ root: `${classNameForWrapper} button` }} disabled={disabled}>
			{label}
		</Button>
	)
}

export default UIButton
