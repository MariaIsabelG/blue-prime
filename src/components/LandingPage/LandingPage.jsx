import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div>

      {/* FIND A PRO SECTION */}
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full"
            >
              <img
                className="flex inset-0 object-cover md:w-1/2"
                src="https://www.hyperui.dev/photos/man-1.jpeg"
                alt="Man using a computer"
              />
            </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">Find Your Finacial Professional</h2>

            <p className="mt-4 text-gray-600">
              A little bit about Blue Vest.
            </p>

            <p className="mt-4 text-gray-600">
              Answer a few short quick questions and get connected with us!
            </p>

            <a
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-blue-900 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              onClick={() => history.push('/findPro')}
            >
              <span className="text-sm font-medium"> Find Your Pro </span>

              <svg
                className="w-5 h-5 ml-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
</section>

{/* RESOURCES SECTION */}
<section className="text-white bg-blue-900">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Learn More</h2>

      <p className="mt-4 text-gray-300">
        Checkout Our Free Learning Resources
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">

    {/* CATEGORY 1*/}
      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10"
        onClick={() => history.push('/c1')}
      >
        <h3 className="m-4 text-xl font-bold text-white text-center">Category 1</h3>

      </div>

      {/* CATEGORY 2 */}
      <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10"
        onClick={() => history.push('/c2')}
      >
        <h3 className="m-4 text-xl font-bold text-white text-center">Category 2</h3>

      </div>

            {/* CATEGORY 3 */}
            <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10"
        onClick={() => history.push('/c3')}
      >
        <h3 className="m-4 text-xl font-bold text-white text-center">Category 3</h3>

      </div>

                  {/* CATEGORY 4 */}
                  <div
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10"
        onClick={() => history.push('/c4')}
      >
        <h3 className="m-4 text-xl font-bold text-white text-center">Category 4</h3>

      </div>

    </div>

    {/* <div className="mt-12 text-center">
      <a
        className="inline-flex items-center px-8 py-3 mt-8 text-black bg-white border border-gray-600 rounded hover:bg-transparent active:text-blue-500 focus:outline-none focus:ring"
        href="/get-started"
      >
        <span className="text-sm font-medium"> Get Started </span>

        <svg
          className="w-5 h-5 ml-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div> */}
  </div>
</section>


    </div>
  );
}

export default LandingPage;
