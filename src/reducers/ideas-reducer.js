/* eslint-disable no-case-declarations */
import {
  ADD_TILE,
  DELETE_TILE,
  UPDATE_TILE,
  RECEIVE_TILES,
  RECEIVE_NEW_TILE,

} from './action_creators';


const initialState = [];

export default function ideas(state = initialState, action) {
  switch (action.type) {
    case ADD_TILE:
      const newItem = {
        id: action.tempId,
      };
      return [
        newItem,
        ...state,
      ];
    case DELETE_TILE:
      return state.filter(tile => tile.id !== action.id);
    case UPDATE_TILE:
      return state.map(tile => (tile.id === action.id
        ? { ...tile, body: action.body, title: action.title }
        : tile));
    case RECEIVE_NEW_TILE:
      return state.map(tile => (tile.id === action.tempId
        ? {
          ...tile,
          id: action.tile.id,
          created_date: action.tile.created_date,
        }
        : tile));
    case RECEIVE_TILES:
      return action.tiles;
    default:
      return state;
  }
}
