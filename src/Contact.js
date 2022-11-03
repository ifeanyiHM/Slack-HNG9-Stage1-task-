
const Contact = () => {
    return ( 
        <div className="Contact">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form action="">
                <div className="flex_name">
                    <div>
                        <label htmlFor="first_name">First name</label>
                        <input type="text" id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div>
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" id="last-name" placeholder="Enter your last name" />
                    </div>
                </div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="yourname@email.com" />

                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>
                <div id="lab">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">You agree to provide your data to Ifeanyi who may contact you.</label>
                    <span className="custom_check"></span>
                </div>

                <button type="submit" id="btn__submit">Send message</button>
            </form>
        </div>
    );
}
 
export default Contact;