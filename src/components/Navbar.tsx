import { GithubIcon } from "./Icons";

export default function Navbar() {
  return (
    <div className="navbar rounded-box bg-base-300 pb-4 text-neutral-content shadow-lg">
      <div className="mx-2 flex-none px-2">
        <span className="font-bold text-lg">Diego O. Garcia</span>
      </div>
      <div className="mx-2 flex-1 px-2">
        <div className="hidden items-stretch lg:flex">
          <a href="#home" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </a>
          <a href="#portfolio" className="btn btn-ghost btn-sm rounded-btn">
            Portfolio
          </a>
          <a href="#about-me" className="btn btn-ghost btn-sm rounded-btn">
            About
          </a>
          <a href="/" className="btn btn-ghost btn-sm rounded-btn">
            Contact
          </a>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-square">
          <GithubIcon
            className={`fill-gray-300 hover:fill-white`}
            onClick={() => window.open("https://github.com/diegogarciacs")}
          />
        </button>
      </div>
    </div>
  );
}
