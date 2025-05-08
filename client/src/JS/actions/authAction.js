//Importing the necessary modules and action types
import axios from "axios";
import { CLEAR_ERRORS_AUTH, CLEAR_SUCCESS_AUTH, CURRENT_AUTH, FAIL_AUTH, LOAD_AUTH, LOGOUT_AUTH, SUCCESS_AUTH } from "../actionTypes/authActionTypes"


//Actions creators

// Register User 
export const register = (newUser, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post("/api/auth/register", newUser)
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        navigate('/profile')
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
    }
}

// Login User
export const login = (user, navigate) => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        const result = await axios.post("/api/auth/login", user)
        dispatch({ type: SUCCESS_AUTH, payload: result.data });
        navigate('/profile')
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
    }
}

// Current User
export const currentUser = () => async (dispatch) => {
    dispatch({ type: LOAD_AUTH });
    try {
        let config = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        const result = await axios.get("/api/auth/current", config)
        dispatch({ type: CURRENT_AUTH, payload: result.data });
    } catch (error) {
        dispatch({ type: FAIL_AUTH, payload: error.response.data.errors });
    }
}

// Logout User
export const logout = (navigate) => (dispatch) => {
    dispatch({ type: LOGOUT_AUTH });
    navigate('/')
}

// Clear Errors
export const clearErrors = () => {
    return { type: CLEAR_ERRORS_AUTH}
}

// Clear Success
export const clearSuccess = () => {
    return { type: CLEAR_SUCCESS_AUTH}
}