
import React, { useState } from 'react';
import { AuthMode } from './types';
import AuthModal from './components/AuthModal';
import TrialChat from './components/TrialChat';

const App: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.NONE);

  const features = [
    {
      title: "Personalized Roadmap",
      description: "Our AI analyzes your strengths and weaknesses to build a custom learning path just for you.",
      image: "https://picsum.photos/seed/path/800/600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A2 2 0 013 15.488V5.512a2 2 0 011.553-1.956L9 1l5 2.5V11" />
        </svg>
      )
    },
    {
      title: "24/7 Availability",
      description: "Stuck on a problem at 2 AM? Lumina is always awake and ready to explain concepts clearly.",
      image: "https://picsum.photos/seed/time/800/600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Interactive Explanations",
      description: "Don't just read text. Get interactive diagrams, code snippets, and voice explanations.",
      image: "https://picsum.photos/seed/interact/800/600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen selection:bg-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Lumina AI</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
              <a href="#demo" className="hover:text-indigo-600 transition-colors">Try Demo</a>
              <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setAuthMode(AuthMode.LOGIN)}
                className="px-5 py-2.5 text-sm font-semibold text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all"
              >
                Log In
              </button>
              <button 
                onClick={() => setAuthMode(AuthMode.SIGNUP)}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md hover:shadow-indigo-200 transition-all transform active:scale-95"
              >
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold border border-indigo-100">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                v2.0 Beta: Advanced Reasoning Mode
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                Master any subject with your <span className="text-indigo-600">AI Tutor.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Lumina uses the world's most advanced AI models to provide personalized, 1-on-1 tutoring that actually works. Learn faster, remember longer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setAuthMode(AuthMode.SIGNUP)}
                  className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-xl hover:shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
                >
                  Start Learning Free
                </button>
                <a 
                  href="#demo"
                  className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  Watch Demo Video
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" />
                  ))}
                </div>
                <span>Trusted by 50,000+ students globally</span>
              </div>
            </div>

            <div className="relative animate-in slide-in-from-right duration-700">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/50 border-8 border-white/50 backdrop-blur">
                <img src="https://picsum.photos/seed/learn/1200/900" alt="Learning Experience" className="w-full" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-2xl shadow-lg flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Concept Mastered!</div>
                    <div className="text-sm text-gray-600">Quantum Physics: Introduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-gray-900">Engineered for your success</h2>
            <p className="text-lg text-gray-600">We've combined cognitive science with frontier AI to create a learning experience that feels like magic.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8">{feature.description}</p>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src={feature.image} alt={feature.title} className="w-full aspect-video object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 bg-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Try a quick session with Lumina right now
              </h2>
              <p className="text-lg text-gray-600">
                No credit card required. Experience the future of tutoring by asking any question. Lumina can help with homework, test prep, or just exploring new interests.
              </p>
              <ul className="space-y-4">
                {[
                  "Contextual learning that adapts to you",
                  "Multi-modal: Text, image, and voice support",
                  "Support for 50+ languages"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-gray-700">
                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <TrialChat />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-2xl font-bold">Lumina AI</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Empowering the next generation of learners with personalized AI guidance. Available on Web, iOS, and Android.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Curriculum</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Lumina AI Learning Systems. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        mode={authMode} 
        onClose={() => setAuthMode(AuthMode.NONE)}
        onSwitch={(mode) => setAuthMode(mode)}
      />
    </div>
  );
};

export default App;
