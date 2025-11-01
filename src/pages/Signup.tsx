import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Signup logic will be added here
    console.log('Signup attempt:', { name, email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
          {/* Back to Home Link */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-600 text-center mb-12">
            Create Account
          </h1>

          {/* Signup Form */}
          <form onSubmit={handleSignup} className="space-y-8">
            {/* Name Input */}
            <div className="space-y-3">
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="space-y-3">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="space-y-3">
              <label
                htmlFor="password"
                className="block text-lg font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full h-16 bg-blue-600 text-white text-xl font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-105 transition-all duration-300 mt-8"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
