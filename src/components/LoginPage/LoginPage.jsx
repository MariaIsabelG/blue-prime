import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function LoginPage() {
	const history = useHistory();  

  return (
  
    <section class="h-full">
      <div className="px-20 sm:px-20 sm:pt-10 sm:pb-10 md:pt-10 md:pb-10 lg:pt-8 lg:pb-2 pb-10 pt-10 bg-orange-200 mb-2">
        <h3 className="text-xl text-center text-black mb-4">Why work with us? </h3>
          <li className="text-center text-black mb-1">We're your strategic growth partner</li>
          <li className="text-center text-black mb-1">Financial professionals spend a bulk of their time prospecting.</li>
          <li className="text-center text-black mb-1">By working with us, you'll spend less time marketing yourself, and more time advising your clients.</li>
        <h3 className="text-xl text-center text-black mt-6">BlueVest has helped some of the biggest names in financial services grow their brand and practice.</h3>
        <div className="flex items-center justify-center">
          <img className="w-5/12 sm:w-3/12 md:w-2/12 lg:w-2/12 xl:w-2/12 mr-6" src="images/State-Farm-Logo.png"/>
          <img className="w-5/12 sm:w-3/12 md:w-2/12 lg:w-2/12 xl:w-2/12 mr-6" src="images/farmers-logo2.png"/>
          <img className="w-6/12  sm:w-3/12 md:w-3/12 lg:w-3/12 xl:w-3/12" src="images/NW-Mutual.png"/>
        </div>
      </div>
      <div className="px-20 md:pt-32 sm:pt-10 sm:pb-10 md:pt-10 md:pb-10 lg:pt-8 lg:pb-8 pb-2 pt-10 bg-white ">
        <h3 className="text-xl text-center text-black mb-4">What you can Expect when you Sign Up:</h3>
          <li className="text-center text-black mb-1">BlueVest's team is your partner to grow your business. Upon signing up for BlueVest Pro, you'll be introduced to a personal Account Manager that will help you establish a game plan, provide strategic advice, maximize ROI, and develop a custom roadmap based on your specific business needs and budget.</li>
          <li className="text-center text-black mb-1">We're committed to providing you with high-quality consumer prospects, account flexibility and excellent customer service.</li>
      </div>
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-4/12 lg:w-5/12 md:w-5/12 sm:w-5/12 w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>
      <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
          <div className="flex items-center justify-center">
            <a href="https://calendly.com/mitchell-muller/30min?month=2022-09">
              <button className="text-2xl text-white text-center font-bold sm:text-1xl p-6 bg-blue-600 border rounded-xl">Schedule an Intro Meeting!</button>
            </a>
          </div>
          <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
            <p class="text-center font-semibold mx-4 mb-0">Or</p>
          </div>
            <LoginForm/>
      </div>
    </div>
  </div>

      

</section>

  );
}

export default LoginPage;
