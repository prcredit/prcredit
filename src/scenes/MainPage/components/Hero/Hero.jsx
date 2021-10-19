import React from "react";
import { LINK_ROUTES } from "../../../../config/constants";
import './Hero.scss';
const Hero = () => {
    return (<section className="hero" id='hero'>
      <div className="container">
        <div className="hero__container">
          <h1 className="title hero__title">
            Автоломбард <span> PR CREDIT</span> у Києві
          </h1>

          <h3 className="hero__subtitle hidden">
          </h3>

          <a href={`tel:${LINK_ROUTES.contacts.number}`} className="link-btn link-btn--dark" rel="noopener noreferrer">
            <span>
              Зателефонувати
            </span>

            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M15.5646 11.7424L13.3317 9.50954C12.5343 8.71209 11.1786 9.0311 10.8596 10.0678C10.6204 10.7855 9.82296 11.1842 9.10526 11.0247C7.51037 10.626 5.35726 8.5526 4.95854 6.87797C4.71931 6.16024 5.19778 5.36279 5.91548 5.12359C6.95216 4.80461 7.27113 3.44895 6.47369 2.65151L4.24084 0.418659C3.60288 -0.139553 2.64595 -0.139553 2.08774 0.418659L0.572591 1.93381C-0.942555 3.5287 0.73208 7.75516 4.48007 11.5032C8.22807 15.2511 12.4545 17.0056 14.0494 15.4106L15.5646 13.8955C16.1228 13.2575 16.1228 12.3006 15.5646 11.7424Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </a>

        </div>

      </div>

      <a className="hero__scroll" href='#calculator'/>

    </section>);
};
export default Hero;
