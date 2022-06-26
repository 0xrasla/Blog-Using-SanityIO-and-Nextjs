import React from "react";
import Link from "next/link";
import Image from "next/image";

const NaveBar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const links = ["Home", "Blog", "Latest"];

  return (
    <header className="w-full relative uppercase  p-2 border">
      <nav className="flex justify-between w-10/12 m-auto">
        <input
          type="text"
          className="rounded-full appearance-none font-body py-1 px-3 max-w-md leading-tight border-gray-400 border-2 shadow focus:outline-none focus:shadow-md"
          placeholder="Search ?"
        />
        <span className="text-black-500 self-start font-sans text-lg">
          Rasso Blog
        </span>
        <span className="links"></span>
        <span
          className={"border-gray-400 hover:cursor-pointer"}
          onClick={() => setShowMenu(!showMenu)}
        >
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAOElEQVRIie3TsQkAMAwDwSf7b+XBnCqQ1hC7yR+oFioEkhoEkM2JU7YGBt1yuE+/807SM95JUskGsVVPTkFzAfwAAAAASUVORK5CYII="
            alt="Hamburger"
            width={"20px"}
            height={"20px"}
          ></Image>
        </span>
      </nav>
    </header>
  );
};

export default NaveBar;
