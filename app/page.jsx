import { getRandomCharactersPage } from "@/src/utils/helpers/getRandomCharacterPage"

async function getCharacters(){
	const res = await fetch ('https://rickandmortyapi.com/api/character')
	return res.json()
}

export default async function RootPage() {

	const characters = await getCharacters(getRandomCharactersPage().toString())

return (
<>
	<h1>The Rick and Morty</h1>
	{characters.results.map((character)=> (
		<div>{character.name}</div>
	))}
</>
)

	
}