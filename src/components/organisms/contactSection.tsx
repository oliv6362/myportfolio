import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { useContactAnimations } from '../../utils/animationManager';

/**
* ContactSection component that renders a contact form powered by Formspree and animated with Framer Motion.
* - On submission success, displays a thank-you message with a pop-in effect.
* - Otherwise shows Name, Email, and Message fields, each fading in on scroll.
* - The submit button animates on hover/tap.
* - Honors the user’s `prefers-reduced-motion` setting by disabling animations.
*/
const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xyzwlepp");
  const { containerStagger, fadeUp, button } = useContactAnimations();

  // If submission succeeded, show a thank-you message
  if (state.succeeded) {
    return (
      <section id="contact" className="bg-[#011533] pb-40 px-4 scroll-mt-16">
        <div className="max-w-lg mx-auto text-center space-y-4">

          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            Thank you!
          </h2>

          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300">
            Your message has been sent.
          </p>

        </div>
      </section>
    );
  }

  // Otherwise, render the contact form
  return (
    <section id="contact" className="bg-[#011533] pb-40 px-14 xl:px-0 scroll-mt-16 ">
      <motion.div className="max-w-lg mx-auto" {...containerStagger}>

        <motion.h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center mb-8" {...fadeUp}>Contact Me</motion.h2>

        <motion.form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <motion.div {...fadeUp}>
            <label htmlFor="name" className="block text-base lg:text-lg xl:text-2xl mb-1">Name</label>
            <input id="name" type="text" name="name" required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </motion.div>

          {/* Email */}
          <motion.div {...fadeUp}>
            <label htmlFor="email" className="block text-base lg:text-lg xl:text-2xl mb-1">Email</label>
            <input id="email" type="email" name="email" required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>

          {/* Message */}
          <motion.div {...fadeUp}>
            <label htmlFor="message" className="block text-base lg:text-lg xl:text-2xl mb-1">Message</label>
            <textarea id="message" name="message" rows={6} required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </motion.div>

          {/* Submit */}
          <motion.button type="submit" disabled={state.submitting}
            className="w-full rounded-lg bg-green-700 px-6 py-3 text-sm lg:text-base xl:text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            {...fadeUp}
            {...button} >
            {state.submitting ? "Sending…" : "Send Message"}
          </motion.button>
        </motion.form>

      </motion.div>
    </section>
  );
};

export default ContactSection;
