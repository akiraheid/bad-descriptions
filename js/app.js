let movies = []
let seenQueue = []
let MAX_SEEN = 50

function getMovies() {
	console.log("Retrieving movies")
	$.getJSON("/movies.json", function(json) {
		console.log(`Got data. Schema version ${json.apiVersion}`)
		movies = json.items
		if(movies.length < MAX_SEEN) {
			MAX_SEEN = movies.length - 1
		}
		random(movies)
	})
}

function random(list=movies) {
	let item = list[Math.floor(Math.random() * list.length)]
	while(seenQueue.some(e => e.title === item.title)) {
		item = list[Math.floor(Math.random() * list.length)]
	}

	seenQueue.push(item)
	if(seenQueue.length >= MAX_SEEN) {
		seenQueue.shift()
	}

	$("#description").text(item.description)
	$("#title").text(item.title)
	$("#title").addClass("d-none")
}

function show() {
	$("#title").removeClass("d-none")
}

$(document).ready(function() {
	getMovies()
})
