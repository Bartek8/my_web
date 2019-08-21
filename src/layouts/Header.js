import React from 'react';
import { NavLink } from 'react-router-dom'

const list = [
    { name: "home", path: "/", exact: true },
    { name: "skills", path: "/skills" },
    { name: "project", path: "/project" },
    { name: "contact", path: "/contact" },
]

const handleClick = () => {
    document.querySelector('.modal').style.display = "none";
}

const modal = (
    <div className='modal modal--bg'>
        <div className="modal__content">
            <div onClick={handleClick} className="modal__close"><i class="fas fa-times"></i></div>
            <h1 className="modal__title">o mnie</h1>
            <p className="modal__text">Jetem studentem informatyki na politechnice poznańskiej, programy piszę głównie we Front-endzie. Najlepiej czuję się z JavaScript, lecz podstawy mam z każdego języka, ponieważ jestem nauczycielem w szkole programowania 'Giganci programowania'. Ulubiony framwork front-end to React, back-endowy to NodeJs - w nich czuję się najpewniej. Staram się dbać o przejrzystość kodu oraz poznawać coraz to nowe technologie i wykorzystywać je w praktyce.</p>
        </div>
    </div>
);

const Header = () => {

    const menu = list.map(item => (
        <li className="nav__list-element"><NavLink className='nav__item icon-text text-uppercase nav__item--hover' to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>
    ))


    return (
        <ul className="nav">
            {modal}
            {menu}
        </ul>
    )
}

export default Header;