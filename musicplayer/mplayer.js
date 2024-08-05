"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var audio_1 = require("./audio");
var playlist_1 = require("./playlist");
var MusicPlayer = /** @class */ (function () {
    function MusicPlayer() {
        this.playlists = [];
    }
    MusicPlayer.prototype.createPlaylist = function (name, genre) {
        var playlist = new playlist_1.Playlist(name, genre);
        this.playlists.push(playlist);
        return playlist;
    };
    MusicPlayer.prototype.addAudioToPlaylist = function (playlistName, audio) {
        var playlist = this.playlists.find(function (p) { return p.name === playlistName; });
        if (playlist) {
            playlist.addAudio(audio);
        }
    };
    MusicPlayer.prototype.searchAudio = function (name) {
        return this.playlists.flatMap(function (p) { return p.audios.filter(function (a) { return a.name.includes(name); }); });
    };
    MusicPlayer.prototype.searchPlaylists = function (name) {
        return this.playlists.filter(function (p) { return p.name.includes(name); });
    };
    MusicPlayer.prototype.getPlaylistAverageRating = function (playlistName) {
        var playlist = this.playlists.find(function (p) { return p.name === playlistName; });
        return playlist ? playlist.getAverageRating() : 0;
    };
    MusicPlayer.prototype.displayPlaylists = function () {
        var container = document.getElementById('app');
        if (container) {
            container.innerHTML = '';
            this.playlists.forEach(function (playlist) {
                var playlistElement = document.createElement('div');
                playlistElement.className = 'mb-3';
                playlistElement.innerHTML = "\n                    <h3>".concat(playlist.name, "</h3>\n                    <p>Genre: ").concat(playlist.genre, "</p>\n                    <p>Average Rating: ").concat(playlist.getAverageRating().toFixed(2), "</p>\n                ");
                container.appendChild(playlistElement);
            });
        }
    };
    return MusicPlayer;
}());
// Initialize and use the MusicPlayer class
var player = new MusicPlayer();
// Example usage
var rockPlaylist = player.createPlaylist('Rock Classics', 'Rock');
player.addAudioToPlaylist('Rock Classics', new audio_1.Audio('Bohemian Rhapsody', 'https://example.com/bohemian.mp3'));
player.addAudioToPlaylist('Rock Classics', new audio_1.Audio('Stairway to Heaven', 'https://example.com/stairway.mp3'));
// Display the playlists
player.displayPlaylists();
