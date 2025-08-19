import { motion } from "framer-motion"
import { useForm, ValidationError } from "@formspree/react"
import { useContactAnimations } from "../../utils/animationManager"

/**
 * ContactSection component that renders a contact form powered by Formspree and animated with Framer Motion.
 * - On submission success, displays a thank-you message with a pop-in effect.
 * - Otherwise shows Name, Email, and Message fields, each fading in on scroll.
 * - The submit button animates on hover/tap.
 * - Honors the user’s `prefers-reduced-motion` setting by disabling animations.
 */
const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xyzwlepp")
  const { containerStagger, fadeUp, button } = useContactAnimations()

  // If submission succeeded, show a thank-you message
  if (state.succeeded) {
    return (
      <section id="contact" className="scroll-mt-16 bg-[#011533] px-4 pb-40">
        <div className="mx-auto max-w-lg space-y-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">Thank you!</h2>

          <p className="text-base text-gray-300 md:text-lg lg:text-xl xl:text-2xl">Your message has been sent.</p>
        </div>
      </section>
    )
  }

  // Otherwise, render the contact form
  return (
    <section id="contact" className="scroll-mt-16 bg-[#011533] px-14 pb-40 xl:px-0">
      <motion.div className="mx-auto max-w-lg" {...containerStagger}>
        <motion.h2 className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl" {...fadeUp}>
          Contact Me
        </motion.h2>

        <motion.form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <motion.div {...fadeUp}>
            <label htmlFor="name" className="mb-1 block text-base lg:text-lg xl:text-2xl">
              Name
            </label>
            <input id="name" type="text" name="name" required className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:ring-2 focus:ring-green-500 focus:outline-none" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </motion.div>

          {/* Email */}
          <motion.div {...fadeUp}>
            <label htmlFor="email" className="mb-1 block text-base lg:text-lg xl:text-2xl">
              Email
            </label>
            <input id="email" type="email" name="email" required className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:ring-2 focus:ring-green-500 focus:outline-none" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </motion.div>

          {/* Message */}
          <motion.div {...fadeUp}>
            <label htmlFor="message" className="mb-1 block text-base lg:text-lg xl:text-2xl">
              Message
            </label>
            <textarea id="message" name="message" rows={6} required className="w-full rounded-lg border border-gray-700 bg-gray-900 p-3 focus:ring-2 focus:ring-green-500 focus:outline-none" />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-lg bg-green-700 px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50 lg:text-base xl:text-lg"
            {...fadeUp}
            {...button}
          >
            {state.submitting ? "Sending…" : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default ContactSection
