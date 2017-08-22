import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');


describe('Search', () => {

  let fetchedStub;
  let promise;
  let spotify

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'lorem',
    });

    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {

    it('should exist the spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exist the spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exist the spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exist the spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    });

  });

  describe('spotify.search.artists', () => {

    it('should call fetch function', () => {
      const artists = spotify.search.artists('AC/DC');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = spotify.search.artists('AC/DC');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=AC/DC&type=artist');
    });

  });

  describe('spotify.search.albums', () => {

    it('should call fetch function', () => {
      const artists = spotify.search.albums('AC/DC');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = spotify.search.albums('AC/DC');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=AC/DC&type=album');
    });

  });

  describe('spotify.search.tracks', () => {

    it('should call fetch function', () => {
      const artists = spotify.search.tracks('AC/DC');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = spotify.search.tracks('AC/DC');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=AC/DC&type=track');
    });

  });

  describe('spotify.search.playlists', () => {

    it('should call fetch function', () => {
      const artists = spotify.search.playlists('AC/DC');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = spotify.search.playlists('AC/DC');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=AC/DC&type=playlist');
    });

  });

});
