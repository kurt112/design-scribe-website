import React, {useState} from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {

    const [data, setData] = useState(
        {
            name: '',
            email: '',
            message: ''
        }
    );

    const sendEmail = (event) => {
        event.preventDefault();

        const templateParams = {
            name: data.name,
            notes: data.message + "\nFrom: " + data.name + " (" + data.email + ")",
            email: 'designscribe.solution@gmail.com'
        };

        emailjs.send('service_ugv0oj7', 'template_o7z2len', templateParams, {
            publicKey: '-QovHotCx-jbZmDsJ',
            privateKey: 'uLJYOUvNsm0YfxjMzNxI4', // optional, highly recommended for security reasons
        })
            .then((response) => {
                   alert('Message sent successfully!');
                   setData({
                       name: '',
                       email: '',
                       message: ''
                   });
                }, (err) => {
                    console.log(err)
                },
            );
    }

    return (
        <div className="px-5 pb-24">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl text-white mb-16 jumbotron-background-color">
                <div
                    className="relative max-w-6xl mx-auto py-16 md:py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Contact Us
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90 leading-relaxed">
                        We'd love to hear from you! Reach out with any questions or feedback.
                    </p>
                </div>
            </section>

            <div
                className="flex items-center justify-between bg-white rounded-xl px-6 py-4 shadow border border-gray-100">
                <form className="p-8 flex-1 bg-white flex flex-col justify-center gap-4" onSubmit={event => sendEmail(event)}>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Send a Message</h3>
                    <input
                        className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        type="text"
                        placeholder="Your Name"
                        value={data.name}
                        onChange={e => setData({...data, name: e.target.value})}
                        required
                    />
                    <input
                        className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        type="email"
                        placeholder="Your Email"
                        value={data.email}
                        onChange={e => setData({...data, email: e.target.value})}
                        required
                    />
                    <textarea
                        className="rounded-lg border border-gray-300 p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        placeholder="Your Message"
                        value={data.message}
                        onChange={e => setData({...data, message: e.target.value})}
                        required
                    />
                    <button
                        type="submit"
                        className="mt-2 text-white font-bold py-3 rounded-lg bg-blue-500 hover:scale-105 transition-transform"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    )
}