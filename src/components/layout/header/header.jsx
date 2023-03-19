import { Logo } from "../../icons/logo"
import '../../../../styles/globals.css'

export const Header = () => {
	return (
		<header className="bg-slate-200">
			
			<Logo/>
		
			<nav>
				<ul>
					<li>Characters</li>
				</ul>
			</nav>
		</header>
	)
}