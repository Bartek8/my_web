import React from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import ContactPage from '../pages/ContactPage'
import ProjectPage from '../pages/ProjectPage'
import SkillsPage from '../pages/SkillsPage'

const Page = () => {
    return (
        <div className='page'>
            <Switch >
                <Route path='/' exact component={HomePage} />
                <Route path='/skills' exact component={SkillsPage} />
                <Route path='/contact' exact component={ContactPage} />
                <Route path='/project' exact component={ProjectPage} />
                <Route exact component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default Page;