import React from 'react';
import { NavLink } from 'react-router-dom'
import cv from '../images/cv.jpg'

const list = [
    { name: "home", path: "/", exact: true },
    { name: "skills", path: "/skills" },
    { name: "project", path: "/project" },
    { name: "contact", path: "/contact" },
]

const handleClick = () => {
    document.querySelector('.modal').style.display = "none";
}
const handleClickImg = () => {
    document.querySelector('.modal-img').style.display = "none";
}

const handleBurgerClick = () => {
    document.querySelector('.nav-burger__switch').classList.toggle("change");
    document.querySelector('.nav-burger__show-burger').classList.toggle("nav-burger__hide-burger");
}

const modal = (
    <div className='modal modal--bg'>
        <div className="modal__content">
            <div onClick={handleClick} className="modal__close"><i class="fas fa-times"></i></div>
            <h1 className="modal__title">ABOUT ME</h1>
            <p className="modal__text">I'm a student of IT systems security, Master's level at the Poznań University of Technology. I feel best in front-end but currently I develop in both front-end and back-end technologies. I have basic skills in every language, because I'm a teacher at the programming school 'Giganci Programowania'. However, I mainly create websites in which I use especially: html, css (framework and preprocessor), JS (back-end and front-end frameworks). I try to take care of code clarity and learn new technologies to put them into practice. I become a better programmer every day but I don't forget about other hobbies. I'm fond of travelling, because it helps me develop my cooking skills. I like every kind of cuisine, yet my favourites are japanese, vietnamese, thai and italian. In addition, my hobby is squash, I am a member of AZS.
</p>
        </div>
    </div>
);
const modal_img = (
    <div className='modal-img modal-img--bg-img'>
        <div className="modal-img__container">
            <img src={cv} alt="cv" className="modal-img__container-img" />
            <div onClick={handleClickImg} className="modal-img__container-btn"><i class="fas fa-times"></i></div>
        </div>
    </div>
);

const Header = () => {

    const menu = list.map(item => (
        <li className="nav__list-element"><NavLink className='nav__item icon-text text-uppercase nav__item--hover' to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>
    ))


    return (
        <div>
            {modal}
            {modal_img}
            <ul className="nav">
                {menu}
            </ul>
            <ul className="nav-burger">
                <div onClick={handleBurgerClick} className="nav-burger__show-burger"><i class="fas fa-bars"></i></div>
                <div className="nav-burger__switch">{menu}</div>
            </ul>
        </div>

    )
}

export default Header;