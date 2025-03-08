import { CREATE_POST, DELETE_POST, GET_POSTS } from "./ActionType"

let initialState = {
    post: []
}

export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
            return {
                ...state,
                post: [...state.post, payload]
            }
        case GET_POSTS:
            return {
                ...state,
                post: payload
            }
        case DELETE_POST:
            return {
                ...state,
                post: state.post.filter((post) => post.id != payload),
            }
        default:
            return state
    }
}