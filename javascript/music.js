const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const titleElement = document.getElementById("title");
const artistElement = document.getElementById("artist");

const songs = [
    {
        title: "Rocket Man",
        artist: "Elton John",
        file: "1.mp3"
    },
    {
        title: "Gimme Gimme!",
        artist: "ABBA",
        file: "2.mp3"
    },
    // Add more songs as needed
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    titleElement.textContent = song.title;
    artistElement.textContent = song.artist;
    audio.src = song.file;
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
}

function nextTrack() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    if (!audio.paused) {
        audio.play();
    }
}

function prevTrack() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    if (!audio.paused) {
        audio.play();
    }
}

audio.addEventListener("ended", nextTrack);

loadSong(currentSongIndex);
