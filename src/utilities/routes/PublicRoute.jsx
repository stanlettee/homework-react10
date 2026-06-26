import { useSelector } from "react-redux"
import { selectLogin } from "../../redux/users/usersSelectors"
import { Navigate } from "react-router"

export const PublicRestrictedRoute = ({children, restricted = true}) => {
    const login = useSelector(selectLogin)

    const shouldRedirect = login && restricted;

    console.log(shouldRedirect)

    return shouldRedirect ? <Navigate to="/home" /> : children;
}