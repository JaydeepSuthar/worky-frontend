import React from "react";
import useWebStore from "../context/webStore";
import { Outlet } from "react-router-dom";
import Login from "../pages/auth/Login";

const AuthLayout = () => {
    const isLogin = useWebStore((state) => state.isLogin);
    if (isLogin) {
        return <Outlet />;
    } else {
        return <Login />;
    }
};

export default AuthLayout;
