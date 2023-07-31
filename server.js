const express = require('express');
const app = express();
require('dotenv').config();

//JSON
const artistRoute = 'https://difficult-fly-sombrero.cyclic.app/Images/artistimages/'
const PlaylistRoute = 'https://difficult-fly-sombrero.cyclic.app/Images/myplaylistimages/'
const spotifyPlaylistRoute =  'https://difficult-fly-sombrero.cyclic.app/Images/spotifyplaylistimages/'
const artistAlbumRoute = 'https://difficult-fly-sombrero.cyclic.app/Images/albumImages/'

const breads = [
  { name: 'KimBops', type: 'spotifyAlbum', date: '2023-07-21', category: 'Playlist', image:`${spotifyPlaylistRoute}kimbops.jpg`, creator: 'Spotify', id: 1},
  
  
  
  { name: 'Purpose (Deluxe)', type: 'artistAlbum', date: '2023-07-09', category: 'Album', creator: 'Justin Bieber', image:`${artistAlbumRoute}purpose.jpg`, id: 505},
  { name: 'J. Cole', type: 'artist', date: '2023-07-06', image:`${artistRoute}jcole.jpg`, category: 'Artist', id: 167},
  { name: 'TrenChill K-R&B', type: 'spotifyAlbum', date: '2023-07-20', category: 'Playlist', image:`${spotifyPlaylistRoute}trenchill.jpg`, creator: 'Spotify', id: 2, url: "https://open.spotify.com/playlist/37i9dQZF1DXbirtHQBuwCo"},
  { name: '2023 Playlist', type: 'userAlbum', date: '2023-07-17', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}playlistpicture.webp`, id: 3, url: "https://open.spotify.com/playlist/4aHEvG0cTO93AMxxYmuuis"},
  { name: 'Hype Songs', type: 'userAlbum', date: '2023-07-16', category: 'Playlist', creator: 'Spongebob', image:`${PlaylistRoute}house.jpg`, id: 4, url: "https://open.spotify.com/playlist/1VOrRymf251hAGZTm4lOQB"},
  { name: "Harry's House", type: 'artistAlbum', date: '2023-07-19', category: 'Album', creator: 'Harry Styles', image:`${artistAlbumRoute}harryshouse.jpg`, id: 503},
  { name: 'KR&B', type: 'userAlbum', date: '2023-07-15', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}kr&b.jpg`, id: 5, url: "https://open.spotify.com/playlist/3LmdMWF45HpsDVMolizqaI"},
  { name: 'Logic', type: 'artist', date: '2023-07-03', image:`${artistRoute}logic.jpg`, category: 'Artist', id: 11},
  { name: 'Proof', type: 'artistAlbum', date: '2023-07-15', category: 'Album', creator: 'BTS', image:`${artistAlbumRoute}proof.jpg`, id: 504},
  { name: 'K-Pop On!', type: 'spotifyAlbum', date: '2023-07-18', category: 'Playlist', image:`${spotifyPlaylistRoute}kpopon.jpg`, creator: 'Spotify', id: 12, url: "https://open.spotify.com/playlist/37i9dQZF1DX9tPFwDMOaN1"},
  { name: 'Bad Bunny', type: 'artist', date: '2023-07-08', image:`${artistRoute}badbunny.jpg`, category: 'Artist', id: 156},
  { name: 'Latin Pop/Music', type: 'userAlbum', date: '2023-07-14', category: 'Playlist', creator: 'Leon Noel', image:`${PlaylistRoute}latin.jpg`, id: 13, url: "https://open.spotify.com/playlist/6Qt5ORA9Xo5i4095F9vCa9"},
  { name: 'Feb 2022', type: 'userAlbum', date: '2022-02-01', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}rap1.jpg`, id: 14, url: "https://open.spotify.com/playlist/1VOrRymf251hAGZTm4lOQB"},
  { name: 'BOYNEXTDOOR', type: 'artist', date: '2023-07-07', image:`${artistRoute}boynextdoor.jpg`, category: 'Artist', id: 176},
  { name: 'Pop/Rap', type: 'userAlbum', date: '2023-07-12', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}rap2.jpg`, id: 144, url: "https://open.spotify.com/playlist/1DLb4iHhJFjqSvOFuQWtpr"},
  { name: 'MICO', type: 'artist', date: '2023-07-05', image:`${artistRoute}mico.jpg`, category: 'Artist', id: 111},
  { name: 'FACE', type: 'artistAlbum', date: '2023-07-20', category: 'Album', creator: 'Jimin', image:`${artistAlbumRoute}faceoff.jpg`, id: 500},
  { name: "NewJeans 2nd EP 'Get Up'", type: 'artistAlbum', date: '2023-07-21', category: 'Album', creator: 'NewJeans', image:`${artistAlbumRoute}getup.jpg`, id: 501},
  { name: 'Morning Classical', type: 'spotifyAlbum', date: '2023-07-19', category: 'Playlist', image:`${spotifyPlaylistRoute}morning.jpg`, creator: 'Spotify', id: 112, url: "https://open.spotify.com/playlist/37i9dQZF1DX9OZisIoJQhG"},
  { name: 'Liked Songs', type: 'userAlbum', date: '2023-07-11', category: 'Playlist', likedAmount: 33, image:`${PlaylistRoute}like.png`, id: 113},
  { name: 'J-Rock', type: 'userAlbum', date: '2023-07-10', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}rock.jpg`, id: 114, url: "https://open.spotify.com/playlist/1e16dCtxtD57IkkAmByh7z"},
  { name: 'Roddy Rich', type: 'artist', date: '2023-07-04', image:`${artistRoute}roddyrich.jpg`, category: 'Artist', id: 1675},
  { name: 'KimBops', type: 'spotifyAlbum', date: '2023-07-21', category: 'Playlist', image:`${spotifyPlaylistRoute}kimbops.jpg`, creator: 'Spotify', id: 121},
  { name: 'B.I.', type: 'artist', date: '2023-07-09', image:`${artistRoute}b.i.jpg`, category: 'Artist', id: 123},
  { name: '3', type: 'userAlbum', date: '2023-07-10', category: 'Playlist', creator: 'Raphael Crabbe', image:`${PlaylistRoute}wow.jpg`, id: 122, url: "https://open.spotify.com/playlist/2vg46UroSPwqZs5w12VP6d"},
  


  
];

const clientId = process.env.CLIENT_ID; // Make sure to set these environment variables
const clientSecret = process.env.CLIENT_SECRET;

const tokenEndpoint = 'https://accounts.spotify.com/api/token';

const data = new URLSearchParams();
data.append('grant_type', 'client_credentials');
data.append('client_id', clientId);
data.append('client_secret', clientSecret);

//Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(__dirname));

async function getToken() {
  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data,
    });
    const dataTwo = await response.json();
    const accessToken = dataTwo.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
async function getPlaylistTrackUri(playlistUrl, accessToken) {
  try {
    const playlistId = playlistUrl.match(/playlist\/(\w+)/)[1];
    const limit = 100;
    let offset = 0;
    const allTracks = [];
    console.log(playlistId)
    while (true) {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to retrieve playlist tracks');
      }
      const data = await response.json();

     
      const tracksWithPreviewUrl = data.items.filter((track) => track.track.preview_url !== null);
      allTracks.push(...tracksWithPreviewUrl);

      if (data.next) {
        offset += limit;
      } else {
        break;
      }
    }
    return allTracks;
  } catch (error) {
    console.error('Error:', error);
  }
}

app.get('/api/token', async (req, res) => {
  try {
    const accessToken = await getToken();
    if (accessToken) {
      res.json({ token: accessToken });
    } else {
      res.status(500).json({ error: 'Failed to fetch access token' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the access token' });
  }
});

app.get('/api/playlist-track-uri', async (req, res) => {
  const playlistUrl = req.query.playlistUrl; // Get the playlist URL from the query parameter
  console.log(playlistUrl)
  try {
    const accessToken = await getToken();
    
    const tracks = await getPlaylistTrackUri(playlistUrl, accessToken);
    res.json({ tracks });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the playlist tracks' });
  }
});



//Requests
app.get('/items', (req, res) => {
  res.json(breads);
});
module.exports = (req, res) => {
  res.writeHead(302, { Location: '/items' });
  res.end();
};

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

