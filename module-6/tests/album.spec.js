import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { getAlbum, getAlbumTracks } from '../src/album';

sinonStubPromise(sinon);
chai.use(sinonChai);

global.fetch = require('node-fetch');

describe('Album', () => {

  let stubedFetch;
  let promise;

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    promise = stubedFetch.returnsPromise();
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {

    it('should have getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should have getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });

  });

  describe('getAlbum', () => {

    it('should cal fetch method', () => {
      const album = getAlbum();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const album = getAlbum('idGeradoPeLoSpoTiFy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/idGeradoPeLoSpoTiFy');

      const album2 = getAlbum('outroIdGeradoPeLoSpoTiFy');
      expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/outroIdGeradoPeLoSpoTiFy');
    });

    it('should return the correct data from the promise', () => {
      promise.resolves({ album: 'nome' });
      const album = getAlbum('idGeradoPeLoSpoTiFy');

      expect(album.resolveValue).to.be.eql({ album: 'nome' });
    });

  });

});
