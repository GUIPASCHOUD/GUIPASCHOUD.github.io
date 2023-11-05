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
	console.log(musics);
	musics.forEach(element => {
		let option = document.createElement('option');
		option.value = element;
		datalist.appendChild(option);
	});
}