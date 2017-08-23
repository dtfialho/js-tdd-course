import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('AC/DC');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('6mUdeDZCsExyJLMdAfDuwh');
const albumInfo = document.getElementById('album-info');

albums.then(data => renderAlbums(data.albums.items, albumList));

album.then(data => renderAlbumInfo(data, albumInfo));
