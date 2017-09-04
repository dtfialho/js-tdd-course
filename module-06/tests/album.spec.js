import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {

  let stubedFetch;
  let promise;
  let spotify;

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'lorem',
    });

    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should have getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    });

  });

  describe('getAlbum', () => {

    it('should cal fetch method', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const album = spotify.album.getAlbum('idGeradoPeLoSpoTiFy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/idGeradoPeLoSpoTiFy');

      const album2 = spotify.album.getAlbum('outroIdGeradoPeLoSpoTiFy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/outroIdGeradoPeLoSpoTiFy');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ album: 'nome' });
      const album = spotify.album.getAlbum('idGeradoPeLoSpoTiFy');

      expect(album.resolveValue).to.be.eql({ album: 'nome' });
    });

  });

  describe('getAlbums', () => {

    it('should cal fetch method', () => {
      const album = spotify.album.getAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = spotify.album.getAlbums(['idGeradoPeLoSpoTiFy', 'outroIdGeradoPeLoSpoTiFy']);
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=idGeradoPeLoSpoTiFy,outroIdGeradoPeLoSpoTiFy');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ albums: ['nome1','nome2'] });
      const albums = spotify.album.getAlbums(['idGeradoPeLoSpoTiFy', 'outroIdGeradoPeLoSpoTiFy']);

      expect(albums.resolveValue).to.be.eql({ albums: ['nome1','nome2'] });
    });

  });

  describe('getTracks', () => {

    it('should cal fetch method', () => {
      const tracks = spotify.album.getTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = spotify.album.getTracks('idGeradoPeLoSpoTiFy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/idGeradoPeLoSpoTiFy/tracks');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ tracks: ['nome1','nome2'] });
      const tracks = spotify.album.getTracks('idGeradoPeLoSpoTiFy');

      expect(tracks.resolveValue).to.be.eql({ tracks: ['nome1','nome2'] });
    });

  });

});
