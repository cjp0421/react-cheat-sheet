import React from "react";
import { Routes, Route } from "react-router-dom";
import HooksPage from './src/pages/HooksPage';
import StateManagementPage from './src/pages/StateManagementPage';
import EventHandlingPage from './src/pages/EventHandlingPage';
import HomePage from "./src/pages/HomePage";
import NotFound from './src/pages/NotFound';
import RenderingDataPage from "./src/pages/RenderingDataPage";

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/hooks" element={<HooksPage />} />
            <Route path="/state-management" element={<StateManagementPage />} />
            <Route path="/event-handling" element={<EventHandlingPage />} />
            <Route path='/rendering-data' element={<RenderingDataPage />} />
        </Routes>
    )
}

export default AppRoutes;
