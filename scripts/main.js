"use strict";

let CSV = [];

// Load CSV
async function readCsv() {
	const csv = await d3.csv("data/spotify.csv");
	return csv;
}

function prepareUi(csv) {
	console.log(csv);
	const artists = [ ...new Set(csv.map( el => {
		return el.artist;
	}))];
	
	const musics = [ ...new Set(csv.map( el => {
		return el.title;
	}))];

	uiLoadArtists(artists);
	uiLoadMusics(musics);
}

async function main() {
	const csv = await readCsv();
	prepareUi(csv);
}

main();
