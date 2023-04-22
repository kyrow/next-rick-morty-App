import { API_URL } from "../helpers/url";

export async function getRandomCharForGame() {


const randomId = []
	for (let i=0; i < 125 ;i++) {
		randomId.push(Math.floor(Math.random()*100))
	}

	const res = await fetch  (`${API_URL}/${randomId.join()}`)
	const characters = await res.json()
	const filteredCharacters = characters.filter(char => char.status != 'unknown')
	const randomCharacter = filteredCharacters[Math.floor(Math.random()*filteredCharacters.length)]

	return randomCharacter
	
}
