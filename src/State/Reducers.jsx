export const initialState = {
  active: {
    song: null,
    artist: null
  }
};

export function Reducers (state = initialState, action) {
  switch (action.type) {
    case 'SELECT_SONG': {
      let delta = {
        active: {
          song: action.song,
          artist: state.active.artist
        }
      };
      return Object.assign({}, state, delta);
    }
    case 'SELECT_ARTIST': {
      let delta = {
        active: {
          song: state.active.song,
          artist: state.active.artist
        }
      };
      return Object.assign({}, state, delta);
    }
    default:
      return state;
  }
};

export default Reducers;
