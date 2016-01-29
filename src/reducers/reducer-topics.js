import { FETCH_TOPICS } from '../actions/index';

const INITIAL_STATE = { topics: {}, topic: null, image: null };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case FETCH_TOPICS:
        return { ...state, topics: action.payload.data };
    default:
        return state;
    }
}
