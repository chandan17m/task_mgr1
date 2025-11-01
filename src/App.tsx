function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-300 to-white flex items-center justify-center px-4 py-8">
      <div className="text-center max-w-4xl w-full space-y-16">
        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-lg">
          Welcome to My Task Manager
        </h1>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center px-4">
          {/* Login Button */}
          <button className="w-full sm:w-64 h-20 bg-white text-blue-600 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50">
            Login
          </button>

          {/* Signup Button */}
          <button className="w-full sm:w-64 h-20 bg-white text-blue-600 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50">
            Signup
          </button>

          {/* Go to Dashboard Button */}
          <button className="w-full sm:w-64 h-20 bg-white text-blue-600 text-xl font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50">
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
