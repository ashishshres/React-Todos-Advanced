import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="mt-4 flex gap-3 font-medium text-xl">
                <NavLink
                    className={(e) => {
                        return [
                            e.isActive ? "font-bold" : "",
                            e.isActive ? "text-blue-300" : "",
                        ].join(" ");
                    }}
                    to="/"
                >
                    All
                </NavLink>
                <NavLink
                    className={(e) => {
                        return [
                            e.isActive ? "font-bold" : "",
                            e.isActive ? "text-blue-300" : "",
                        ].join(" ");
                    }}
                    to="/checked"
                >
                    Checked
                </NavLink>
            </nav>
        </>
    );
};

export default Nav;
