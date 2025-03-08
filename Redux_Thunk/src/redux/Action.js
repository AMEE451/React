import { API } from "../config/Api"
import { CREATE_POST, DELETE_POST, GET_POSTS } from "./ActionType"

export const post_create = (payload) => async (dispatch) => {
    let res = await API.post("/posts", payload)
    dispatch({ type: CREATE_POST, payload: res.data })
}

export const get_posts = () => async (dispatch) => {
    let res = await API.get("/posts")
    dispatch({ type: GET_POSTS, payload: res.data })
}

export const delete_post = (id) => async (dispatch) => {
    let res = await API.delete(`/posts/${id}`)
    dispatch({ type: DELETE_POST, payload: id })
}