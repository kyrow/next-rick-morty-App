"use client"

import CharacterForGame from '@/src/components/charForGame/characterForGame'
import DefeatBanner from '@/src/components/defeat/defeat'
import { getRandomCharForGame } from '@/src/utils/server/getCharforGame'
import React, { useState, useEffect } from 'react'

function Game() {

	const [char, setChar] = useState([])
	const [counter, setCounter] = useState(0)
	const [defeat, setDefeat] = useState(false)


	useEffect(() => {
		getRandomCharForGame()
			.then((data) => setChar(data))
	}, [])

	const onClicked = (bool = false) => {
		getRandomCharForGame()
			.then((data) => setChar(data))
		if (bool) { setCounter(counter + 1) } else { setDefeat(true) }
	}

	const retry = '/'



	console.log(defeat)

	return (
		<div>

			<h2 className="text-center py-5 text-7xl">IS HE ALIVE ?</h2>
			{/* {char.gender == 'male' ? <h2 className="text-center py-5 text-7xl">IS HE ALIVE ?</h2> : <h2 className="text-center py-5 text-7xl">IS SHE ALIVE ?</h2>} */}

			<p className="text-center py-5 text-4xl">Counter: {counter}</p>
			<div>
				<CharacterForGame name={char.name} status={char.status} image={char.image} key={char.id} onClicked={onClicked} />
			</div>
			{defeat && <DefeatBanner retry={retry} score={counter} />}
		</div>
	)
}

export default Game
