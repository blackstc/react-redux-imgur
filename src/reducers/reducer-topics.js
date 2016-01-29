import { FETCH_TOPICS } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case FETCH_TOPICS:
        return { ...state, all: action.payload.data.data };
    default:
        return state;
    }
}
