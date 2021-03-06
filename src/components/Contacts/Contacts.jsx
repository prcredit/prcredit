import React from "react";
import { LINK_ROUTES } from "../../config/constants";
import Social from "../Social/Social";
import { Map, Marker } from "pigeon-maps";
import './Contacts.scss';
const Contacts = () => {
    return (<section id="contacts" className="section contacts">
      <div className="container">
        <h2 className="title contacts__title">
          Контакти
        </h2>

        <div className="contacts__items">
          <div className="contacts-map">
            <Map defaultCenter={[50.45174310076538, 30.489071100578194]} defaultZoom={9.5}>
              <Marker width={50} anchor={[50.45174310076538, 30.489071100578194]}/>
            </Map>
          </div>

          <div className="contacts-info">
            <p className="contacts-info__text">
              <span>Назва:</span> PR CREDIT
            </p>

            <p className="contacts-info__text">
              <span>Адреса:</span> м. Київ, вул. Дмитрівська, 35А
            </p>

            <p className="contacts-info__text">
              <span>Посилання на Google Maps: </span>
              <a href='https://goo.gl/maps/Nuey8igtthmoizJt5' target='_blank' rel="noopener noreferrer"> https://goo.gl/maps/Nuey8igtthmoizJt5</a>
            </p>

            <p className="contacts-info__text">
              <span>Робочі години:</span> 10:00 - 20:00 кожного дня
            </p>

            <p className="contacts-info__text">
              <span>Телефон для вирішення усіх питань: </span>

              <a href={`tel:${LINK_ROUTES.contacts.number}`}> {LINK_ROUTES.contacts.numberBeauty}</a>
            </p>

            <p className="contacts-info__text">
              <span>Соціальні мережі:</span>
            </p>

            <Social />
          </div>
        </div>
      </div>
    </section>);
};
export default Contacts;
