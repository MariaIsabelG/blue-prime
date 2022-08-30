import React from 'react';

// LEFT OFF ------ Fix spacing for mobile view AND set width for desktop view

function AboutPage() {
  
  
  return (
  
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 text-center ">
      <h2 className="text-3xl text-white font-bold sm:text-4xl p-6 bg-blue-600 border rounded-t-xl xl:mx-36">
        Our Process
      </h2>

      <div className="lg:py-0 bg-[#d6e2ed] border rounded-b-xl mb-5 xl:mx-36">
        <article className="space-y-4 text-black mb-5 px-12">
          <h3 className="font-bold mt-5 lg:mt-5">
            Step 1. 
          </h3>
          <p>You complete our quick form and give us information about your current insurance plan</p>
          <h3 className="font-bold">
            Step 2. 
          </h3>
          <p>We use that infomation to match you with the financial pros that are right for you</p>
          <h3 className="font-bold">
            Step 3. 
          </h3>
          <p>Your agents will reach out to you within X business days with options to save you money and better your financial wellness</p>
        </article>
      </div>



        <h2 className="text-3xl text-white font-bold sm:text-4xl p-6 bg-blue-600 border rounded-t-xl xl:mx-36">
          Why work with us?
        </h2>
        <div className="lg:py-16 bg-[#d6e2ed] border rounded-b-xl xl:mx-36">
        <article className="space-y-4 text-black">
          <p>Who is BlueVest Pro?</p>
          <p>What sets BlueVest Pro apart?</p>
        </article>
        </div>
  </div>

  );
}

export default AboutPage;
