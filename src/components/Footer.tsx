import { LinkedInIcon, GithubIcon } from "./Icons";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-center rounded bg-base-300 p-10 text-base-content">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            className="link link-hover"
            href="https://www.linkedin.com/in/diegogarciacs/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              className={`fill-current hover:fill-white`}
            ></LinkedInIcon>
          </a>
          <a
            className="link link-hover "
            href="https://github.com/diegogarciacs"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon
              className={`fill-current hover:fill-white`}
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
        rel="noreferrer"
        className="link-hover hover:text-primary-focus "
      >
        diegogar577@gmail.com
      </a>
      <a href="#home" className="link-hover hover:text-primary-focus ">
        Back to top
      </a>
    </footer>
  );
}
