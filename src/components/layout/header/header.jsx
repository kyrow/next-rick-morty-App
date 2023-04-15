import { Logo } from "../../icons/logo"
import '../../../../styles/globals.css'
import Link from 'next/link';
import { ROUTES } from "../../../utils/constants/routes";


export const Header = () => {
	return (
		<header className="bg-white w-full">
			
			<div className="container flex justify-between py-4 px-3 items-center text-black mx-auto font-semibold">
				<Logo/>
				<nav>
					<ul>
						<li>  
							<div class="">
								<div class="inline-flex flex-col justify-center relative text-gray-500">
									<div class="relative">
										<input type="text" class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" placeholder="search a character"/>
										<svg class="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
										</svg>
									</div>
								</div>
							</div>	
						</li>
						<li> <Link href={ROUTES.CHARACTERS}>Characters</Link> </li>
					</ul>
				</nav>
			</div>
		
		</header>
	)
}