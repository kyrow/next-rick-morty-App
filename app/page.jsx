import CharacterCard from "@/src/components/characterCard/CharacterCard"

export default async function RootPage() {

return (
<>
<div className="container mx-auto py-8">
	<h1 className="text-center text-8xl">The Rick and Morty</h1>
</div>
	<CharacterCard/>
</>
)

	
}