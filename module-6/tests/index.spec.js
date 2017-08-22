import { expect } from 'chai';

import SpotifyWrapper from '../src/index';

describe('SpotifyWrapper library', () => {

  it('should create a new instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify).to.be.an.instanceof(SpotifyWrapper);
  });

  it('should receive apiURL as an option', () => {
    let spotify = new SpotifyWrapper({
      apiURL: 'lorem'
    });

    expect(spotify.apiURL).to.be.equal('lorem');
  });

  it('should use the default apiURL if not provided', () => {
    let spotify = new SpotifyWrapper({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receive token as an option', () => {
    let spotify = new SpotifyWrapper({
      token: 'lorem'
    });
    expect(spotify.token).to.be.equal('lorem');
  });

});
