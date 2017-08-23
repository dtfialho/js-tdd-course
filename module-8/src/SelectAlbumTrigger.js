import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

function makeRequest(albumID) {
  spotify.album.getAlbum(albumID)
    .then(data => renderAlbumInfo(data, albumInfo))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
}

export default function selectAlbumTrigger() {
  albumList.addEventListener('click', (e) => {
    const target = e.target;
    e.preventDefault();
    makeRequest(target.getAttribute('data-album-id'));
  });
}
