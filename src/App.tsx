import React from "react"
import { BrowserRouter } from "react-router-dom"
import RoutesProvider from "./providers/RoutesProvider"

import "./styles/index.scss"

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<RoutesProvider />
			</BrowserRouter>
		</React.StrictMode>
	)
}
export default App
