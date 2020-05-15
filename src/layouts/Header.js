import React from 'react';
import { NavLink } from 'react-router-dom'

const list = [
    { name: "home", path: "/", exact: true },
    { name: "skills", path: "/skills" },
    { name: "project", path: "/project" },
    { name: "contact", path: "/contact" },
]

const handleBurgerClick = () => {
    document.querySelector('.navi-burger__switch').classList.toggle("change");
    document.querySelector('.navi-burger__show-burger').classList.toggle("navi-burger__hide-burger");
}

const Header = () => {

    const menu = list.map(item => (
        <li key={item.name} className="navi__list-element"><NavLink style={{ textDecoration: "none" }} className='navi__item icon-text text-uppercase navi__item--hover' to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>
    ))


    return (
        <div>
            <ul className="navi">
                {menu}
            </ul>
            <ul className="navi-burger">
                <div onClick={handleBurgerClick} className="navi-burger__show-burger"><i className="fas fa-bars"></i></div>
                <div className="navi-burger__switch change" >{menu}</div>
            </ul>
        </div>

    )
}

export default Header;