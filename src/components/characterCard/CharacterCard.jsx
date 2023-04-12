import React from 'react'
import Image from 'next/image'
import { getRandomCharactersPage } from "@/src/utils/helpers/getRandomCharacterPage"

async function getCharacters(){
	const res = await fetch ('https://rickandmortyapi.com/api/character')
	return res.json()
}

async function getRandomChar() {
	const randomId = []
	for (let i=0; i < 7 ;i++) {
		randomId.push(Math.floor(Math.random()*100))
	}
	const res = await fetch  (`https://rickandmortyapi.com/api/character/${randomId.join()}`)
	
	return res.json()
	
}



export default async function RootPage() {

	// const charactersResponse = await getRandomChar()
	// console.log(charactersResponse)
	// const characters = charactersResponse.results?.slice(0,6)
	const characters = await  getRandomChar()

	return (
		<div className="container ">
			<div>
			{characters.map((character)=> (
				<>
				<div className="container sm mx-auto my-2 py-4 flex  bg-slate-600">
			 	 <Image src={character.image} key={character.id} alt={character.name} width={250} height={150}/> 
					<div className="container flex flex-col justify-between px-4  ">
						<span className=""  key={character.id}>Name: {character.name}</span>
						<span>Gender: {character.gender}</span>
					</div>
				</div>
				</>
			))}
			</div>

		</div>
	)
}
 