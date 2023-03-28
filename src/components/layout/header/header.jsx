import { Logo } from "../../icons/logo"
import '../../../../styles/globals.css'
import Link from 'next/link';
import { ROUTES } from "../../../utils/constants/routes";


export const Header = () => {
	return (
		<header className="bg-slate-200 w-full">
			
			<div className="container flex justify-between py-4 px-3 items-center text-green-400 mx-auto">
				<Logo/>
				<nav>
					<ul>
						<li> <Link href={ROUTES.CHARACTERS}>Characters</Link> </li>
					</ul>
				</nav>
			</div>
		
		</header>
	)
}