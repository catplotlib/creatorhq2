import React from "react";

const SignIn = () => {
  return (
    <div className="container mt-24 mx-auto px-8 md:px-96">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p class="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            className="w-1/2 text-center py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold my-1 px-4 py-2 rounded"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
