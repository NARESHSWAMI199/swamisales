import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function middleware() {
    const navigate = useNavigate();
    useEffect(() => {
        if (props.isAuthenticated === false) {
            navigate("/login")
        }
    }, [])
  return (
    <></>
  )
}

export default middleware