import axios from 'axios'
import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";

export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS"

export const fetchSpacesSuccess = (spaces)=> ({
    type: FETCH_SPACES_SUCCESS,
    payload: spaces
})

export const fetchUserSpaces = ()=> async(dispatch, getState)=> {
    const spacesCount = getState().spaces.length;
    try {
        const response = await axios.get(`${apiUrl}/spaces?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${spacesCount}`)
        console.log(response.data.spaces)
        dispatch(fetchSpacesSuccess(response.data.spaces.rows))
        
    }catch(e) {
        console.log(e)
    }
}