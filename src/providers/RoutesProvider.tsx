import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
const CalendarPage = React.lazy(() => import("../pages/CalendarPage/CalendarPage"))
const RoutesProvider: React.FC = () => {
	return (
		<Suspense>
			<Routes>
				<Route path="*" element={<CalendarPage />} />
			</Routes>
		</Suspense>
	)
}

export default RoutesProvider
