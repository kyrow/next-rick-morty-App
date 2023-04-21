import { API_URL } from "../helpers/url";

export async function findCharacter() {
	const charId = []
	for (let i=0; i < 825 ;i++) {
		charId.push(i)
	}
	const res = await fetch  (`${API_URL}/${charId.join()}`)
	
	return res.json()
	
}