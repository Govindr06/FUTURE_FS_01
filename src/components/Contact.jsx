import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import SectionHeading from './SectionHeading.jsx';

const emailConfig = {
  serviceId: 'service_5hh9u87',
  templateId: 'template_akxvsmq',
  publicKey: '1oYibgWgnMIBvpm83',
};

const initialFormState = {
  name: '',
  email: '',
  message: '',
};

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        {
          publicKey: emailConfig.publicKey,
        },
      );

      setStatus({
        type: 'success',
        message: `Thanks, ${formData.name}. Your message has been sent successfully.`,
      });
      setFormData(initialFormState);
      formRef.current?.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Sorry, the message could not be sent right now. Please try again in a moment.',
      });
      console.error('EmailJS send failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-slate-950 px-5 py-20 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's Connect"
          description="Reach out for full stack development opportunities, project collaboration, or technical discussions."
          inverted
        />

        <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-lg border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Govind Rajeshkumar Pillai</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Full Stack Web Developer & Computer Science Student at VIT
              Chennai.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/Govindr06"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-teal-300 hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/govind-rajeshkumar-pillai-b3bb49321"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-teal-300 hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                LinkedIn
              </a>
            </div>
          </aside>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-lg border border-white/10 bg-white p-6 text-slate-950 shadow-xl sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                autoComplete="name"
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
                placeholder="Your name"
              />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                autoComplete="email"
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
                placeholder="you@example.com"
              />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                required
                rows="6"
                className="mt-2 w-full resize-y rounded-md border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-teal-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isSubmitting ? 'Sending...' : 'Submit Message'}
              </button>
              {status.message && (
                <p
                  role="status"
                  className={`text-sm font-medium ${
                    status.type === 'success'
                      ? 'text-teal-700'
                      : 'text-red-600'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
