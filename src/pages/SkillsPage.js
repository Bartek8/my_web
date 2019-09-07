import React from 'react';
import { SkillItem } from '../components/SkillItem'


const handleClick = (e) => {
    document.getElementById(e.target.id).classList.add('skills__item--hide');
    document.querySelector(`.text-${e.target.id}`).classList.add('skills__item--text--active')
}

const SkillsPage = () => {

    const elements = SkillItem.map(element => (
        <div className="skills__container" >
            <i onClick={handleClick} id={element.id} class={element.item}></i>
            <p className={`skills__item--text text-${element.id}`}>{element.text}</p>
        </div>

    ));

    return (
        <div className='skills'  >
            {elements}
        </div>
    )
}

export default SkillsPage;