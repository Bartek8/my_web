import React from 'react';

const skills = [{
    id: 0,
    item: 'fab fa-html5 skills__item skills__item--orange',
    text: 'HTML - is the standard markup language for documents designed to be displayed in a web browser. I\'m currently using the BEM methodology'
}, {
    id: 1,
    item: "fab fa-css3-alt skills__item skills__item--blue",
    text: 'CSS - is a style sheet language used for describing the presentation of a document written in HTML. In particular, I use: flexbox, grid, keyframes, media queries.'
}, {
    id: 2,
    item: "fab fa-bootstrap skills__item skills__item--violet",
    text: 'Bootstrap - is an open source toolkit for developing with HTML, CSS, and JS. With a bootstrap you can quickly and easily make a website.'
}, {
    id: 3,
    item: 'fab fa-sass skills__item skills__item--pink',
    text: 'Sass - Sass is a CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS. Sass fits BEM methodology perfectly'
}, {
    id: 4,
    item: "fab fa-js skills__item skills__item--yellow",
    text: 'JavaScript - is a high-level, interpreted programming language for computers. To write less and faster, I use JS library jQuery'
}, {
    id: 5,
    item: "fab fa-react skills__item skills__item--azure",
    text: 'React is a JavaScript library for building user interfaces, which offers a lot of options, such as: Virtual DOM, One-way data flow, JSX'
}, {
    id: 6,
    item: "fab fa-node-js skills__item skills__item--green",
    text: "Node.js - is a JavaScript runtime built on Chrome/'s V8 JavaScript engine. I use Node.js and Express (node framework) to create RESTapi, secure websites (hash password, JWT etc.)"
}, {
    id: 7,
    item: "fab fa-github skills__item skills__item--black",
    text: 'Git is a distributed version-control system for tracking changes in source code during software development. Thanks to github, I can share my projects and work in a team on larger projects.'
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