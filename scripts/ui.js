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

function uiSearchArtists(artist, db) {
	const musics = db.filter((el) => el.artist == artist || artist === "all");
	H1_LIST_OF_MUSICS.innerHTML = `List of musics by ${artist}`;
	uiListMusics(musics);
}

function uiSearchMusic(music, db) {
	const musics = db.filter((el) => el.title.includes(music));
	H1_LIST_OF_MUSICS.innerHTML = "List of musics";
	uiListMusics(musics);
}

function uiListMusics(musics) {
	MUSICS_LIST_TABLE.innerHTML = "";
	for (const music in musics) {
		if (music != "columns") {
			const current = musics[music];
			const metrics = [
				{ group: "BPM", value: current.bpm },
				{ group: "Energy", value: current.nrgy },
				{ group: "Dance", value: current.dnce },
				{ group: "Live", value: current.live },
				{ group: "Acoustic", value: current.acous },
				{ group: "Speach", value: current.spch },
				{ group: "Pop", value: current.pop }
			];

			const button = document.createElement("BUTTON");
			button.classList.add("button", "primary");
			button.innerHTML = "Show";
			button.id = "button" + music;
			button.addEventListener("click", function () {
				console.log(`Button ${music} clicked!`);
				showStatForMusic(metrics, current.title);
			});

			const title = document.createElement("td");
			title.innerHTML = current.title;
			const artist = document.createElement("td");
			artist.innerHTML = current.artist;
			const topGenre = document.createElement("td");
			topGenre.innerHTML = current.topGenre;
			const year = document.createElement("td");
			year.innerHTML = current.year;
			const tr = document.createElement("tr");
			tr.append(title, artist, topGenre, year, button);
			MUSICS_LIST_TABLE.appendChild(tr);
		}
	}
}
