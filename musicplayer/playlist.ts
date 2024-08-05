import { Audio } from './audio';

export class Playlist {
    private ratings: number[] = [];

    constructor(public name: string, public genre: string, public audios: Audio[] = []) {}

    addAudio(audio: Audio) {
        this.audios.push(audio);
    }

    addRating(rating: number) {
        this.ratings.push(rating);
    }

    getAverageRating(): number {
        const total = this.ratings.reduce((sum, rating) => sum + rating, 0);
        return this.ratings.length ? total / this.ratings.length : 0;
    }
}