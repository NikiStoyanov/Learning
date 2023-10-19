function gramophone(band, album, song) {
    let bandName = band;
    let albumName = album;
    let songName = song;

    let duration = (albumName.length * bandName.length) * songName.length / 2;

    let rotations = duration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}

gramophone('The beatles', 'Ne znam', 'Pak ne znam');