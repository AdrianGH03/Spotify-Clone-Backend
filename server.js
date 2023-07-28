const express = require('express');
const app = express();

//JSON
const artistRoute = 'https://clone-backend-hazel.vercel.app/Images/artistimages/'
const PlaylistRoute = 'https://clone-backend-hazel.vercel.app/Images/myplaylistimages/'
const spotifyPlaylistRoute =  'https://clone-backend-hazel.vercel.app/Images/spotifyplaylistimages/'
const artistAlbumRoute = 'https://clone-backend-hazel.vercel.app/Images/albumImages/'

const breads = [
  { name: 'KimBops', type: 'spotifyAlbum', date: '2023-07-21', category: 'Playlist', image:`${spotifyPlaylistRoute}kimbops.jpg`, creator: 'Spotify', id: 1},
  
  
  
  { name: 'Purpose (Deluxe)', type: 'artistAlbum', date: '2023-07-09', category: 'Album', creator: 'Justin Bieber', image:`${artistAlbumRoute}purpose.jpg`, id: 505},
  { name: 'J. Cole', type: 'artist', date: '2023-07-06', image:`${artistRoute}jcole.jpg`, category: 'Artist', id: 167},
  { name: 'TrenChill K-R&B', type: 'spotifyAlbum', date: '2023-07-20', category: 'Playlist', image:`${spotifyPlaylistRoute}trenchill.jpg`, creator: 'Spotify', id: 2},
  { name: '2023 Playlist', type: 'userAlbum', date: '2023-07-17', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}Playlistpicture.webp`, id: 3},
  { name: 'Hype Songs', type: 'userAlbum', date: '2023-07-16', category: 'Playlist', creator: 'Spongebob', image:`${PlaylistRoute}house.jpg`, id: 4},
  { name: "Harry's House", type: 'artistAlbum', date: '2023-07-19', category: 'Album', creator: 'Harry Styles', image:`${artistAlbumRoute}harryshouse.jpg`, id: 503},
  { name: 'KR&B', type: 'userAlbum', date: '2023-07-15', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}kr&b.jpg`, id: 5},
  { name: 'Logic', type: 'artist', date: '2023-07-03', image:`${artistRoute}logic.jpg`, category: 'Artist', id: 11},
  { name: 'Proof', type: 'artistAlbum', date: '2023-07-15', category: 'Album', creator: 'BTS', image:`${artistAlbumRoute}proof.jpg`, id: 504},
  { name: 'K-Pop On!', type: 'spotifyAlbum', date: '2023-07-18', category: 'Playlist', image:`${spotifyPlaylistRoute}kpopon.jpg`, creator: 'Spotify', id: 12},
  { name: 'Bad Bunny', type: 'artist', date: '2023-07-08', image:`${artistRoute}badbunny.jpg`, category: 'Artist', id: 156},
  { name: 'Latin Songs', type: 'userAlbum', date: '2023-07-14', category: 'Playlist', creator: 'Leon Noel', image:`${PlaylistRoute}latin.jpg`, id: 13},
  { name: 'Feb 2022 Songs', type: 'userAlbum', date: '2022-02-01', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}rap1.jpg`, id: 14},
  { name: 'BOYNEXTDOOR', type: 'artist', date: '2023-07-07', image:`${artistRoute}boynextdoor.jpg`, category: 'Artist', id: 176},
  { name: 'Pop/Rap', type: 'userAlbum', date: '2023-07-12', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}rap2.jpg`, id: 144},
  { name: 'MICO', type: 'artist', date: '2023-07-05', image:`${artistRoute}mico.jpg`, category: 'Artist', id: 111},
  { name: 'FACE', type: 'artistAlbum', date: '2023-07-20', category: 'Album', creator: 'Jimin', image:`${artistAlbumRoute}faceoff.jpg`, id: 500},
  { name: "NewJeans 2nd EP 'Get Up'", type: 'artistAlbum', date: '2023-07-21', category: 'Album', creator: 'NewJeans', image:`${artistAlbumRoute}getup.jpg`, id: 501},
  { name: 'Morning Classical', type: 'spotifyAlbum', date: '2023-07-19', category: 'Playlist', image:`${spotifyPlaylistRoute}morning.jpg`, creator: 'Spotify', id: 112},
  { name: 'Liked Songs', type: 'userAlbum', date: '2023-07-11', category: 'Playlist', likedAmount: 33, image:`${PlaylistRoute}like.png`, id: 113},
  { name: 'J-Rock', type: 'userAlbum', date: '2023-07-10', category: 'Playlist', creator: 'Adriancito', image:`${PlaylistRoute}rock.jpg`, id: 114},
  { name: 'Roddy Rich', type: 'artist', date: '2023-07-04', image:`${artistRoute}roddyrich.jpg`, category: 'Artist', id: 1675},
  { name: 'KimBops', type: 'spotifyAlbum', date: '2023-07-21', category: 'Playlist', image:`${spotifyPlaylistRoute}kimbops.jpg`, creator: 'Spotify', id: 121},
  { name: 'B.I.', type: 'artist', date: '2023-07-09', image:`${artistRoute}b.i.jpg`, category: 'Artist', id: 123},
  { name: 'Game Music', type: 'userAlbum', date: '2023-07-10', category: 'Playlist', creator: 'Raphael Crabbe', image:`${PlaylistRoute}wow.jpg`, id: 122},
  


  
];


//Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static(__dirname));


//Requests
app.get('/items', (req, res) => {
  res.json(breads);
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

