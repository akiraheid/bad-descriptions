let movies = []

function getMovies() {
	console.log("Retrieving movies")
	$.getJSON("/movies.json", function(json) {
		console.log(`Got data. Schema version {json.apiVersion}`)
		movies = json.items
		random(movies)
	})
}

function random(list) {
	if(!list) { list = movies }
	// TODO Make sure it doesn't pick the current one
	const item = list[Math.floor(Math.random() * list.length)]
	$("#description").text(item.description)
	$("#title").text(item.title)
	$("#title").addClass("d-none")
	console.log(item)
}

function show() {
	$("#title").removeClass("d-none")
}

$(document).ready(function() {
	getMovies()
})
