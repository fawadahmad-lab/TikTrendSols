import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  FiTrendingUp,
  FiUsers,
  FiShoppingCart,
  FiVideo,
  FiDollarSign,
  FiMail,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiBarChart2,
  FiLayers,
  FiTarget,
  FiAward,
  FiShield
} from 'react-icons/fi';

const Topser = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const serviceCategories = [
    {
      title: "TikTokShop Services",
      icon: <FiShoppingCart className="text-2xl" />,
      services: [
        "Complete Account Setup & Management",
        "SEO-Optimized Product Listings",
        "Storefront Design & Optimization",
        "Conversion Rate Optimization"
      ],
      description: "Full-service TikTok Shop solutions from setup to daily management",
      benefits: [
        "300% average store traffic increase",
        "1-3 day store setup",
        "Mobile-first shopping experience"
      ]
    },
    {
      title: "Marketing Strategy",
      icon: <FiTrendingUp className="text-2xl" />,
      services: [
        "Trend & Competitor Analysis",
        "Brand Positioning Strategy",
        "Content Strategy Development",
        "Audience Growth Planning"
      ],
      description: "Data-driven strategies for sustainable growth",
      benefits: [
        "Customized roadmap",
        "Quarterly strategy updates",
        "Performance benchmarks"
      ]
    },
    
  ];

  const processSteps = [
    {
      step: "1",
      icon: <FiLayers className="text-2xl" />,
      title: "Discovery & Audit",
      description: "Comprehensive analysis of your current TikTok presence"
    },
    {
      step: "2",
      icon: <FiTarget className="text-2xl" />,
      title: "Strategy Development",
      description: "Customized 90-day growth plan"
    },
    {
      step: "3",
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Implementation",
      description: "Daily execution with weekly optimizations"
    },
    {
      step: "4",
      icon: <FiAward className="text-2xl" />,
      title: "Scale & Expand",
      description: "Expand successful initiatives"
    }
  ];

  const caseStudies = [
    {
      brand: "EcoGlow Cosmetics",
      result: "320% ROAS in 90 days",
      highlight: "$0 → $50k/month in TikTok Shop sales",
      services: ["TikTok Shop Setup", "Content Strategy"]
    },
    {
      brand: "HomeTech Essentials",
      result: "5.8x ROAS",
      highlight: "Sold out 3 products in first month",
      services: ["Influencer Marketing", "Ad Campaigns"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Our <span className="text-purple-600">End-to-End</span> TikTok Solutions
          </h2>
          <p className="text-xl text-purple-700 max-w-3xl mx-auto">
            Comprehensive services to launch, grow, and scale your brand on TikTok
          </p>
        </motion.div>
        {/* Service Categories - Enhanced */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-purple-800 mb-8 text-center">
            Core Service Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-purple-100 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-purple-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-purple-700 mb-4">{category.description}</p>

                  <div className="mb-4">
                    <h4 className="font-medium text-purple-800 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FiCheck className="text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-purple-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
                    className="flex items-center text-purple-600 hover:text-purple-800 mt-4"
                  >
                    View services <FiChevronDown className="ml-1" />
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedCategory === index ? 'auto' : 0,
                      opacity: expandedCategory === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-purple-100">
                      <h4 className="font-medium text-purple-800 mb-3">Service Includes:</h4>
                      <ul className="space-y-3">
                        {category.services.map((service, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                            <p className="text-purple-700">{service}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* New Brand & Account Solutions Service Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: serviceCategories.length * 0.1,
                  duration: 0.5
                }
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-purple-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    <FiShield className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-900">
                    Brand & Account Solutions
                  </h3>
                </div>
                <p className="text-purple-700 mb-4">
                  Comprehensive brand management and account recovery services to protect and grow your ecommerce business.
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-purple-800 mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <FiCheck className="text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-700">Expert account reinstatement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheck className="text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-700">Strategic brand positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheck className="text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-700">Data-driven marketing plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FiCheck className="text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-700">Ongoing brand protection</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setExpandedCategory(expandedCategory === serviceCategories.length ? null : serviceCategories.length)}
                  className="flex items-center text-purple-600 hover:text-purple-800 mt-4"
                >
                  View services <FiChevronDown className="ml-1" />
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedCategory === serviceCategories.length ? 'auto' : 0,
                    opacity: expandedCategory === serviceCategories.length ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-purple-100">
                    <h4 className="font-medium text-purple-800 mb-3">Service Includes:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <p className="text-purple-700">Account reinstatement services (Amazon/Walmart/eBay)</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <p className="text-purple-700">Brand relaunch strategy development</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <p className="text-purple-700">Comprehensive brand marketing solutions</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <p className="text-purple-700">Brand consulting & positioning strategy</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <p className="text-purple-700">Trademark and IP protection guidance</p>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0"></div>
                        <p className="text-purple-700">Competitor analysis and market research</p>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-purple-800 mb-12 text-center">
            Our Proven 4-Phase Process
          </h3>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 transform -translate-x-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-md border border-purple-100 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                        {step.icon}
                      </div>
                      <div className="text-purple-900 font-bold text-lg">{step.title}</div>
                    </div>
                    <p className="text-purple-700">{step.description}</p>
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-20">
          <h3 className="text-2xl font-semibold text-purple-800 mb-12 text-center">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-purple-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-purple-900">{study.brand}</h4>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {study.result}
                  </span>
                </div>
                <p className="text-purple-700 font-medium mb-4">{study.highlight}</p>
                <div className="flex flex-wrap gap-2">
                  {study.services.map((service, i) => (
                    <span key={i} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Topser;