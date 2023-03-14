import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Dashborad from "./Components/Dashborad";
import Login from "./Components/Login";
import  Wholesale from "./Components/Wholesales";
// import Singup from "./Components/Singup";
import {DataTable} from "./Components/Users";
import { useNavigate } from "react-router-dom";






const BaseRouter = () => {
    const navigate = useNavigate();
    const verified = () => {
        if (props.isAuthenticated === false) {
            return "/login"
        }
    }
    return (
    <div>
        <Routes>
            <Route  path="/" element={<Dashborad />} />
            <Route path="/users" element={<DataTable />} />
            <Route  path="/login/" element={<Login/>} />
            <Route path="/wholesales" element={<Wholesale />} />
            {/* <Route  path="/signup/"  element={<Singup/>} /> */}
        </Routes>
    </div>
    )
}

export default BaseRouter;
