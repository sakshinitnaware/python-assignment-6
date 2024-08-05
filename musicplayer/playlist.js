"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playlist = void 0;
var Playlist = /** @class */ (function () {
    function Playlist(name, genre, audios) {
        if (audios === void 0) { audios = []; }
        this.name = name;
        this.genre = genre;
        this.audios = audios;
        this.ratings = [];
    }
    Playlist.prototype.addAudio = function (audio) {
        this.audios.push(audio);
    };
    Playlist.prototype.addRating = function (rating) {
        this.ratings.push(rating);
    };
    Playlist.prototype.getAverageRating = function () {
        var total = this.ratings.reduce(function (sum, rating) { return sum + rating; }, 0);
        return this.ratings.length ? total / this.ratings.length : 0;
    };
    return Playlist;
}());
exports.Playlist = Playlist;
