import React from 'react'

export default function CharacterModal(props) {
 
	// const [char,setChar] = useState([])


	return (
		<div className="container absolute w-full h-screen top-0 left-0 bg-red-700">
			<div className=" ">
				{props.name}
			</div>			
		</div>
	)
}
