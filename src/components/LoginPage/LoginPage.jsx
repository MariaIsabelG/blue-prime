import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

// LEFT OFF ---- Add padding for both lists
// Complete Register From and link for popup log in

function LoginPage() {
  const history = useHistory();

  return (
    <section class="h-full">
      <div className="md:pt-32 md:pb-32 sm:pt-10 sm:pb-10 md:pt-10 md:pb-10 lg:pt-8 lg:pb-2 pb-10 pt-10 bg-orange-200 mb-2">
        <h3 className="text-xl text-center text-black mb-4">Why work with us? </h3>
          <li className="text-center text-black mb-1">We're your strategic growth partner</li>
          <li className="text-center text-black mb-1">Financial professionals spend a bulk of their time prospecting.</li>
          <li className="text-center text-black mb-1">By working with us, you'll spend less time marketing yourself, and more time advising your clients.</li>
        <h3 className="text-xl text-center text-black mt-6">BlueVest has helped some of the biggest names in financial services grow their brand and practice.</h3>
        <div className="flex items-center justify-center">
          <img className="w-3/12 sm:w-3/12 md:w-2/12 lg:w-2/12 xl:w-2/12 mr-6" src="images/State-Farm-Logo.png"/>
          <img className="w-3/12 sm:w-3/12 md:w-2/12 lg:w-2/12 xl:w-2/12 mr-6" src="images/farmers-logo2.png"/>
          <img className="w-3/12  sm:w-3/12 md:w-3/12 lg:w-3/12 xl:w-3/12" src="images/NW-Mutual.png"/>
        </div>
      </div>
      <div className="md:pt-32 md:pb-32 sm:pt-10 sm:pb-10 md:pt-10 md:pb-10 lg:pt-8 lg:pb-2 pb-10 pt-10 bg-white mb-8">
        <h3 className="text-xl text-center text-black mb-4">What you can Expect when you Sign Up:</h3>
          <li className="text-center text-black mb-1">BlueVest's team is your partner to grow your business. Upon signing up for BlueVest Pro, you'll be introduced to a personal Account Manager that will help you establish a game plan, provide strategic advice, maximize ROI, and develop a custom roadmap based on your specific business needs and budget.</li>
          <li className="text-center text-black mb-1">We're committed to providing you with high-quality consumer prospects, account flexibility and excellent customer service.</li>
      </div>
      <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div class="xl:ml-20 xl:w-3/12 lg:w-5/12 md:w-8/12 md:mb-0">
          <LoginForm/>
        </div>
        <div class="xl:ml-20 xl:w-3/12 lg:w-5/12 md:w-8/12 md:mb-0">
          <RegisterForm/>
        </div>
      </div>
</section>

  );
}

export default LoginPage;
