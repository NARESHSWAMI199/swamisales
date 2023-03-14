import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashborad from "./Components/Dashborad";
import {DataTable} from "./Components/Users";
const BaseRouter = () => (
    <div>
        <Routes>
            <Route  path="/" element={<Dashborad />} />
            <Route path="/users" element={<DataTable />} />
        </Routes>
    </div>
);

export default BaseRouter;
