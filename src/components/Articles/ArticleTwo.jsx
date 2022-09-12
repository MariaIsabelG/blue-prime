import { useHistory } from "react-router-dom";


function ArticleTwo() {

    const history = useHistory();

    return (
        <div>
            <div className="fixed lg:ml-10 ml-3">
                <button
                    onClick={() => history.push('/resources')}
                    className="text-md lg:text-4xl hover:bg-gray-50 hover:rounded-sm">🔙 </button>
            </div>
            <div className="mt-10  lg:mt-20 lg:mr-40 lg:ml-40">
                <div className=" ">
                    <h1
                        className=" text-2xl lg:text-4xl text-center font-bold capitalize border-b-2 pb-2">Auto Insurance</h1>
                </div>

                <div className="text-sm lg:text-md ml-10 mr-10 mt-10 lg:mt-20">
                    <section className=" flex flex-col">
                        <article>
                            <p className="ml-5 leading-relaxed">
                                You can get car insurance directly from an insurance company, by talking to an
                                agent, or through an independent online insurance marketplace like BlueVest.
                                No matter how you choose to get car insurance, start by gathering information
                                you’ll need, including the social security numbers of all the drivers in your
                                household, your driver’s license number, and details about your car. </p>
                            <br />
                            
                            <div className="m-5 flex flex-col items-center">
                                <p className="ml-5 font-bold">How to get car insurance in 5 easy steps:</p>
                                <ol className="list-decimal leading-relaxed ml-20 mt-3 ">
                                    <li>Figure out how much auto coverage you’ll need.</li>
                                    <li>Fill out an insurance application</li>
                                    <li>Compare different auto insurance quotes</li>
                                    <li>Pick an insurance company and get insured</li>
                                    <li>Cancel your old car insurance policy</li>
                                </ol>
                            </div>

                            <br />

                            <p className="ml-5 leading-relaxed">While there are a few ways to get car insurance, the best and most efficient way to
                                get covered in 2022 is by comparing quotes from multiple companies online. That
                                way you can quickly find the most affordable rates in your area for the coverage
                                you need
                            </p>

                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="font-bold">
                                1. Figure out how much auto coverage you’ll need:
                            </h2>
                            <br />
                            <p className="ml-5 leading-relaxed">
                                Figuring out how much coverage you need is one of the most important parts of
                                buying auto insurance.
                                <br />
                                Generally, it's a good idea for drivers to get as much liability coverage as they can
                                afford. Adding comprehensive and collision coverage is a good idea, but the amount
                                of insurance you should get depends on your car's value, too. </p>
                            <br />
                            <p className="underline ml-5 lg:text-lg text-center m-5">A typical full-coverage policy includes:</p>

                            <div className=" mt-5 leading-relaxed ">
                                <div className=" flex flex-col lg:flex-row  lg:gap-6 border-b-2 border-b-gray-100 pb-3">
                                    <div className="w-full lg:w-64 lg:h-32 ">
                                        <img src="https://cdn.pixabay.com/photo/2016/08/25/20/14/crash-test-1620591_1280.jpg" className="w-full h-full" />
                                    </div>
                                    <div className="lg:w-3/5">
                                        <p >
                                            <span className="font-bold">Liability coverage:</span> Covers the costs if you cause an accident,
                                            including when you damage someone else’s property with your
                                            car. Liability insurance is required in most states, and it’s divided
                                            into two parts: Bodily injury liability (BIL) and property damage
                                            liability (PDL)
                                        </p>
                                    </div>
                                </div>


                                <div className=" flex flex-col lg:flex-row lg:justify-end lg:gap-6 lg:mt-5 border-b-2 border-b-gray-100 pb-3">
                                    <div className="lg:w-3/5 ">
                                        <p>
                                            <span className="font-bold">Personal injury protection:</span> Covers medical and rehabilitation
                                            expenses if you or your passengers are injured in a car accident.
                                            Also covers other related expenses, like lost wages
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-64 lg:h-32 ">
                                        <img className="w-full h-full" src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                                    </div>

                                </div>

                                <div className=" flex flex-col lg:flex-row lg:gap-6 lg:mt-5 border-b-2 border-b-gray-100 pb-3">
                                    <div className="w-full lg:w-64 lg:h-32 ">
                                        <img className="w-full h-full" src="https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                                    </div>
                                    <div className="lg:w-3/5">
                                        <p>
                                            <span className="font-bold">Uninsured/underinsured motorist coverage:</span> Covers the costs if
                                            you’re in an accident caused by a driver who either doesn’t have
                                            insurance or whose insurance can’t pay for the full extent of the
                                            damage
                                        </p>
                                    </div>
                                </div>

                                <div className=" flex flex-col lg:flex-row lg:justify-end lg:gap-6 lg:mt-5 border-b-2 border-b-gray-100 pb-3">
                                    <div className="lg:w-3/5">
                                        <p>
                                            <span className="font-bold">Collision coverage:</span> Covers damage to your own vehicle after an
                                            accident, regardless of who was at fault
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-64 lg:h-32 ">
                                        <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2018/07/30/10/08/installment-3572185_1280.jpg" />
                                    </div>
                                </div>

                                <div className=" flex flex-col lg:flex-row lg:gap-6 lg:mt-5 border-b-2 border-b-gray-100 pb-3">
                                    <div className="w-full lg:w-64 lg:h-32 ">
                                        <img className="w-full h-full" src="https://cdn.pixabay.com/photo/2019/03/10/07/06/car-4045564_1280.jpg" />
                                    </div>
                                    <div className="lg:w-3/5">
                                        <p>
                                            <span className="font-bold">Comprehensive coverage:</span> Covers any damage to your car that
                                            can happen when it isn’t being driven, including damage from
                                            extreme weather, falling objects, flood, fire, vandalism, and theft
                                        </p>
                                    </div>
                                </div>

                                <div className=" flex flex-col lg: justify-end lg:flex-row lg:gap-6 lg:mt-5 border-b-2 border-b-gray-100 pb-3">
                                    <div className="lg:w-3/5">
                                        <p>
                                            <span className="font-bold">Gap insurance:</span> If your car is totaled, this pays out the difference
                                            between the car’s actual cash value (ACV), which includes
                                            depreciation, and the amount you still owe on a car loan or lease
                                            so you aren’t stuck making payments on a car you no longer
                                            have
                                        </p>
                                    </div>
                                    <div className="w-full lg:w-64 lg:h-32 ">
                                        <img className="w-full h-full" src="https://img.freepik.com/free-photo/car-model-calculator-coins-white-table_1387-584.jpg?w=2000&t=st=1662754365~exp=1662754965~hmac=87c0aa286ace50e48991dc092c91a037defc12d1a74c3359f866a81276ef4667" alt="" />
                                    </div>
                                </div>

                            </div>
                            <br />
                            <p className="ml-5 leading-relaxed">Most insurers offer additional coverage options, like roadside assistance or new car
                                replacement coverage that you can add to your policy (just remember that more
                                coverage means higher rates).
                            </p>
                            <p className="ml-5 leading-relaxed">
                                Each state has minimum car insurance coverage requirements. Your state’s
                                minimums are a starting point for determining coverage, but they’re too low to
                                sufficiently cover you in the event of a major accident.</p>

                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="font-bold leading-relaxed">2. Fill out an insurance application:</h2>
                            <br />
                            <p className="ml-5 leading-relaxed">
                                Whether you’re buying car insurance for the first or renewing your coverage with
                                the same insurer, you’ll need the following information on hand:
                            </p>
                            <br />
                            <ul className="list-disc ml-20 leading-relaxed">
                                <li>Names, birthdays and driver’s license numbers for all drivers in
                                    the household</li>
                                <li>Social Security numbers for all drivers in the household</li>
                                <li>VINs (Vehicle Information Numbers) or make and model years for all vehicles</li>
                                <li>An address for the insured (where you live and where the car is
                                    garaged, which is usually the same place)</li>
                                <li>Your declarations page from your most recent prior car insurance
                                    policy, if you have it</li>
                            </ul>
                            <br />
                            <p className="ml-5 leading-relaxed">As you go through the application process, your answers to certain questions may
                                earn you discounts on your coverage, like whether you have any accidents or
                                violations on your record, whether you’re a full time student, and if your car is
                                equipped with features like an anti-theft device or GPS tracker.
                            </p>
                            <div className="flex flex-row lg:justify-evenly gap-2 my-5">
                                <img className="lg:w-1/4 lg:h-32 h-24 w-1/3" src="https://img.freepik.com/free-vector/gps-navigation-illustration_24877-57121.jpg?w=1380&t=st=1662755903~exp=1662756503~hmac=e9a17fc889f4cf4af206baf6384cdf1b63a0e15bcacce8c7e70c145fe6705c8e" />
                                <img className="lg:w-1/4 lg:h-32 h-24 w-1/3" src="https://img.freepik.com/free-photo/golden-percentage-sign-symbol-yellow-discount-sale-promotion-concept-by-3d-render_616485-12.jpg?w=2000&t=st=1662755312~exp=1662755912~hmac=1241c1ace5fe31afa03b822e58f2d1ed55538fa9049fc33a8fc00b10952bcdfe" />
                                <img className="lg:w-1/4 lg:h-32 h-24 w-1/3" src="https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5920.jpg?w=2000&t=st=1662755375~exp=1662755975~hmac=45070fbf5645d452ffa67bd482cc85f05c37e3f97657bd1958da372372744964" />
                            </div>
                            <p className="ml-5 leading-relaxed">
                                You’ll also set your coverage amounts — called limits — when you apply for
                                insurance. It’s generally a good idea to have higher coverage limits, even though
                                adding more coverage will affect how much you pay for car insurance. You’ll also
                                have to choose deductible amounts for your comprehensive and collision coverage.
                                When you get a quote online or use a car insurance calculator, some optional types
                                of coverage may automatically be included that you don’t actually want or need.
                                For example, if you're a member of AAA and you already have roadside assistance,
                                you don't need to pay extra to add it to your car insurance policy.
                                As you shop for insurance, be sure to look carefully at whether there are any add-
                                ons you can remove.
                            </p>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h3 className="font-bold">3. Compare different auto insurance quotes:</h3>
                            <br />
                            <p className="ml-5 leading-relaxed">
                                It's a good idea to get quotes from a few different insurance companies before you
                                choose a policy. You should also have an idea of how much you can afford to pay for
                                coverage before you start shopping.
                                <br />
                                <br />
                                You should look for the insurance company that offers you the most protection and
                                the best customer service at the lowest rates.
                            </p>

                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h3 className="font-bold">4. Choose an insurance company and get insured</h3>
                            <br />
                            <p className="ml-5 leading-relaxed">

                                Once you’ve compared your quotes and picked an insurance company that you feel good about, it’s time to get covered.
                                When you buy a car insurance policy, you’ll set a start date for when your policy will
                                start, and you’ll pay your first premium.
                                <br />
                                <br />
                                You’ll typically receive proof of coverage and some sort of welcome package from
                                your insurer, with information about how to access your account and where to see
                                your ID cards or declarations page.
                            </p>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h3 className="font-bold">5. Cancel your old insurance policy:</h3>
                            <br />
                            <p className="ml-5 leading-relaxed">

                                If you’ve been shopping for car insurance to replace a current policy, wait until after
                                your new coverage is in place before you cancel your old policy. You want to make
                                sure you don’t leave any gaps in your coverage.
                                <img className="w-full lg:h-48 my-5" src="https://cdn.pixabay.com/photo/2016/09/15/18/35/update-1672385_1280.jpg"/>
                                To do this, set the cancellation date of your old policy and the effective date of your
                                new policy on the same day. Insurance policies begin and end at 12:01 AM on a
                                given date, so you don’t have to worry about having a full day of overlapping
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )


}

export default ArticleTwo;