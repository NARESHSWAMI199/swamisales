import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Dashborad from "./Components/Dashborad";
import Login from "./Components/Login";
import  Wholesale from "./Components/Wholesales";
// import Singup from "./Components/Singup";
import DataTable from "./Components/Users";
import DetailView from "./Components/DetailView";






const BaseRouter = () => {

    return (
        <Routes>
            <Route  path="/" element={<Dashborad />} />
            <Route path="/users" element={<DataTable />} />
            <Route  path="/login/" element={<Login/>} />
            <Route path="/wholesales" element={<Wholesale />} />
            <Route path="/users/:username" element={<DetailView />} />
        </Routes>
    )
}

export default BaseRouter;
