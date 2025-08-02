import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-nav border-t border-glass py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-accent-teal" />
              <span className="text-xl font-bold text-white">NexusCore AI</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Empowering small businesses with intelligent AI chatbots and automation 
              to save time and enhance customer service.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="/solutions#chatbots" className="text-white/70 hover:text-accent-teal transition-colors text-sm">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="/solutions#automation" className="text-white/70 hover:text-accent-teal transition-colors text-sm">
                  Automation
                </a>
              </li>
              <li>
                <a href="/solutions#insights" className="text-white/70 hover:text-accent-teal transition-colors text-sm">
                  Customer Service
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/70 hover:text-accent-teal transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-accent-teal transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-accent-teal transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-glass mt-8 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © 2025 NexusCore AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;