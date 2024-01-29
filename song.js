class Song {
    constructor(id,name, artist) {
        this.id = id;
        this.name = name;
        this.artist = artist;
    }
    toString() 
{
    return ` ${this.name} của ca sĩ ${this.artist}`;
};
}

module.exports = {
    Song,
};