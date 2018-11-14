import mockServerFetch from './mock_server';
import guid from '../utils/guid';

export const ADD_TILE = 'ADD_TILE';
export const DELETE_TILE = 'DELETE_TILE';
export const UPDATE_TILE = 'UPDATE_TILE';

export const REQUEST_TILES = 'REQUEST_TILES';
export const RECEIVE_TILES = 'RECEIVE_TILES';

function requestTiles() {
  return {
    type: REQUEST_TILES,
  };
}

function receiveTiles(tiles) {
  return {
    type: RECEIVE_TILES,
    tiles,
  };
}

export function fetchTiles() {
  return (dispatch) => {
    dispatch(requestTiles());
    return mockServerFetch('ideas/')
      .then(tiles => dispatch(receiveTiles(tiles)))
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export const REQUEST_NEW_TILE = 'REQUEST_NEW_TILE';
export const RECEIVE_NEW_TILE = 'RECEIVE_NEW_TILE';

export function addTile(tempId) {
  return { type: ADD_TILE, tempId };
}

export function deleteTile(id) {
  return { type: DELETE_TILE, id };
}

export function updateTile(id, body, title) {
  return {
    type: UPDATE_TILE, id, body, title,
  };
}

function requestNewTile() {
  return {
    type: REQUEST_NEW_TILE,
  };
}

function receiveNewTile(tile, tempId) {
  return {
    type: RECEIVE_NEW_TILE,
    tile,
    tempId,
  };
}

export function fetchNewTile() {
  const tempId = `${guid()}-temp-local-id`;
  return (dispatch) => {
    dispatch(addTile(tempId));
    dispatch(requestNewTile());
    return mockServerFetch('ideas/new')
      .then(tile => dispatch(receiveNewTile(tile, tempId)))
      .catch((error) => {
        console.log(error.message);
      });
  };
}

export const REQUEST_UPDATE_TILE = 'REQUEST_UPDATE_TILE';
export const RECEIVE_UPDATE_TILE = 'RECEIVE_UPDATE_TILE';

function requestUpdateTile() {
  return {
    type: REQUEST_UPDATE_TILE,
  };
}

function receiveUpdateTile(tile, tempId) {
  return {
    type: RECEIVE_UPDATE_TILE,
    tile,
    tempId,
  };
}

export function fetchUpdateTile(id, body, title) {
  return (dispatch) => {
    dispatch(updateTile(id, body, title));
    dispatch(requestUpdateTile());
    return mockServerFetch('ideas/update', { id, body, title })
      .then(() => dispatch(receiveUpdateTile()))
      .catch((error) => {
        console.log(error.message);
      });
  };
}


export const REQUEST_DELETE_TILE = 'REQUEST_DELETE_TILE';
export const RECEIVE_DELETE_TILE = 'RECEIVE_DELETE_TILE';

function requestDeleteTile() {
  return {
    type: REQUEST_DELETE_TILE,
  };
}

function receiveDeleteTile(tile, tempId) {
  return {
    type: RECEIVE_DELETE_TILE,
    tile,
    tempId,
  };
}

export function fetchDeleteTile(id) {
  return (dispatch) => {
    dispatch(deleteTile(id));
    dispatch(requestDeleteTile());
    return mockServerFetch('ideas/delete', { id })
      .then(() => dispatch(receiveDeleteTile()))
      .catch((error) => {
        console.log(error.message);
      });
  };
}
