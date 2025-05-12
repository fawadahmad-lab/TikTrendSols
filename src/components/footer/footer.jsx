import { Link } from 'react-router-dom';
import { FiLinkedin, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">TikTrendSolutions</h3>
            <p className="text-purple-200 mb-4">
              Your premier TikTok marketing partner helping brands achieve explosive growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/zahid-raheem-qureshi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              >
                <FiLinkedin className="text-white" />
              </a>
              <a
                href="https://www.facebook.com/share/18f321byX2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors"
              >
                <FiFacebook className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/topser' },
                { name: 'Contact us ', path: '/supcont' },
                { name: 'About Us', path: '/about' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'TikTok Ads',
                'Influencer Marketing',
                'Content Creation',
                'TikTok Shop Setup'
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={`/topser#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-purple-200">
              <p className="mb-2">Islamabad</p>
              <p className="mb-2">Pakistan</p>
              <p className="mb-2">infotiktrendsolution@gmail.com</p>
              <p>+923465230377</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-purple-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} TikTrendSolutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-purple-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-purple-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-purple-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;