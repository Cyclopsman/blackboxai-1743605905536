import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Green Energy Solutions</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Powering a sustainable future with innovative renewable energy solutions for homes and businesses
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/services" 
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Explore Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-500 mb-4">
                <i className="fas fa-leaf text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Solutions</h3>
              <p className="text-gray-600">
                Reduce your carbon footprint with our eco-friendly energy systems
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-500 mb-4">
                <i className="fas fa-dollar-sign text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Lower your energy bills with our efficient renewable solutions
              </p>
            </div>
            <div className="text-center">
              <div className="text-blue-500 mb-4">
                <i className="fas fa-shield-alt text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Technology</h3>
              <p className="text-gray-600">
                Industry-leading equipment with comprehensive warranties
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-900">
            Green Energy
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Green Energy Solutions</h3>
            <p className="text-gray-400">
              Leading provider of renewable energy solutions since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="text-gray-400 space-y-2">
              <li>123 Green Energy Way</li>
              <li>San Francisco, CA 94107</li>
              <li>info@greenenergysolutions.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Green Energy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
