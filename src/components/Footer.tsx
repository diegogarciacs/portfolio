import { LinkedInIcon, GithubIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer footer-center rounded bg-base-300/25 p-10 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">
            <LinkedInIcon
              className={`fill-gray-300 hover:fill-white`}
              onClick={() => window.open("https://github.com/diegogarciacs")}
            ></LinkedInIcon>
          </a>
          <a className="link link-hover">
            <GithubIcon
              className={`fill-gray-300 hover:fill-white`}
              onClick={() => window.open("https://github.com/diegogarciacs")}
            ></GithubIcon>
          </a>
        </div>
      </div>
      <div>
        <p>2023 - Hope you enjoyed! :-)</p>
      </div>
    </footer>
  );
}
