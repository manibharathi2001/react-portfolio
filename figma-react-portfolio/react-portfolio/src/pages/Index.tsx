
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Greeting */}
              <div className="inline-block">
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg">
                  Hello!
                </span>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Anish</span>
                  <span className="inline-block ml-2">👋</span>
                </h1>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  UI/UX Designer, Front-End Developer & Thinker.
                  <br />
                  Based in India.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                >
                  Download CV
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 px-8 py-3 rounded-lg font-medium text-lg transition-all duration-200"
                >
                  Get in Touch!
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: '#', label: 'Email' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 dark:hover:bg-yellow-400 hover:text-black transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Image - Clean without overlay */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-900 shadow-2xl mx-auto">
                  <img
                    src="/lovable-uploads/73393723-45fd-480b-8fdb-3968e845d1a1.png"
                    alt="Anish Kumar Sinha"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
