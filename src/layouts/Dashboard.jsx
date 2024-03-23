import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../routes";
import { SideNavbar, Navbar, Footer } from "../components/index";

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-blue-gray-50/50">
            <SideNavbar routes={routes} />
            <div className="p-4 xl:ml-80">
                <Navbar />
                <Routes>
                    {routes.map(
                        ({ layout, pages }) =>
                            layout === "dashboard" &&
                            pages.map(({ path, element }) => (
                                <Route exact path={path} element={element} />
                            ))
                    )}
                </Routes>
                <div className="text-blue-gray-600">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
