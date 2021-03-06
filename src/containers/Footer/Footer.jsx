import React from 'react';
import './Footer.scss';
import Social from "../../components/Social/Social";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/constants";
const Footer = () => {
  return (<footer id='footer' className="footer">
    <div className="container">
      <div className="footer__top">
        <a className='footer__logotype' href='/#hero'>
          <img src="/media/images/svg/logotype-light.svg" alt=''/>
        </a>

        <nav className="footer__nav">
          <a href={ROUTES.main} >
            Головна
          </a>

          <a href={`${ROUTES.pawnshop}`} >
            Автоломбард
          </a>

          <a href={ROUTES.trading} >
            Купiвля/продаж авто
          </a>

          <a href={ROUTES.usa} >
            Пригон авто iз США
          </a>

          <a href={ROUTES.contacts} >
            Контакти
          </a>
        </nav>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">Copyright © {new Date().getFullYear()}, PR CREDIT</p>

        <div className="footer__social">
          <p>Зв'яжіться з нами:</p>

          <Social />
        </div>
      </div>
    </div>
  </footer>);
};
export default Footer;
