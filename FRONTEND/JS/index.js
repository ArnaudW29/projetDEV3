/*
DAXHELET Nicolas
23/3/21
*/
//Déclaration des variables
let game_1_description = "<p class='horizontal_center'>ceci est la description du premier jeu</p>"
let game_2_description = "<p class='horizontal_center'>ceci est la description du deuxieme jeu</p>"
let game_3_description = "<p class='horizontal_center'>ceci est la description du troisieme jeu</p>"
let game_4_description = "<p class='horizontal_center'>ceci est la description du quatrieme jeu</p>"

let game_1_leaderboard = {"pseudo1": "XXXX", "pseudo2": "XXXY", "pseudo3": "XYXY", "pseudo4": "YYYX", "pseudo5": "YYYY"}
let game_2_leaderboard = {"pseudo4": "XYYX", "pseudo3": "XXY", "pseudo1": "XYXY"}
let game_3_leaderboard = {"pseudo2": "X"}
let game_4_leaderboard = {"pseudo6": "XXXX", "pseudo7": "XXXY", "pseudo10": "YYYY"}

//Déclaration des fonctions
function initialiserPage() {

}

function get_description(game_number) {
	let description = document.getElementById("active_game_description")
	let image_1 = document.getElementById("game_1_image")
	let image_2 = document.getElementById("game_2_image")
	let image_3 = document.getElementById("game_3_image")
	let image_4 = document.getElementById("game_4_image")
	switch(game_number) {
		case "game_1":
			description.innerHTML = game_1_description
			image_1.style.border = "1px solid #77216f"
			image_1.style.borderRadius = "10px"
			image_2.style.border = "none"
			image_3.style.border = "none"
			image_4.style.border = "none"
			break
		case "game_2":
			description.innerHTML = game_2_description
			image_2.style.border = "1px solid #77216f"
			image_2.style.borderRadius = "10px"
			image_1.style.border = "none"
			image_3.style.border = "none"
			image_4.style.border = "none"
			break
		case "game_3":
			description.innerHTML = game_3_description
			image_3.style.border = "1px solid #77216f"
			image_3.style.borderRadius = "10px"
			image_1.style.border = "none"
			image_2.style.border = "none"
			image_4.style.border = "none"
			break
		case "game_4":
			description.innerHTML = game_4_description
			image_4.style.border = "1px solid #77216f"
			image_4.style.borderRadius = "10px"
			image_1.style.border = "none"
			image_2.style.border = "none"
			image_3.style.border = "none"
			break	
	}
}

function get_leaderboard(game_number) {
	let table = document.getElementById("scores")
	let image_1 = document.getElementById("game_logo_1")
	let image_2 = document.getElementById("game_logo_2")
	let image_3 = document.getElementById("game_logo_3")
	let image_4 = document.getElementById("game_logo_4")
	switch(game_number) {
		case "game_1":
			image_1.style.border = "1px solid #e95420"
			image_1.style.borderRadius = "10px"
			image_2.style.border = "none"
			image_3.style.border = "none"
			image_4.style.border = "none"
			break
		case "game_2":
			image_2.style.border = "1px solid #e95420"
			image_2.style.borderRadius = "10px"
			image_1.style.border = "none"
			image_3.style.border = "none"
			image_4.style.border = "none"
			break
		case "game_3":
			image_3.style.border = "1px solid #e95420"
			image_3.style.borderRadius = "10px"
			image_1.style.border = "none"
			image_2.style.border = "none"
			image_4.style.border = "none"
			break
		case "game_4":
			image_4.style.border = "1px solid #e95420"
			image_4.style.borderRadius = "10px"
			image_1.style.border = "none"
			image_2.style.border = "none"
			image_3.style.border = "none"
			break
	}
	str = make_leaderboard(game_number)
	table.innerHTML = str
}

function make_leaderboard(game_number) {
	let str = '<tr><th colspan="2">pseudo</th><th colspan="2">nb points</th></tr>'
	switch(game_number) {
		case "game_1":
			leaderboard = {...game_1_leaderboard}
			break
		case "game_2":
			leaderboard = {...game_2_leaderboard}
			break
		case "game_3":
			leaderboard = {...game_3_leaderboard}
			break
		case "game_4":
			leaderboard = {...game_4_leaderboard}
			break
	}
	pseudos = Object.keys(leaderboard)
	scores = Object.values(leaderboard)
	for(let i = 0; i < pseudos.length; i++) {
		str += '<tr><td colspan="2">' + pseudos[i] + '</td><td colspan="2">' + scores[i] + '</td></tr>'
	}
	return str
}