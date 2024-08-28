import React from "react";
import { Route, Routes } from "react-router-dom";
import List from "../components/List";
import Checked from "../components/Checked";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/checked" element={<Checked />} />
        </Routes>
    );
};

export default Routing;
