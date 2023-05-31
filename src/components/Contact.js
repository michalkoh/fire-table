import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { Trans, useTranslation } from 'react-i18next';

const Contact = (props) => {
    const [state, handleSubmit] = useForm("mbjeeybr");

    if (!state.submitting && state.succeeded) {
        document.getElementById("contact-form").reset();
    }

    const {t} = useTranslation();

    return (
        <section id="contact">
            <div className="inner">
                <section>
                    {state.succeeded && <p><Trans>Message sent</Trans></p>}
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="field half first">
                            <label htmlFor="name"><Trans>Name</Trans></label>
                            <input type="text" name="name" id="name" />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div className="field half">
                            <label htmlFor="email"><Trans>Email</Trans></label>
                            <input type="text" name="email" required id="email" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div className="field">
                            <label htmlFor="message"><Trans>Message</Trans></label>
                            <textarea name="message" id="message" required rows="6"></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <ul className="actions">
                            <li>
                                <button type="submit" disabled={state.submitting}><Trans>Submit</Trans></button>
                            </li>
                            <li>
                                <input type="reset" value={t("Clear")} />
                            </li>
                        </ul>
                    </form>
                </section>
                <section className="split">
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-envelope"></span>
                            <h3><Trans>Email</Trans></h3>
                            <a href="#">firetable@yahoo.com</a>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-phone"></span>
                            <h3><Trans>Phone</Trans></h3>
                            <span>+421 907 399 274</span>
                        </div>
                    </section>
                    <section>
                        <div className="contact-method">
                            <span className="icon alt fa-home"></span>
                            <h3><Trans>Address</Trans></h3>
                            <span>
                                Košice, 04001<br />
                                <Trans>Slovakia</Trans>
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
}

export default Contact
