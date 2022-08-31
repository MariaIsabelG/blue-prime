import React from 'react';


function AboutPage() {
  
  
  return (
  
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24 text-center ">
      <h2 className="text-2xl text-white font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl xl:mx-36">
        Our Process
      </h2>

      <div className="lg:py-0 bg-[#d6e2ed] border rounded-b-xl mb-10 xl:mx-36">
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



        <h2 className="text-2xl text-white font-bold sm:text-1xl p-6 bg-blue-600 border rounded-t-xl xl:mx-36">
          Why work with us?
        </h2>
        <div className="lg:py-0 bg-[#d6e2ed] border rounded-b-xl xl:mx-36 mb-10">
        <article className="space-y-4 text-black mb-5 px-12">
          <p className="font-bold mt-5 lg:mt-5">Who is BlueVest Pro?</p>
          <p className="font-bold">What sets BlueVest Pro apart?</p>
          <button type="button" className="border-2 rounded-xl bg-blue-600 text-white hover:shadow-lg w-32 h-12">Find my Pro!</button>
        </article>
        </div>
  </div>

  );
}

export default AboutPage;
