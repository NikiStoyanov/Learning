function songs(input) {
    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    input.shift();

    let songs = [];

    let type = input.pop();

    for (const currentSong of input) {
        let songInfo = currentSong.split('_');

        let song = new Song(songInfo[0], songInfo[1], songInfo[2]);

        if(song.typeList === type || type === 'all') {
            songs.push(song);
        }
    }

    for (const song of songs) {
        console.log(song.name);
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );