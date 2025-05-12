import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [activeQuestion, setActiveQuestion] = useState(null);

  const tabs = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'story', label: 'Our Story' },
    { id: 'team', label: 'Our Team' }
  ];

  const faqs = [
    {
      question: "What makes TikTrend different from other marketing agencies?",
      answer: "We specialize exclusively in TikTok marketing, which allows us to stay at the forefront of platform trends, algorithm changes, and best practices. Our team lives and breathes TikTok, giving our clients an edge over competitors using generalist agencies."
    },
    {
      question: "How do you measure success for TikTok campaigns?",
      answer: "We use a combination of platform analytics (views, engagement rates, CTR) and business metrics (conversions, ROAS, CPA) tailored to your specific goals. Every campaign starts with clear KPIs and regular performance reporting."
    },
    {
      question: "Do you work with small businesses or only large brands?",
      answer: "We work with businesses of all sizes! Our approach scales to fit different budgets, from local shops needing organic growth to enterprise brands running six-figure ad campaigns."
    },
    {
      question: "How quickly can we expect to see results?",
      answer: "Organic growth typically shows traction in 4-6 weeks as we optimize content. Paid campaigns can drive immediate traffic, with performance improving as we refine targeting and creative based on data."
    },
    {
      question: "What's your approach to TikTok content creation?",
      answer: "We blend data-driven strategy with authentic creativity. Our process includes trend analysis, competitor research, and platform-native content formats that resonate with TikTok's unique audience behaviors."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const content = {
    mission: (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-purple-800">Driving TikTok Success</h3>
        <p className="text-purple-700">
          At TikTrend, we're on a mission to revolutionize how brands connect with audiences on TikTok.
          We combine data-driven strategies with creative storytelling to deliver measurable results.
        </p>
        <ul className="space-y-3 text-purple-700">
          <li className="flex items-start gap-2">
            <span className="text-purple-600">✓</span>
            <span>Increase brand awareness through viral content</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">✓</span>
            <span>Maximize ROI from TikTok advertising</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600">✓</span>
            <span>Build authentic connections with Gen Z audiences</span>
          </li>
        </ul>
      </div>
    ),
    story: (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-purple-800">From Passion to Profession</h3>
        <p className="text-purple-700">
          Founded in 2021 by TikTok marketing experts, TikTrend started as a small team helping local businesses
          navigate the platform. Today, we manage millions in ad spend for global brands.
        </p>
        <p className="text-purple-700">
          Our journey has been marked by early adoption of TikTok Shop, pioneering influencer strategies,
          and staying ahead of algorithm changes to give our clients first-mover advantage.
        </p>
      </div>
    ),
    team: (
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-purple-800">The Trendsetters</h3>
        <p className="text-purple-700">
          Our team consists of TikTok-obsessed marketers, data analysts, content creators, and ad specialists
          who eat, sleep, and breathe the platform.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {['Content', 'Ads', 'Strategy', 'Analytics'].map((dept) => (
            <div key={dept} className="bg-purple-100 rounded-lg p-4 text-center border border-purple-300 shadow-md hover:shadow-xl hover:bg-purple-200 transition-all duration-300">
              <div className="text-purple-800 font-bold">{dept}</div>
              <div className="text-purple-600 text-sm">Specialists</div>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white relative overflow-hidden py-20 px-4">

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-100 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-100 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            About <span className="text-purple-600">TikTrend</span>
          </h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            We're not just another marketing agency - we're TikTok specialists who understand the platform inside out.
          </p>
        </motion.div>

        {/* Main Card - Lighter version */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-200 hover:shadow-2xl transition-all duration-300"
        >
          {/* Tabs */}
          <div className="flex border-b border-purple-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-4 text-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600'
                    : 'text-purple-500 hover:text-purple-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="p-8 md:p-12"
          >
            {content[activeTab]}
          </motion.div>
        </motion.div>

        {/* Stats Cards - Lighter version */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 relative z-10">
          {[
            { value: '100M+', label: 'Views Generated' },
            { value: '500+', label: 'Campaigns' },
            { value: '85%', label: 'Client Retention' },
            { value: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center border border-purple-200 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-purple-700">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl border border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-purple-800 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-purple-100 pb-4 last:border-b-0"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none group"
                >
                  <h4 className="text-lg md:text-xl font-medium text-purple-800 group-hover:text-purple-600 transition-colors pr-4">
                    {faq.question}
                  </h4>
                  <motion.div
                    animate={{ rotate: activeQuestion === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-200 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </button>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeQuestion === index ? 1 : 0,
                    height: activeQuestion === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pt-2 text-purple-700">{faq.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Meet the CEO Section - Lighter version */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl border border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 overflow-hidden"
        >
          <h3 className="text-3xl font-bold text-purple-600 mb-6 text-center">Meet Our CEO</h3>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="assets\ceo.jpg"
                alt="CEO of TikTrend"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-purple-400 shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h4 className="text-2xl font-semibold text-purple-900">Zahid Raheem Qureshi</h4>
              <p className="text-purple-600 mb-4">CEO & Founder</p>
              <p className="text-purple-700">
                Zahid, the CEO of TikTrendSolutions, leads a TikTok-focused e-commerce agency dedicated to helping brands scale their sales through TikTok Shop. The agency specializes in strategy, marketing, and optimization to drive viral growth and maximize conversions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;