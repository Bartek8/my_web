import React from 'react';
import { SkillItem } from '../components/SkillItem'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'


const SkillsPage = () => {
    const elements = SkillItem.map(element => (
        <OverlayTrigger
            key={element.id}
            arrowProps
            placement="auto"
            delay={{ show: 200, hide: 400 }}
            overlay={<div className="skills__item--text"><Tooltip></Tooltip>{element.text}</div>}
        >
            <div className={element.item} key={element.id}></div>
        </OverlayTrigger>
    ));
    return (
        <div className="skills skills__container">{elements}</div>
    );
}

export default SkillsPage;
