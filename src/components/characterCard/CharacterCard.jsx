import React from 'react'
import Image from 'next/image'
import { getRandomCharactersPage } from "@/src/utils/helpers/getRandomCharacterPage"
import "./characterCard.css"


async function getCharacters(){
	const res = await fetch ('https://rickandmortyapi.com/api/character')
	return res.json()
}

async function getRandomChar() {
	const randomId = []
	for (let i=0; i < 6 ;i++) {
		randomId.push(Math.floor(Math.random()*100))
	}
	const res = await fetch  (`https://rickandmortyapi.com/api/character/${randomId.join()}`)
	
	return res.json()
	
}


export default async function RootPage() {

	const characters = await  getRandomChar()

	return (
		<div className="container w-full mx-auto my-5">
			<div className="container flex w-full flex-wrap justify-between  mx-auto">
			{characters.map((character)=> (
				<>
	
				<div className="w-5/12 my-5 px-2 py-2 flex rounded-lg  bg-slate-600">
			 	 <Image src={character.image} key={character.id} alt={character.name} width={250} height={150}/> 
					<div className=" flex flex-col justify-between px-4  ">
						<span className="text-lg font-semibold"  key={character.id}>Name: {character.name}</span>
						<div>
							<span className="text-lg font-semibold">Status: </span>					
							<span>{character.status}</span>
							<span className={character.status  == 'Alive' ? 'alive' : null}></span>
							<span className={character.status  == 'Dead' ? 'dead' : null}></span>
						</div>
						<div >
							<span className="text-lg font-semibold">Gender: </span>
							<span className="">{character.gender}</span>
						</div>
						<div>
							<span className="text-lg font-semibold">Species: </span>
							<span> {character.species}</span>
						</div>
						<div>
							<span className="text-lg font-semibold">Location: </span>
							<span> {character.location.name}</span>
						</div>
					</div>
				</div>
				
				</>
			))}
			</div>

		</div>
	)
}
 