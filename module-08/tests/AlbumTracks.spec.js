import 'jsdom-global/register';
import { expect } from 'chai';

import renderAlbumTracks from '../src/AlbumTracks';
import convertTime from '../src/ConvertTime';

describe('AlbumTracks', () => {

  const data = [
    {
      preview_url: 'https://p.scdn.co/mp3-preview/63c396837c1738dd17a7a2b055a4981dce74f46f?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Hells Bells',
      duration_ms: 312293,
    },
  ];

  const data2 = [
    {
      preview_url: 'https://p.scdn.co/mp3-preview/63c396837c1738dd17a7a2b055a4981dce74f46f?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Hells Bells',
      duration_ms: 312293,
    },
    {
      preview_url: 'https://p.scdn.co/mp3-preview/63c396837c1738dd17a7a2b055a4981dce74f46f?cid=8897482848704f2a8f8d7c79726a70d4',
      track_number: 1,
      name: 'Hells Bells',
      duration_ms: 312293,
    },
  ];

  const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/63c396837c1738dd17a7a2b055a4981dce74f46f?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Hells Bells</p>
      <p class="music-duration">${convertTime(312293)}</p>
    </div>`;

  const markup2 = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/63c396837c1738dd17a7a2b055a4981dce74f46f?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Hells Bells</p>
      <p class="music-duration">${convertTime(312293)}</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/63c396837c1738dd17a7a2b055a4981dce74f46f?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Hells Bells</p>
      <p class="music-duration">${convertTime(312293)}</p>
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when more than 1 item', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data2, element);

    expect(element.innerHTML).to.be.eql(markup2);
  });
});
