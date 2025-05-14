import { useForm, ValidationError } from '@formspree/react';

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xyzwlepp");

  if (state.succeeded) {
    return (
      <section id="contact" className="bg-[#011533] pb-40 px-4 scroll-mt-16">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Thank you!</h2>
          <p className="text-lg text-gray-300">Your message has been sent.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[#011533] pb-40 px-4 scroll-mt-16">
      <div className="max-w-lg mx-auto">
        <h2 className="text-5xl text-center mb-8">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xl mb-1">Name</label>
            <input id="name" type="text" name="name" required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xl mb-1">Email</label>
            <input id="email" type="email" name="email" required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xl mb-1">Message</label>
            <textarea id="message" name="message" rows={6} required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit */}
          <button type="submit" disabled={state.submitting}
            className="w-full rounded-lg bg-green-700 px-6 py-3 text-lg font-semibold text-white transition-colors 
           disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-900" >
            {state.submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
