import React from 'react';

const ProjectPage = () => {

    const projectsList = [
        {
            id: 1,
            name: "Recipes website!",
            desc: "Website with recipes. Implemented authorization (JWT), validation, filtering results, status management and many more.",
            technologies: ["React", "Redux", "Bootstrap"],
            deploy: "https://recipe-website.netlify.app/",
            code: "https://github.com/Bartek8/recipe_react"
        },
        {
            id: 2,
            name: "Recipes server!",
            desc: "A server written for a recipe website, connected to MongoDB. Authorization, data validation, e mail (smtp), security, upload photo and many more.",
            technologies: ["Node", "Express", "MongoDB"],
            deploy: false,
            code: "https://github.com/Bartek8/recipe_node"
        }
    ]

    const projects = projectsList.map(item => (

        <div className="project-item" key={item.id}>
            <h2 className="project-item__name"><span>Name of project:</span> {item.name}</h2>
            <p className="project-item__desc"><span>Description: </span>{item.desc}</p>

            <a rel="noopener noreferrer" target="_blank" href={item.code} className="project-item__code"><span>Code: </span>{item.code}</a>
            <a rel="noopener noreferrer" target="_blank" href={item.deploy} className="project-item__live">{item.deploy ? <div><span>Live: </span>{item.deploy}</div> : ""}</a>

            <hr></hr>
            <div className="project-item__technologies">
                {item.technologies.map(i => (
                    <div className="project-item__technologies--item" key={i}>{i}</div>
                ))}
            </div>
            <hr></hr>
        </div>

    ))

    return (
        <div className="project">

            <div><a className="project__icon-github" href="https://github.com/Bartek8"><i className="fab fa-github"></i></a></div>
            {projects}
        </div>);
}

export default ProjectPage;