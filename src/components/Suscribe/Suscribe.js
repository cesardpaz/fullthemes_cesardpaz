import React from 'react'

const Suscribe = () => {
    return (
        <div className="suscribe">
            <div className="container">
                <div className="suscribe-form">
                    <div className="suscribe-form__content">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <div className="suscribe-form__titles">
                            <h3>Fear Of Missing Out?</h3>
                            <h4>Get the latest deals, updates & more</h4>
                        </div>
                    </div>
                    <div className="suscribe-form__form">
                        <form action="">
                            <input type="text" placeholder="Your email address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Suscribe
