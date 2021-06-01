import axios from 'axios'
import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";

export const FETCH_SPACE_SUCCESS = "FETCH_SPACE_SUCCESS"

export const fetchSpaceSuccess = (space)=> ({
    type: FETCH_SPACE_SUCCESS,
    payload: space
})

export const fetctSpace = (id)=> async(dispatch, getState)=> {
    console.log("Space to fetch:", id)
    try {
        const response = await axios.get(`${apiUrl}/spaces/${id}`)
        console.log(response)
        dispatch(fetchSpaceSuccess(response.data.space))
    }catch(e) {
        console.log(e)
    }
}