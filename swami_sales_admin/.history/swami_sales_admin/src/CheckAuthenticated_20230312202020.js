

import { useNavigate } from "react-router-dom"

function CheckAuthenticated(props) {
    const navigate = useNavigate()
  return (
      (props.token === null || props.token === undefined) ? navigate('/login') : ''
  )
}

export default CheckAuthenticated