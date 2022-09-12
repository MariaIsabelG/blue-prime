import { useHistory } from "react-router-dom";


function ArticleOne() {

    const history = useHistory();

    return (

        <div>
            <div className="fixed lg:ml-10 ml-3">
                <button
                    onClick={() => history.push('/resources')}
                    className="text-md lg:text-4xl hover:bg-gray-50 hover:rounded-sm">🔙</button>
            </div>

            <div className="mt-10  lg:mt-20 lg:mr-40 lg:ml-40">
                <h1 className=" text-2xl lg:text-4xl text-center font-bold capitalize border-b-2 pb-2">How to shop homeowners insurance in 2022</h1>
                <div className="text-sm lg:text-md ml-10 mr-10 mt-10 lg:mt-20">
                    <section className=" flex flex-col">

                        <div className="flex flex-col items-center m-3">
                            <h3 className="font-bold mb-3">How to buy homeowners insurance in 5 easy steps:</h3>
                            <ol className="list-decimal leading-relaxed">
                                <li>Learn about how much Coverage you need</li>
                                <li>Get familiar with home insurance policy terms</li>
                                <li>Gather information about the home</li>
                                <li>Compare different home insurance quotes</li>
                                <li>Choose the policy that's right for you</li>
                            </ol>
                        </div>

                        <br />

                        <article >
                            <p className="indent-5 md:indent-10 font-medium"> The best way to shop for homeowners insurance is to compare quotes from at least three insurance
                                companies so that you're not missing out on better or more affordable coverage in your area. With
                                BlueVest Pro, you can compare and buy home insurance in a matter of minutes. Just answer a few brief
                                questions about your house, and we'll provide you with several policy options at a price point that suits
                                your needs.</p>

                        </article>
                    </section>
                    <br />
                    <section className="">
                        <article>

                            <p> <span className="font-bold">1. Learn about how much coverage you need.</span>
                                <br />
                                <br />
                                When you get home insurance quotes, the coverage amounts listed are often estimates — not an
                                exact calculation of how much coverage you’ll need. To make sure you’re being quoted for the
                                right amount of coverage, consider getting a more accurate estimate of the following:</p>
<br />

                            <ul className="list-disc ml-10">
                                <li className="mt-4">
                                    <span className="font-semibold">The replacement cost of your home:</span> The amount of insurance on your
                                    house should be equal to its replacement cost — the amount it would cost
                                    to rebuild the home from the ground up after a disaster. Insurers often
                                    provide their own replacement cost estimate using online estimation tools,
                                    but for a more precise calculation, consider hiring a professional appraiser.
                                </li>
                                <li className="mt-2">
                                    <span className="font-semibold">The total value of your personal belongings:</span> You’ll want
                                    enough personal property coverage to cover the value of all of your stuff,
                                    like appliances, furniture, and electronics.

                                </li>
                                <li className="mt-2 mb-4">
                                    <span className="font-semibold">The total value of all of your assets:</span> You should have enough personal
                                    liability coverage to cover your entire net worth in case you’re sued.

                                </li>
                            </ul>
                            <br />
                            Your homeowners insurance coverage needs will also depend on your home’s location and the
                            risks (wildfires, hurricanes, tornadoes) where you live. If you live in a high-risk coastal area or
                            region that experiences frequent wildfires, your coverage needs will be different than if you lived
                            somewhere with a more mild climate.
                            </div>
                        </article>
                    </section>
                    <br />
                    <section className="">
                        <article>

                            <p><span className="font-bold">2. Get familiar with home insurance policy terms:</span>
                                <br />
                                <br />
                                There are six types of coverages that are in every standard homeowners insurance policy.
                                Understanding how you’re protected by each of the coverage types in a standard policy will be
                                useful when comparing policies.</p>
                            <br />
                            <ul className="list-disc ml-10 columns-2">
                                <li><span className="font-bold">Dwelling:</span> Covers physical damage to the structure of your home and any

                                    attached structures, like a garage or porch</li>

                                <li className="mt-2"><span className="font-semibold">Other structures:</span> Covers physical damage to structures on your property
                                    that aren’t attached to the home itself, like a detached garage, guest house,
                                    or fencing around your property</li>
                                <li className="mt-2"><span className="font-semibold">Personal property:</span> Covers damage or theft of personal belongings that
                                    you own, including furniture, clothes, jewelry, and electronics</li>
                                <li className="mt-2"><span className="font-semibold">Additional living expenses (ALE):</span> If your home is severely damaged or
                                    destroyed by a covered loss, ALE can cover the cost of temporary lodging
                                    and relocation expenses while your house is being repaired or rebuilt</li>
                                <li className="mt-2"><span className="font-semibold">Personal liability:</span> Covers you and your assets from expensive lawsuits if
                                    you’re ever held liable for someone else’s injury or property damage
                                </li>

                                <li className="mt-4"><span className="font-semibold">Medical payments:</span> Covers guests’ medical expenses if they’re injured on
                                    your property</li>
                            </ul>

                            <br />
                            <p>You’ll also have to choose between three levels of coverage:</p>
                            <br />

                            <ul className="list-disc ml-10">
                                <li className="mt-4"><span className="font-semibold">Actual cash value:</span> The cheapest option, actual cash value reimburses you
                                    for the value of your property minus the cost of depreciation, or wear and
                                    tear. This leaves you paying more out of pocket when you file a claim.</li>
                                <li className="mt-2"><span className="font-semibold">Replacement cost value:</span>  Most insurers allow you to upgrade to
                                    replacement cost value coverage, which reimburses you for the value of
                                    your property at today’s prices. This provides larger reimbursements
                                    when you file a claim.</li>
                                <li className="mt-2"><span className="font-semibold">Extended replacement cost value:</span> Another optional upgrade, extended
                                    replacement cost value coverage reimburses you for the cost to rebuild
                                    your home — even if it’s more than your policy limit. This protects you
                                    from construction material and labor costs that tend to skyrocket after a
                                    natural disaster.</li>
                            </ul>

                        </article>
                    </section>
                    <br />
                    <section className="">
                        <article>

                            <p><span className="font-bold">3. Gather information about the home:</span>
                                <br /> <br />

                                To get an accurate quote estimate, you’ll need to give the insurer information about yourself and
                                the type of property you’re insuring.</p> <br />
                            <p>Here’s some of what you’ll need to provide when you shop homeowners insurance policies.</p>
                            <br />
                            <ul className="list-disc ml-10">
                                <li className="mt-4">Your home’s square footage and roof type (like hip or gable)</li>
                                <li className="mt-2">The heating type of your home’s appliances (gas or electric)</li>
                                <li className="mt-2">The renovation history of your home</li>
                                <li className="mt-2">Whether you have any pets, trampolines, or a pool</li>
                                <li className="mt-2">Whether it's your primary or second home</li>
                                <li className="mt-2">Whether you rent it out in the short or long term</li>
                            </ul>
                            <br />
                            <p>The more details you give about your home, the more accurate your quote will be. If you’re
                                simply swapping out policies, most of this information will be available on your old policy.
                                Otherwise, you can find your home’s structural details by searching for your property on your
                                county’s property appraiser website.</p>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>

                            <p><span className="font-bold">4. Compare different home insurance quotes:</span>
                                <br />
                                <br />

                                The easiest way to buy homeowners insurance is through a marketplace like BlueVest Pro,
                                where you can compare quotes across multiple companies in your area. Once you apply, a
                                licensed expert will reach out with policy recommendations that match your coverage needs and
                                budget. They’ll also nail down any home insurance discounts you qualify for.</p>
                            <br />
                            <p>We recommend paying close attention to quotes from any insurance companies you already have
                                a relationship with, as they often offer lower rates for existing customers. So if you already have
                                an auto or umbrella insurance policy with a specific carrier, you may get a bundling discount for
                                signing up for home insurance with that same insurer.</p>
                            <br />
                            <p>Apart from the policy itself, you’ll also want to look into the insurance company’s background.
                                Check to see if the company insuring your house is financially stable, read reviews, and check
                                ratings with third-party sites like AM Best, J.D. Power, and Consumer Reports.</p>

                        </article>

                    </section>
                    <br />
                    <section>
                        <article>

                            <p><span className="font-bold">5. Choose the policy that’s right for you.</span>
                                <br /><br />

                                Once you’ve compared quotes, it’s time to select a policy and customize it to suit your coverage
                                needs.</p>
                            <br />
                            <p>If you have a mortgage, ask your loan officer if the coverage in your policy meets the lender’s
                                insurance requirements. Homeowners insurance doesn’t cover water damage caused by flooding,
                                for example, so you may need to get separate flood insurance if you live in a high-risk flood
                                zone.</p>
                            <br />
                            <p>There are also several optional home insurance endorsements that can be added to your policy

                                for an additional cost.
                                <br />
                                <br />
                            Some of the most common endorsements are:</p>
                            <br />
                            <ul className="list-disc ml-10 columns-2">
                                <li>Water backup coverage</li>
                                <li>Appliance breakdown coverage</li>
                                <li>Service line coverage</li>
                                <li>Scheduled personal property coverage</li>
                                <li>Extended replacement cost</li>
                                <li>Guaranteed replacement cost</li>
                                <li>Flood coverage</li>
                                <li>Earthquake coverage</li>

                            </ul>

                        </article>

                    </section>
                </div>
            </div>
        </div>
    )


}

export default ArticleOne;