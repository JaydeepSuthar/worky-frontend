import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route
                    path="/dashboard"
                    element={<Navigate to="/dashboard/home" replace />}
                />
                <Route path="/dashboard/*" element={<Dashboard />} />

                <Route path="" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default App;
