import { NavLink } from "react-router";

export default function Nav() {
  return (
    <>
      <header className="flex justify-between w-[100%] px-50 mt-5">
        <div>
          <NavLink to="/">
            <img src="public/img/icons/bh-media-logo.svg" alt="" />
          </NavLink>
        </div>

        <nav className="flex justify-center gap-4">
          <NavLink to="/">Prices</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/recommendations">recommendations</NavLink>
        </nav>

        <div className="flex gap-3">
          <a
            className="transition-transform duration-200 hover:scale-125"
            href="https://www.instagram.com/bjarkeholm.media/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 "
              src="/img/icons/IG-icon.svg"
              alt="Instagram"
            />
          </a>

          <a
            className="transition-transform duration-200 hover:scale-125"
            href="https://www.linkedin.com/in/bjarke-holm-7409051a2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8"
              src="/img/icons/LinkedIn-icon.svg"
              alt="LinkedIn"
            />
          </a>
        </div>
      </header>
    </>
  );
}
