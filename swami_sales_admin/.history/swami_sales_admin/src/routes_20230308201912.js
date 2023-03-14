import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashborad from "./Components/Dashborad";
import Users from "./Components/Users";
const BaseRouter = () => (
    <div>
        <Routes>
            <Route  path="/" element={<Dashborad />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    </div>
);

export default BaseRouter;
