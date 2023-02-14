import { LinkedInIcon, GithubIcon } from "./Icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center rounded bg-base-300 p-10 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">
            <LinkedInIcon
              className={`fill-current hover:fill-white`}
              onClick={() => window.open("https://github.com/diegogarciacs")}
            ></LinkedInIcon>
          </a>
          <a className="link link-hover">
            <GithubIcon
              className={`fill-current hover:fill-white`}
              onClick={() => window.open("https://github.com/diegogarciacs")}
            ></GithubIcon>
          </a>
        </div>
      </div>
      <div>
        <p>2023 - Hope you enjoyed! :-)</p>
      </div>
      <a
        href="mailto:diegogar577@gmail.com"
        target="_blank"
        className="link-hover hover:text-primary-focus "
      >
        diegogar577@gmail.com
      </a>
      <a href="#navbar" className="link-hover hover:text-primary-focus ">
        Back to top
      </a>
    </footer>
  );
}
