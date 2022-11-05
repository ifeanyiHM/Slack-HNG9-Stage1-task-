import { getElementError } from "@testing-library/react";
import { useState } from "react";

const Contact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] =   useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);


    const handleSubmit = (e) => {
        if (firstName.length == 0 || lastName.length == 0 || email.length == 0 || message.length == 0) {
            setError(true)
            
            e.preventDefault();
        }

        document.querySelectorAll('.Put').forEach(input => {
            input.value = '';
        });
    }

    return ( 
        <div className="Contact">
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit}>
                <div className="flex_name">

                    <div>
                        <label htmlFor="first_name">First name</label>
                        {error&&firstName.length<=0? 
                            [
                                <input type="text" className="Put" id="first-name" style={{borderColor:'rgb(255, 0, 0)'}} onChange={e => setFirstName(e.target.value)} placeholder="Enter your first name" />,
                                <p>please enter your firstname</p>
                            ]:
                            [
                                <input type="text" className="Put" id="first-name" onChange={e => setFirstName(e.target.value)} placeholder="Enter your first name" />,
                                <p style={{visibility:'hidden'}}>please enter your firstname</p>
                            ]
                        }
                    </div>

                    <div>
                        
                        <label htmlFor="last_name">Last name</label>
                        {error&&lastName.length<=0?
                            [
                                <input type="text" className="Put" id="last-name" style={{borderColor:'rgb(255, 0, 0)'}} onChange={e => setLastName(e.target.value)} placeholder="Enter your last name" />,
                                <p>please enter your lastname</p>
                            ]:
                            [
                                <input type="text" className="Put" id="last-name" onChange={e => setLastName(e.target.value)} placeholder="Enter your last name" />,
                                <p style={{visibility:'hidden'}}>please enter your lastname</p>
                            ]
                        }
                    </div>
                </div>

                <label htmlFor="email">Email</label>
                {error&&email.length<=0?
                    [
                        <input type="email" className="Put" id="email" style={{borderColor:'rgb(255, 0, 0)'}} onChange={e => setEmail(e.target.value)} placeholder="yourname@email.com" />,
                        <p>please enter your email</p> 
                    ]: email.length>=1?
                    [
                        <input type="email" className="Put" id="email" onChange={e => setEmail(e.target.value)} placeholder="yourname@email.com" />,
                        <p style={{visibility:'hidden'}}>please enter your email</p>
                    ]:
                    [
                        <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="yourname@email.com" />,
                        <p style={{color: 'rgb(0, 0, 0)'}}> This is a hint text to help users.</p>
                    ]
                }

                <label htmlFor="message">Message</label>
                {error&&message.length<=0?
                    [
                        <textarea name="message" className="Put" id="message" style={{borderColor:'rgb(255, 0, 0)'}} onChange={e => setMessage(e.target.value)} placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>,
                        <p>please enter a message</p>
                    ]:
                    [
                        <textarea name="message" className="Put" id="message" onChange={e => setMessage(e.target.value)} placeholder="Send me a message and i'll reply you as soon as possible..."></textarea>,
                        <p style={{visibility:'hidden'}}>please enter a message</p>
                    ]
                }

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