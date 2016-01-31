import { FETCH_IMAGES, FETCH_IMAGE } from '../actions/index';

const INITIAL_STATE = { all: [], single: null };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
    case FETCH_IMAGES:
        return { ...state, all: action.payload.data.data }
    case FETCH_IMAGE:
        return { ...state, single: action.payload.data.data }
    default:
        return state;
    }
}
