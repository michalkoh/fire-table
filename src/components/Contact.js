import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = (props) => {
    const [state, handleSubmit] = useForm("mbjeeybr");

    if (!state.submitting && state.succeeded) {
        document.getElementById("contact-form").reset();
    }

    return (
        <section id="contact">
            <div className="inner">
                <section>
                    {/* <form method="post" action="https://formspree.io/f/mbjeeybr"> */}
                    {state.succeeded && <p>Message sent. Thank you!</p>}
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" required id="email" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" required rows="6"></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <ul className="actions">
                            {/* <li><input type="submit" value="Send Message" className="special" /></li> */}
                            <li>
                                <button type="submit" disabled={state.submitting}>Submit</button>
                            </li>
                            <li>
                                <input type="reset" value="Clear" />
                            </li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-envelope"></span>
                            <h3>Email</h3>
                            <a href="#">firetable@yahoo.com</a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-phone"></span>
                            <h3>Phone</h3>
                            <span>+421 907 399 274</span>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-home"></span>
                            <h3>Address</h3>
                            <span>Pri koscelu 16<br />
                                Koksov-Baksa, 04000<br />
                                Slovakia</span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
}

export default Contact
