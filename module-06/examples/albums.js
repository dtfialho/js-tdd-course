global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/';

const spotify = new SpotifyWrapper({
  token: 'BQBvBVXrpzikc4ccHdx0w1ZTK_kMTTlbhRUXIwGs_lvo2CCBF23qE_jcGXaQNFWVmy2T2ydVdmUDyh9gytkxS2tW4dE83bU-R67Cb0I90tXTYkwrC2Wf_2OX44ebD51PSAKG4ePvuGZTVKQO',
});

const albums = spotify.search.albums('AC/DC');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
