async function getCharacter(){
	const res = await fetch ('https://rickandmortyapi.com/api/character/2')
	return res.json()
}

export const RootPage =  async () => {

	const characters = await getCharacters(page)

	cons

return (
<section>
	<h1>The Rick and Morty</h1>
</section>
)

	
}