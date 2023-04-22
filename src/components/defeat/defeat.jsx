import React from 'react'
import Link from 'next/link'


function DefeatBanner(props) {
	return (
		<div className="fixed top-0 left-0 w-full">
			<div className="w-full h-screen bg-black flex flex-col justify-center items-center">
				<span className="">Your score is {props.score}</span>
				<Link href={props.retry}>Try again</Link>
			</div>
		</div>
	)
}

export default DefeatBanner
