export function selectSong (song = null) {
  return { type: 'SELECT_SONG', song };
}

export function selectArtist (artist = null) {
  return { type: 'SELECT_ARTIST', artist };
}
