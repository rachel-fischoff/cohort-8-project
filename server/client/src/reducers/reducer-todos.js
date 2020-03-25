import { FETCH_TODOS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      console.log('action.payload.data', action.payload.data)
      state = []
      return state.concat([action.payload.data]);
        default:
          return state;
  }
}
