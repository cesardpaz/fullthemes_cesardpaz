import React from 'react'

const FeaturesHome = () => {
    return (
        <div className="main__wdgt container">
            <div className="features">
                <div className="feature">
                    <i className="feature__icon fa fa-gift"></i>
                    <div className="feature__meta">
                        <h3>Free delivery</h3>
                        <p>For all orders above $45</p>
                    </div>
                </div>
                <div className="feature">
                    <i className="feature__icon fa fa-shield"></i>
                    <div className="feature__meta">
                        <h3>Secure payments</h3>
                        <p>Confidence on all your devices</p>
                    </div>
                </div>
                <div className="feature">
                    <i className="feature__icon fa fa-headphones"></i>
                    <div className="feature__meta">
                        <h3>Top-notch support</h3>
                        <p>sayhello&vapier.com</p>
                    </div>
                </div>
                <div className="feature">
                    <i className="feature__icon fa fa-repeat"></i>
                    <div className="feature__meta">
                        <h3>180 Days Return</h3>
                        <p>180 Days Return</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesHome
