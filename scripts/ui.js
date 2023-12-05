"use strict";

function uiLoadArtists(artists) {
	const datalist = document.getElementById("artistsList");
	artists.forEach(element => {
		let option = document.createElement('option');
		option.value = element;
		datalist.appendChild(option);
	});
}

function uiLoadMusics(musics) {
	const datalist = document.getElementById("musicsList");
	musics.forEach(element => {
		let option = document.createElement('option');
		option.value = element;
		datalist.appendChild(option);
	});
}

function uiLoadMusicsOfArtist(artist, db) {
	console.log("I have been called");
	const musics = db.filter((el) => el.artist == artist || artist === "all");
	H1_LIST_OF_MUSICS.innerHTML = `List of music by ${artist}`;

	console.log(musics);
}

function uiListMusics(musics, index, size) {
	MUSICS_LIST_TABLE.innerHTML = "";
	console.log("Ui list");
	console.log(musics);
	for (const music in musics) {
		MUSICS_LIST_TABLE.innerHTML += `
			<td>${musics[music].title}</td>
			<td>${musics[music].artist}</td>
			<td>${musics[music].topGenre}</td>
			<td>${musics[music].year}</td>
		`;
	}
}

// <td>${musics[music].bpm}</td>
// <td>${musics[music].nrgy}</td>
// <td>${musics[music].dnce}</td>
// <td>${musics[music].dB}</td>
// <td>${musics[music].live}</td>
// <td>${musics[music].val}</td>
// <td>${musics[music].dur}</td>
// <td>${musics[music].acous}</td>
// <td>${musics[music].spch}</td>
// <td>${musics[music].pop}</td>

