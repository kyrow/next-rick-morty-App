async function getCharacter(){
	const res = await fetch ('https://rickandmortyapi.com/api/character/2')
	return res.json()
}


export default async function Head({params}) {

const Character = await getCharacter()

	return (
		<>
		<title>{Character.name}</title>
		</>
	)
}