import { useHistory } from "react-router-dom";


function ArticleOne() {

    const history = useHistory();
    
    return (
        <div>
            <div className="mt-5 lg:mt-5 ml-5">
                <button
                    onClick={() => history.push('/resources')}
                    className="text-xs lg:text-lg hover:bg-gray-50 hover:rounded-sm">...Back to Resources</button>
            </div>
            <div className="h-full mt-20 mr-20 ml-20">
                <h1 className=" text-2xl lg:text-4xl font-bold capitalize">How to shop homeowners insurance in 2022</h1>
                <div className="text-lg lg:text-xl">
                    <section className="mt-10 flex flex-col lg:text-lg">
                        <h3>How to buy homeowners insurance in 5 easy steps:</h3>
                        <article className="list-decimal leading-relaxed ml-5 mt-3">
                            {/* <ol > */}
                            <li>Learn about how much Coverage you need</li>
                            <li>Get familiar with home insurance policy terms</li>
                            <li>Gather information about the home</li>
                            <li>Compare different home insurance quotes</li>
                            <li>Choose the policy that's right for you</li>
                            {/* </ol> */}
                        </article>
                        <br></br>
                        <article >
                            <p>The best way to shop for homeowners insurance is to compare quotes from at least three insurance
                                companies so that you're not missing out on better or more affordable coverage in your area. With
                                BlueVest Pro, you can compare and buy home insurance in a matter of minutes. Just answer a few brief
                                questions about your house, and we'll provide you with several policy options at a price point that suits
                                your needs.</p>

                        </article>
                    </section>
                    <br></br>
                    <section className="">
                        <article>
                            1. Learn about how much coverage you need.
                            When you get home insurance quotes, the coverage amounts listed are often estimates — not an
                            exact calculation of how much coverage you’ll need. To make sure you’re being quoted for the
                            right amount of coverage, consider getting a more accurate estimate of the following:
                            <ul className="list-disc ml-10">
                                <li>
                                    <span className="font-bold">The replacement cost of your home:</span> The amount of insurance on your
                                    house should be equal to its replacement cost — the amount it would cost
                                    to rebuild the home from the ground up after a disaster. Insurers often
                                    provide their own replacement cost estimate using online estimation tools,
                                    but for a more precise calculation, consider hiring a professional appraiser.
                                </li>
                                <li>
                                    <span className="font-bold">The total value of your personal belongings:</span> You’ll want
                                    enough personal property coverage to cover the value of all of your stuff,
                                    like appliances, furniture, and electronics.

                                </li>
                                <li>
                                    <span className="font-bold">The total value of all of your assets:</span> You should have enough personal
                                    liability coverage to cover your entire net worth in case you’re sued.

                                </li>
                            </ul>
                            Your homeowners insurance coverage needs will also depend on your home’s location and the
                            risks (wildfires, hurricanes, tornadoes) where you live. If you live in a high-risk coastal area or
                            region that experiences frequent wildfires, your coverage needs will be different than if you lived
                            somewhere with a more mild climate.
                        </article>
                    </section>
                    <br></br>
                    <section className="">
                        <article>
                            2. Get familiar with home insurance policy terms:
                            There are six types of coverages that are in every standard homeowners insurance policy.
                            Understanding how you’re protected by each of the coverage types in a standard policy will be
                            useful when comparing policies.

                            <ul className="list-disc ml-10">
                                <li><span className="font-bold">Dwelling:</span> Covers physical damage to the structure of your home and any
                                    attached structures, like a garage or porch</li>

                                <li><span className="font-bold">Other structures:</span> Covers physical damage to structures on your property
                                    that aren’t attached to the home itself, like a detached garage, guest house,
                                    or fencing around your property</li>
                                <li><span className="font-bold">Personal property:</span> Covers damage or theft of personal belongings that
                                    you own, including furniture, clothes, jewelry, and electronics</li>
                                <li><span className="font-bold">Additional living expenses (ALE):</span> If your home is severely damaged or
                                    destroyed by a covered loss, ALE can cover the cost of temporary lodging
                                    and relocation expenses while your house is being repaired or rebuilt</li>
                                <li><span className="font-bold">Personal liability:</span> Covers you and your assets from expensive lawsuits if
                                    you’re ever held liable for someone else’s injury or property damage
                                </li>

                                <li><span className="font-bold">Medical payments:</span> Covers guests’ medical expenses if they’re injured on
                                    your property</li>
                            </ul>
                            <p>You’ll also have to choose between three levels of coverage:</p>

                            <ul className="list-disc ml-10">
                                <li><span className="font-bold">Actual cash value:</span> The cheapest option, actual cash value reimburses you
                                    for the value of your property minus the cost of depreciation, or wear and
                                    tear. This leaves you paying more out of pocket when you file a claim.</li>
                                <li><span className="font-bold">Replacement cost value:</span>  Most insurers allow you to upgrade to
                                    replacement cost value coverage, which reimburses you for the value of
                                    your property at today’s prices. This provides larger reimbursements
                                    when you file a claim.</li>
                                <li><span className="font-bold">Extended replacement cost value:</span> Another optional upgrade, extended
                                    replacement cost value coverage reimburses you for the cost to rebuild
                                    your home — even if it’s more than your policy limit. This protects you
                                    from construction material and labor costs that tend to skyrocket after a
                                    natural disaster.</li>
                            </ul>

                        </article>
                    </section>
                    <br></br>
                    <section className="">
                        <article>
                            <p>3. Gather information about the home:
                                To get an accurate quote estimate, you’ll need to give the insurer information about yourself and
                                the type of property you’re insuring.</p> <br></br>
                            <p>Here’s some of what you’ll need to provide when you shop homeowners insurance policies.</p>
                            <ul className="list-disc ml-10">
                                <li>Your home’s square footage and roof type (like hip or gable)</li>
                                <li>The heating type of your home’s appliances (gas or electric)</li>
                                <li>The renovation history of your home</li>
                                <li>Whether you have any pets, trampolines, or a pool</li>
                                <li>Whether it's your primary or second home</li>
                                <li>Whether you rent it out in the short or long term</li>
                            </ul>
                            <br></br>
                            <p>The more details you give about your home, the more accurate your quote will be. If you’re
                                simply swapping out policies, most of this information will be available on your old policy.
                                Otherwise, you can find your home’s structural details by searching for your property on your
                                county’s property appraiser website.</p>
                        </article>
                    </section>
                    <br></br>
                    <section>
                        <article>
                            <p>4. Compare different home insurance quotes:
                                The easiest way to buy homeowners insurance is through a marketplace like BlueVest Pro,
                                where you can compare quotes across multiple companies in your area. Once you apply, a
                                licensed expert will reach out with policy recommendations that match your coverage needs and
                                budget. They’ll also nail down any home insurance discounts you qualify for.</p>
                            <br></br>
                            <p>We recommend paying close attention to quotes from any insurance companies you already have
                                a relationship with, as they often offer lower rates for existing customers. So if you already have
                                an auto or umbrella insurance policy with a specific carrier, you may get a bundling discount for
                                signing up for home insurance with that same insurer.</p>
                            <br></br>
                            <p>Apart from the policy itself, you’ll also want to look into the insurance company’s background.
                                Check to see if the company insuring your house is financially stable, read reviews, and check
                                ratings with third-party sites like AM Best, J.D. Power, and Consumer Reports.</p>

                        </article>

                    </section>
                    <br></br>
                    <section>
                        <article>
                            <p>5. Choose the policy that’s right for you.
                                Once you’ve compared quotes, it’s time to select a policy and customize it to suit your coverage
                                needs.</p>
                            <br></br>
                            <p>If you have a mortgage, ask your loan officer if the coverage in your policy meets the lender’s
                                insurance requirements. Homeowners insurance doesn’t cover water damage caused by flooding,
                                for example, so you may need to get separate flood insurance if you live in a high-risk flood
                                zone.</p>
                            <br></br>
                            <p>There are also several optional home insurance endorsements that can be added to your policy
                                for an additional cost.
                                <br></br>
                                <span className="font-bold">Some of the most common endorsements are:</span></p>
                            <ul className="list-disc ml-10">
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