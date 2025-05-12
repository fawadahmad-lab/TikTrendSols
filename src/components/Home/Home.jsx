import { motion } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const Home = () => {
  const [showStories, setShowStories] = useState(false);

  // Sample success stories data
  const successStories = [
    {
      id: 1,
      name: "EcoFashion Co.",
      story: "Within 3 months of working with TikTrendSolutions, we saw a 4x increase in sales and became a top-rated brand in our category on TikTok Shop."
    },
    {
      id: 2,
      name: "Glow Beauty",
      story: "Their viral product placement strategy helped us sell out of our best-selling serum 3 times in one month. ROAS increased from 2.5 to 4.8!"
    },
    {
      id: 3,
      name: "HomeTech Essentials",
      story: "From zero to $250k/month in TikTok Shop sales. Their performance marketing team is simply unmatched in the industry."
    }
  ];
  return (
    <div className="text-gray-800 font-medium">

      {/* Hero Section - Updated to match Zita style */}
      <section className="relative pt-24 md:pt-0 min-h-[90vh] md:min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Transform Your <span className="text-purple-600">TikTok Shop</span> Performance
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We help US brands dominate TikTok Shop with strategic management, viral marketing, and data-driven optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition flex items-center gap-2"
                onClick={() => window.open('https://wa.me/923465230377', '_blank')}
              >
                Get Started <FiArrowRight />
              </motion.button>
              <button 
                onClick={() => setShowStories(true)}
                className="px-8 py-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition"
              >
                See Case Studies
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="TikTok Shop Success"
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
                <span className="font-bold text-xl">500+</span>
                <p className="text-sm">Brands Helped</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section - Updated */}
      <section className="py-20 px-6 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Scale Your TikTok Shop?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve explosive growth on TikTok Shop.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-medium shadow hover:bg-gray-100 transition flex items-center gap-2 mx-auto"
            onClick={() => window.open('https://wa.me/923465230377', '_blank')}
          >
            Contact Our Team <FiArrowRight />
          </motion.button>
        </div>
      </section>

      {/* Success Stories Modal - Updated */}
      {showStories && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl my-8"
          >
            <button 
              onClick={() => setShowStories(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2"
            >
              <FiX size={24} />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Success Stories</h3>
            
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pb-4">
              {successStories.map((story) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <h4 className="font-bold text-purple-600 text-lg mb-2">{story.name}</h4>
                  <p className="text-gray-700">{story.story}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center sticky bottom-0 bg-white pt-4 pb-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto"
                onClick={() => window.open('https://wa.me/923465230377', '_blank')}
              >
                Start Your Success Story <FiArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;