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
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div
              className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
            >
              <img
                className="absolute inset-0 object-cover w-full h-full"
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
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              href="/get-started"
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

<section className="text-white bg-blue-900">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Learn More</h2>

      <p className="mt-4 text-gray-300">
        Checkout Our Free Learning Resources
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-blue-200/10 hover:border-blue-100/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>

      <a
        class="block p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow-pink-500/10 hover:border-pink-500/10"
        href="/services/digital-campaigns"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 h-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h3 class="mt-4 text-xl font-bold text-white">Digital campaigns</h3>

        <p class="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
          possimus adipisci distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a>
    </div>

    <div class="mt-12 text-center">
      <a
        class="inline-flex items-center px-8 py-3 mt-8 text-white bg-pink-600 border border-pink-600 rounded hover:bg-transparent active:text-pink-500 focus:outline-none focus:ring"
        href="/get-started"
      >
        <span class="text-sm font-medium"> Get Started </span>

        <svg
          class="w-5 h-5 ml-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </div>
  </div>
</section>


    </div>
  );
}

export default LandingPage;
