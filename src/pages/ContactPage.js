import React from 'react';

const ContactPage = () => {
    return (
        <div className="contact">
            <div className="contact__title text-uppercase">Contact:</div>
            <div className="contact__icons">
                <div className="contact__icon"><i class="contact__icon--mail fas fa-envelope"></i>bartlomiejwaszak1@gmail.com</div>
                <div className="contact__icon"><i class="contact__icon--phone fas fa-phone"></i>725 913 233</div>
                <div className="contact__icon"><a className="contact__link" href="https://www.facebook.com/waszak.b"><i class="fab fa-facebook-square contact__icon--facebook"></i>Facebook</a></div>
                <div className="contact__icon">
                    <a className="contact__link" href="https://github.com/Bartek8">
                        <i class="fab fa-github-square contact__icon--github"></i>Github
                    </a>
                </div>
                <div className="contact__icon"><a className="contact__link" href="https://www.linkedin.com/in/bart%C5%82omiej-waszak-aa7308190/"><i class="fab fa-linkedin-in contact__icon--linkedin"></i>Linkedin</a></div>
            </div>
        </div>);
}

export default ContactPage;