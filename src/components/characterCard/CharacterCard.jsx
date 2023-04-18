"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import "./characterCard.css"
import { getRandomChar } from '@/src/utils/server/getChar'
import CharacterModal from '../layout/charModal/characterModal'

export default  function RootPage() {

	const [char,setChar] = useState([])
	const [isOpen,setOpen] = useState(false)
	const [activeChar,setActiveChar] = useState({})

	useEffect(()=>{  
	getRandomChar()
	.then((data)=>setChar(data))
	},[])

	const openModal =  (character)=> {
		setActiveChar(character)
		setOpen(true)
		console.log(activeChar)
	}

	return (

		
		<div className="container w-full mx-auto my-5 relative">

{isOpen && <CharacterModal value={activeChar}/>}


			<div className="container flex w-full flex-wrap justify-between  mx-auto">
	
	
			{char.map((character)=> (
				<>

				<div className="w-5/12 my-5 px-2 py-2 flex rounded-lg  bg-slate-600 cursor-pointer"  
				key={character.id} 
				onClick={(event)=>openModal(character,event)}>
		
			 	 <Image src={character.image} key={character.id} alt={character.name} width={250} height={150} /> 
					<div className=" flex flex-col justify-between px-4  ">
					 <span className="text-lg font-semibold "  key={character.id } > 
						Name: {character.name}
						</span>
						<div>
							<span className="text-lg font-semibold">Status: </span>					
							<span key={character.id}>{character.status}</span>
							<span className={character.status  == 'Alive' ? 'alive' : null}></span>
							<span className={character.status  == 'Dead' ? 'dead' : null}></span>
						</div>
						<div >
							<span className="text-lg font-semibold">Gender: </span>
							<span className="" key={character.id}> {character.gender}</span>
						</div>
						<div>
							<span className="text-lg font-semibold">Species: </span>
							<span key={character.id}> {character.species}</span>
						</div>
						<div>
							<span className="text-lg font-semibold">Location: </span>
							<span key={character.id}> {character.location.name}</span>
						</div>
					</div>
	
				</div>
				
				</>
				
			))}


			</div>
		
		</div>
	)
}
 