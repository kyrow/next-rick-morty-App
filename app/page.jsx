import CharacterCard from "@/src/components/characterCard/CharacterCard"

export default async function RootPage() {

return (
<>
<div className=" mx-auto py-8 w-full bg-white ">
	<h1 className="text-center text-8xl text-black">The Rick and Morty</h1>
</div>
	<CharacterCard/>
</>
)

	
}