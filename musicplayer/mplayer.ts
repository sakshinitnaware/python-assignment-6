import { Audio } from './audio';
import { Playlist } from './playlist';

class MusicPlayer {
    private playlists: Playlist[] = [];

    createPlaylist(name: string, genre: string): Playlist {
        const playlist = new Playlist(name, genre);
        this.playlists.push(playlist);
        return playlist;
    }

    addAudioToPlaylist(playlistName: string, audio: Audio): void {
        const playlist = this.playlists.find(p => p.name === playlistName);
        if (playlist) {
            playlist.addAudio(audio);
        }
    }

    searchAudio(name: string): Audio[] {
        return this.playlists.flatMap(p => p.audios.filter(a => a.name.includes(name)));
    }

    searchPlaylists(name: string): Playlist[] {
        return this.playlists.filter(p => p.name.includes(name));
    }

    getPlaylistAverageRating(playlistName: string): number {
        const playlist = this.playlists.find(p => p.name === playlistName);
        return playlist ? playlist.getAverageRating() : 0;
    }

    displayPlaylists(): void {
        const container = document.getElementById('app');
        if (container) {
            container.innerHTML = '';
            this.playlists.forEach(playlist => {
                const playlistElement = document.createElement('div');
                playlistElement.className = 'mb-3';
                playlistElement.innerHTML = `
                    <h3>${playlist.name}</h3>
                    <p>Genre: ${playlist.genre}</p>
                    <p>Average Rating: ${playlist.getAverageRating().toFixed(2)}</p>
                `;
                container.appendChild(playlistElement);
            });
        }
    }
}

// Initialize and use the MusicPlayer class
const player = new MusicPlayer();

// Example usage
const rockPlaylist = player.createPlaylist('Rock Classics', 'Rock');
player.addAudioToPlaylist('Rock Classics', new Audio('Bohemian Rhapsody', 'https://example.com/bohemian.mp3'));
player.addAudioToPlaylist('Rock Classics', new Audio('Stairway to Heaven', 'https://example.com/stairway.mp3'));

// Display the playlists
player.displayPlaylists();
