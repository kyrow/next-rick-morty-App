import { API_URL } from "../helpers/url";

export async function findCharacter() {
	const randomId = []
	for (let i=0; i < 10 ;i++) {
		randomId.push(Math.floor(Math.random()*100))
	}
	const res = await fetch  (`${API_URL}/${randomId.join()}`)
	
	return res.json()
	
}