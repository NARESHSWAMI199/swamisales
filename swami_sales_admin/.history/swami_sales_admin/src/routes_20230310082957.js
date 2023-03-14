import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashborad from "./Components/Dashborad";
import Login from "./Components/Login";
import {DataTable} from "./Components/Users";
const BaseRouter = () => (
    <div>
        <Routes>
            <Route  path="/" element={<Dashborad />} />
            <Route path="/users" element={<DataTable />} />
            <Route  path="/login/" element={<Login/>} />{" "}
            <Route  path="/signup/" component={Signup} />{" "}
        </Routes>
    </div>
);

export default BaseRouter;
