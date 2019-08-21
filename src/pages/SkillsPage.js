import React from 'react';

const skills = [{
    id: 0,
    item: 'fab fa-html5 skills__item skills__item--orange',
    text: 'HTML - staram się pisać prosty html, aktualnie stosuję metodykę BEM'
}, {
    id: 1,
    item: "fab fa-css3-alt skills__item skills__item--blue",
    text: 'CSS - najnowsze technologie nie są mi obce - flexbox, grid etc. '
}, {
    id: 2,
    item: "fab fa-bootstrap skills__item skills__item--violet",
    text: 'Bootstrap - potrafię stosować oraz customizować bootstrap na potrzeby strony'
}, {
    id: 3,
    item: 'fab fa-sass skills__item skills__item--pink',
    text: 'Sass - idealnie komponuję się metodyką BEM, przez co style są przejrzystsze oraz łatwe w rozbudowie'
}, {
    id: 4,
    item: "fab fa-js skills__item skills__item--yellow",
    text: 'JS - klasyczny JavaScript (aplikacje) oraz biblioteka jQuerry (strony internetowe)'
}, {
    id: 5,
    item: "fab fa-react skills__item skills__item--azure",
    text: 'React - wykorzystanie technolgii reacta - single page app., rest api, zabezpieczenia'
}, {
    id: 6,
    item: "fab fa-node-js skills__item skills__item--green",
    text: 'NodeJs - framework Express - technologia backendowa - API - systemy'
}, {
    id: 7,
    item: "fab fa-github skills__item skills__item--black",
    text: 'Github - znajomość umożliwiająca pracę w zespole'
}]

const handleClick = (e) => {
    document.getElementById(e.target.id).classList.add('skills__item--hide');
    document.querySelector(`.text-${e.target.id}`).classList.add('skills__item--text--active')
}

const SkillsPage = () => {

    const elements = skills.map(element => (
        <div className="skills__container">
            <i onClick={handleClick} id={element.id} class={element.item}></i><p className={`skills__item--text text-${element.id}`}>{element.text}</p></div>

    ));

    return (
        <div className='skills'  >
            {elements}
        </div>
    )
}

export default SkillsPage;