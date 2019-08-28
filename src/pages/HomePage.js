import React, { Component } from 'react';


class HomePage extends React.Component {

    handleClick = () => {
        document.querySelector('.modal').style.display = "block";
    }

    handleClickImg = () => {
        document.querySelector('.modal-img').style.display = "block";
    }

    render() {
        return (
            <div>
                <div className="circle">
                    <i className="fas fa-circle circle__element circle__full"></i>
                    <i className="far fa-circle circle__element circle__empty"></i>
                </div>
                <div className="welcome">
                    <h1 className="text-uppercase welcome__text-1">Hello!</h1>
                    <h1 className="welcome__text-2">I'm Bartek Waszak</h1>
                    <p className="welcome__text-3">Welcome to my portfolio page</p>
                </div>
                <button onClick={this.handleClick} className='text-uppercase btn btn--read-more'>read more</button>
                <button onClick={this.handleClickImg} className='text-uppercase btn btn--cv'>cv</button>
            </div>
        );
    }
}

export default HomePage;