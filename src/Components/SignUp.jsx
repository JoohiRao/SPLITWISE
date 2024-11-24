import React from 'react'

function SignUp() {
  return (
    <body class="bg-gray-900 flex items-center justify-center min-h-screen p-4">
      <div class="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section - Hidden on mobile, shown on medium screens and up */}
        <div class="hidden md:flex md:w-1/2 bg-black flex-col items-center justify-center p-6 md:p-8 relative">
          <div class="absolute top-0 left-0 w-full h-full bg-opacity-20 bg-black pointer-events-none animate-pulse"></div>
          <img
            src="https://media.giphy.com/media/kWLigFfTNb4AIHAghd/giphy.gif"
            alt="Money Transfer Animation"
            class="w-full max-w-[300px] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h2 class="mt-6 text-xl md:text-2xl text-white font-semibold text-center">Split Expenses Easily!</h2>
          <p class="mt-2 text-white text-opacity-75 text-sm md:text-base text-center">Track, split, and settle up with friends 💰</p>
        </div>

        {/* Right Section */}
        <div class="w-full md:w-1/2 p-6 md:p-8">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-700 text-center">Sign Up</h2>
          <form action="#" class="mt-4 md:mt-6 space-y-4">
            <div>
              <label class="block text-gray-600 font-semibold text-sm md:text-base">Name</label>
              <input
                type="text"
                class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label class="block text-gray-600 font-semibold text-sm md:text-base">Email</label>
              <input
                type="email"
                class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label class="block text-gray-600 font-semibold text-sm md:text-base">Password</label>
              <input
                type="password"
                class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                placeholder="Your Password"
              />
            </div>
            <div>
              <label class="block text-gray-600 font-semibold text-sm md:text-base">Phone Number</label>
              <input
                type="tel"
                class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                placeholder="Your Phone Number"
              />
            </div>
            <button
              type="submit"
              class="w-full bg-cyan-900 text-white font-semibold p-2 rounded-lg hover:bg-black transition text-sm md:text-base"
            >
              Sign Up
            </button>
          </form>
          <p class="mt-4 text-gray-600 text-center text-sm md:text-base">
            Already have an account? <a href="#" class="text-blue-500 hover:underline">Log In</a>
          </p>
        </div>
      </div>
    </body>
  )
}

export default SignUp
