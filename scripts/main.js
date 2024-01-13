"use strict";

const INPUT_ARTIST = document.getElementById("inputArtist");
const H1_LIST_OF_MUSICS = document.getElementById("titleListOfMusics");
const MUSICS_LIST_TABLE = document.getElementById("musicsListTable");

// Load CSV
async function readCsv() {
	const csv = await d3.dsv("|", "data/spotify.csv");
	return csv;
}

function prepareUi(csv) {
	const artists = [...new Set(csv.map(el => {
		return el.artist;
	}))];

	const musics = [...new Set(csv.map(el => {
		return el.title;
	}))];

	uiLoadArtists(artists);
	uiLoadMusics(musics);

	uiListMusics(csv);


	INPUT_ARTIST.addEventListener("input", (event) => {
		uiLoadMusicsOfArtist(INPUT_ARTIST.value, csv);
		console.log("Hey");
	});
}

async function main() {
	const csv = await readCsv();

	prepareUi(csv);
}

main();
