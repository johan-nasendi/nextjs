



const Contact = () => {
    return (
        <section className="order" id="order">

            <h3 className="sub-heading"> Contact Us </h3>
            <h1 className="heading"> Lorem ipsum dolor sit amet. </h1>

            <form action="">

                <div className="inputBox">
                    <div className="input">
                        <span>your name</span>
                        <input type="text" placeholder="enter your name"/>
                    </div>
                    <div className="input">
                        <span>your number</span>
                        <input type="number" placeholder="enter your number"/>
                    </div>
                </div>
                <div className="inputBox">
                    <div className="input">
                        <span>your order</span>
                        <input type="text" placeholder="enter food name"/>
                    </div>
                    <div className="input">
                        <span>additional food</span>
                        <input type="test" placeholder="extra with food"/>
                    </div>
                </div>
                <div className="inputBox">
                    <div className="input">
                        <span>how musch</span>
                        <input type="number" placeholder="how many orders"/>
                    </div>
                    <div className="input">
                        <span>date and time</span>
                        <input type="datetime-local" />
                    </div>
                </div>
                <div className="inputBox">
                    <div className="input">
                        <span>your address</span>
                        <textarea name="" placeholder="enter your address"></textarea>
                    </div>
                    <div className="input">
                        <span>your message</span>
                        <textarea name="" placeholder="enter your message"></textarea>
                    </div>
                </div>

                <input type="submit" value="Send" className="btn" />

            </form>

</section>
    )
}

export default Contact
