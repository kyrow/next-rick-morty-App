import React from 'react'
import Image from 'next/image'



export default function CharacterModal({value,modalOff}) {

	const closeModal = () => {
		modalOff()
	}

	return (
		<div className="container flex w-full h-screen absolute items-center justify-center top-0 left-0 z-10" onClick={closeModal}>
			<div className="flex flex-col justify-center items-center bg-red-700 w-auto px-11 blur-none">
				<span className=" text-5xl py-4">{value.name}</span>
				<div>
				<Image src={value.image} key={value.id} alt={value.name} width={400} height={500} />
				<div className="flex flex-col py-4">
				<span>Status: {value.status}</span>
				<span>Gender: {value.gender}</span>
				<span>Origin location: {value.origin.name}</span>
				<span>Current location: {value.location.name}</span>
				<span><a href="value.url">URL: {value.url}</a></span>
				</div> 
				</div>
			</div>			
		</div>
	)
}
