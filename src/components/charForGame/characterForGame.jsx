"use client"

import React, { useState } from 'react'
import Image from 'next/image'

function CharacterForGame(props) {


	const CorrectAlive = () => {
		if (props.status == 'Alive') {
			props.onClicked(true)
		} else (props.onClicked(false))
	}


	const CorrectDead = () => {
		if (props.status == 'Dead') {
			props.onClicked(true)
		} else props.onClicked(false)
	}

	return (
		<div className="w-full flex justify-center items-center ">
			<div className="flex flex-col bg-red-300 px-4 pt-4 w-80" key={props.key}>
				<span className="pb-4 text-2xl w-full">{props.name}</span>
				<Image src={props.image} alt={props.name} width={350} height={250} />
				<div className="flex justify-between py-4">
					<button className="w-20 rounded-full bg-white text-black" onClick={() => CorrectAlive()}>Alive</button>
					<button className="w-20 rounded-full bg-white text-black" onClick={() => CorrectDead()}>Dead</button>
				</div>

			</div>

		</div>
	)
}

export default CharacterForGame
