import convertTime from './ConvertTime';

function createMarkup(data) {
  return data.map(track => `
    <div class="music" data-track-preview="${track.preview_url}">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${convertTime(track.duration_ms)}</p>
    </div>`).join('');
}

export default function renderAlbumTracks(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
