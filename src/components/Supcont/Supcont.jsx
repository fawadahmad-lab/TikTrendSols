import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Supcont = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97]
      }
    }
  };

  const contactItems = [
    { 
      icon: <FiMail className="text-2xl" />, 
      label: 'Email Us', 
      value: 'infotiktrendsolution@gmail.com', 
      link: 'mailto:infotiktrendsolution@gmail.com' 
    },
    { 
      icon: <FiPhone className="text-2xl" />, 
      label: 'Call Us', 
      value: '+92-3465230377', 
      link: 'tel:+923465230377' 
    },
    { 
      icon: <FiMapPin className="text-2xl" />, 
      label: 'Visit Us', 
      value: 'Islamabad, Pakistan' 
    }
  ];

  const formFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com' }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_59yt17g', // Service ID
      'template_x0kivym', // Template ID
      form.current,
      '9CnaDAJCPreRtlovY' // Public API Key
    )
    .then((result) => {
      toast.success('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      toast.error('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-purple-900 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Let's <span className="text-purple-600">Connect</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-purple-700 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Reach out to us for any questions or project inquiries. We're here to help you grow your brand on TikTok.
            </motion.p>

            <div className="space-y-6">
              {contactItems.map(({ icon, label, value, link }, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-purple-100 rounded-xl text-purple-600 shadow-md">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-900">{label}</h4>
                    {link ? (
                      <a 
                        href={link} 
                        className="text-purple-600 hover:text-purple-800 transition-colors text-base"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-purple-600 text-base">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl md:rounded-3xl border border-purple-200 p-6 md:p-10 shadow-xl relative overflow-hidden"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6 md:space-y-8">
              {formFields.map(({ id, label, type, placeholder }) => (
                <motion.div 
                  key={id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <label 
                    htmlFor={id} 
                    className="block text-purple-800 font-medium mb-2"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg md:rounded-xl text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label 
                  htmlFor="message" 
                  className="block text-purple-800 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Explain Your Project..."
                  required
                  className="w-full px-4 py-3 bg-white border border-purple-300 rounded-lg md:rounded-xl text-purple-900 placeholder-purple-400 focus:ring-2 focus:ring-purple-500 transition-all"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 md:py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-lg md:rounded-xl transition-all shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-70' : 'hover:from-purple-700 hover:to-purple-900'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 opacity-40 blur-3xl rounded-full animate-pulse -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Supcont;