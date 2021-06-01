import axios from 'axios'
import { apiUrl } from "../../config/constants";

export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS"

export const fetchSpacesSuccess = (spaces)=> ({
    type: FETCH_SPACES_SUCCESS,
    payload: spaces
})

export const fetchUserSpaces = ()=> async(dispatch, getState)=> {
    const spacesCount = getState().spaces.length;
    try {
        const response = await axios.get(`${apiUrl}/spaces?offset=${spacesCount}`)
        console.log(response.data.spaces)
        dispatch(fetchSpacesSuccess(response.data.spaces))
        
    }catch(e) {
        console.log(e)
    }
}