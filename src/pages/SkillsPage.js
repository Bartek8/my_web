import React from 'react';
import { SkillItem } from '../components/SkillItem'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'


const SkillsPage = () => {
    const elements = SkillItem.map(element => (
        <OverlayTrigger
            placement="auto"
            delay={{ show: 200, hide: 400 }}
            overlay={<div className="skills__item--text"><Tooltip>{element.text}</Tooltip></div>}
        >
            <div className={element.item}></div>

        </OverlayTrigger>
    ));
    return (
        <div className="skills skills__container">{elements}</div>
    );
}

export default SkillsPage;
