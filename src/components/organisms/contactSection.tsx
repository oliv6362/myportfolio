import { motion, useReducedMotion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const containerVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.2, duration: 0.5 } } };
const itemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };
const buttonVariants = { hover: { scale: 1.05 }, tap: { scale: 0.95 } };

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xyzwlepp");
  const reduce = useReducedMotion();

  // choose either motion or empty props
  const containerProps = reduce
    ? {}
    : {
      variants: containerVariants,
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: false, amount: 0.3 }
    };

  if (state.succeeded) {
    return (
      <motion.section id="contact" className="bg-[#011533] pb-40 px-4 scroll-mt-16"
        {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5 } })} >
        <div className="max-w-lg mx-auto text-center space-y-4">
          <motion.h2 className="text-5xl font-bold"
            {...(reduce ? {} : { initial: { scale: 0.8 }, animate: { scale: 1 }, transition: { duration: 0.5 } })} >
            Thank you!
          </motion.h2>

          <motion.p className="text-2xl text-gray-300"
            {...(reduce ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.3, duration: 0.5 } })}>
            Your message has been sent.
          </motion.p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section id="contact" className="bg-[#011533] pb-40 px-4 scroll-mt-16">
      <motion.div className="max-w-lg mx-auto" {...containerProps}>
        <motion.h2 className="text-5xl text-center mb-8" variants={itemVariants}>
          Contact Me
        </motion.h2>

        <motion.form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-xl mb-1">Name</label>
            <input id="name" type="text" name="name" required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-xl mb-1">Email</label>
            <input id="email" type="email" name="email" required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block text-xl mb-1">Message</label>
            <textarea id="message" name="message" rows={6} required
              className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:outline-none focus:ring-2 focus:ring-green-500" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </motion.div>

          {/* Submit */}
          <motion.button type="submit" disabled={state.submitting}
            className="w-full rounded-lg bg-green-700 px-6 py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            animate={reduce ? {} : undefined}
            {...buttonVariants} >
            {state.submitting ? "Sending…" : "Send Message"}
          </motion.button>
        </motion.form>

      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
