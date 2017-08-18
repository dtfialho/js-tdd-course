import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify wrapper', () => {

  describe('smoke tests', () => {

    it('should exist the search method', () => {
      expect(search).to.exist;
    });

    it('should exist the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exist the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exist the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exist the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });

  });

  describe('Generic search', () => {

    it('should call fetch function', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
      fetchedStub.restore();
    });

    it('should receive the correct url to fetch', () => {
      const fetchedStub = sinon.stub(global, 'fetch');
      const artists = search('AC/DC', 'artist');

      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=AC/DC&type=artist');

      const albuns = search('AC/DC', 'album');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=AC/DC&type=album');
    });

  });

});
