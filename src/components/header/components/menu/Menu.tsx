import React from "react";
import IconMenu from "../../../../assets/icon-hamburger.svg";

const Menu = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const CLASS_PAGES =
		"cursor-pointer hover:text-[var(--primary-color-yellow-500)]";
	return (
		<div>
			<img
				onClick={() => setIsOpen(!isOpen)}
				className="w-6 h-6 cursor-pointer md:hidden"
				src={IconMenu.src}
				alt="icon menu"
			/>
			<div
				className={`${
					isOpen ? "block" : "hidden"
				} fixed w-full right-0 left-0 pt-5 md:text-white md:p-0 md:max-w-fit md:block md:relative `}
			>
				<ul className="flex flex-col gap-2 items-center p-6 bg-[var(--neutral-color-white)] md:flex-row md:justify-end md:p-0 md:pr-8 md:gap-8 md:text-lg md:bg-transparent">
					<li className={CLASS_PAGES}>About</li>
					<li className={CLASS_PAGES}>Service</li>
					<li className={CLASS_PAGES}>Projects</li>
					<a
						href=""
						className="bg-[var(--primary-color-yellow-500)] py-2 px-4 rounded-full font-bold md:bg-white md:text-black"
					>
						CONTACT
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
