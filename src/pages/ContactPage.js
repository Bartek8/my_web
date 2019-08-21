import React from 'react';

const ContactPage = () => {
    return (
        <div className="contact">
            <div className="contact__title text-uppercase">Contact:</div>
            <div className="contact__icons">
                <div className="contact__icon"><i class="contact__icon--mail fas fa-envelope"></i>bartlomiejwaszak1@gmail.com</div>
                <div className="contact__icon"><i class="contact__icon--phone fas fa-phone"></i>725 913 233</div>
            </div>
            <form className='form'>
                <div className='form__input'>
                    <input className="form__input--name" type="text" placeholder="name..." />
                    <input className="form__input--mail" type="text" placeholder="e-mail..." />
                    <button className="form__input--btn text-uppercase" type='submit'>send!</button>
                </div>
                <textarea className='form__textarea' name="" id="" cols="30" rows="10" placeholder="message..."></textarea>
            </form>

        </div>);
}

export default ContactPage;