import { useHistory } from "react-router-dom";



function ArticleFive() {

    const history = useHistory();

    return (

        <div>
            <div className="fixed lg:ml-10 ml-3">
                <button
                    onClick={() => history.push('/resources')}
                    className="text-md lg:text-4xl hover:bg-gray-50 hover:rounded-sm">🔙</button>
            </div>
            <div className="mt-10 lg:mt-20 lg:mr-40 lg:ml-40">
                <h1 className=" text-2xl lg:text-5xl text-center font-bold capitalize">Types of Life Insurance</h1>
                <div className="text-sm lg:text-md ml-10 mr-10">
                    <section className="mt-10 flex flex-col">
                        <article>
                            <p className="leading-relaxed">
                                Term and whole are the two main types of life insurance, but there are a few other
                                options to consider before buying a policy.
                            </p>
                            <div className="flex items-center justify-center my-5">
                                <ol className="list-decimal ml-10 leading-relaxed">
                                    <li>Term Life Insurance</li>
                                    <li>Whole Life Insurance</li>
                                    <li>Universal Life Insurance</li>
                                    <li>Variable Life Insurance</li>
                                    <li>Group Life Insurance</li>
                                    <li>What type of life insurance is best for you?</li>
                                </ol>
                            </div>

                            <p className="leading-relaxed">Shopping for life insurance can seem overwhelming, but deciding which type
                                of policy you need is actually simple. There are only two main policy
                                categories to choose from: <span className="font-bold">term life insurance </span>and <span className="font-bold">permanent life insurance.</span>
                                Term life insurance (the most popular type of life insurance)
                                lasts for a specific amount of time, while whole life insurance (the most
                                popular type of permanent coverage) lasts your entire life.
                                Once you decide between term and permanent coverage, you’re already
                                halfway to the finish line. We’ll explain the differences between the two, as
                                well as the term and permanent life insurance options available so you can
                                choose the one that suits you best.</p>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">Term life insurance</h2>
                            <br />
                            <p className="leading-relaxed">Term life insurance lasts for a set number of years before it expires. You
                                pay premiums toward the policy, and if you die during the term, the
                                insurance company pays a set amount of money, known as the death
                                benefit, to your designated beneficiary. The death benefit can be paid out as
                                a lump sum or an annuity. Most people choose to receive the death benefit
                                as a lump sum to avoid taxes.</p>
                            <br />
                            <div className="flex flex-row  p-2 leading-relaxed gap-2">
                                <div className="w-1/2 border-r-2"><span className="font-bold ">Pro</span> <br />Affordability. Term life insurance policies are less
                                    expensive than other types of life insurance policies and
                                    generally have lower premium costs.</div>
                                <div className="w-1/2 border-l-2 pl-4"><span className="font-bold ">Con</span> <br />Length. Term life insurance has an expiration date,
                                    which can align with a mortgage or when your children
                                    graduate college. Those looking for lifelong coverage
                                    should opt for permanent life insurance instead.</div>
                            </div>
                            <br />
                            <div className="border-t-2  p-2">
                                <span className="font-bold ">Who it’s for: </span> <br />Most life insurance shoppers. Those
                                looking for cheaper life insurance for up to 30 years should
                                buy term life insurance.
                            </div>

                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">Whole life insurance</h2>

                            <br />
                            <p className="leading-relaxed">Whole life insurance is the most popular type of permanent life insurance. It
                                also pays out a death benefit, but unlike term life, most policies have a cash
                                value, an investment-like, tax-deferred savings account, included in the
                                policy.</p>
                            <br />
                            <div className="flex flex-row  p-2 leading-relaxed gap-2">
                                <div className="w-1/2 border-r-2"><span className="font-bold">Pro</span> <br />Cash value & lifelong coverage. The cash value
                                    component can cover endowments or estate plans. And
                                    since this coverage lasts for your entire life, it can help
                                    support long-term dependents such as children with
                                    disabilities.</div>
                                <div className="w-1/2 border-l-2 pl-4"><span className="font-bold">Con </span><br />Cost & complexity. A whole life insurance policy can
                                    cost five to 15 times more than a term life policy for the
                                    same death benefit amount. The cash value component
                                    makes whole life more complex than term life because of
                                    fees, taxes, interest, and other stipulations.</div>
                            </div>
                            <div className="border-t-2  p-2">
                                <span className="font-bold">Who it’s for:</span> <br />Younger buyers who can pay
                                more. People who anticipate lifelong dependents or a need
                                for permanent insurance with minimal complexities can
                                benefit from whole life.
                            </div>

                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">Universal life insurance</h2>
                            <br />
                            <p className="leading-relaxed">There are three types of Universal Life Insurance (UL): 
                            <sp className='italic '>Indexed Universal Life Insurance </sp>
                                (IUL), <sp className='italic '>Guaranteed Universal Life Insurance </sp>(GUL), 
                                and <sp className='italic '>Variable Universal Life Insurance </sp>(VUL). All have a cash value, just like a whole life
                                insurance policy. Your premiums go toward both the cash value and the
                                death benefit.

                                Unlike whole life insurance, universal life insurance allows you to decrease
                                (or increase) how much you pay toward  premiums (flexible premiums) and
                                allows for adjustable death benefits. If you decrease how much you spend on
                                premiums, the difference is withdrawn from your policy’s cash value.
                            </p>
                            <br />
                            {/* <h3 className="underline capitalize">Indexed universal life insurance</h3> */}
                            <p className="leading-relaxed indent-6">⸺ <span className="italic capitalize"> Indexed Universal Life Insurance</span>  (IUL) is the most popular type of UL. The
                                cash value account has a minimum (and maximum) guaranteed interest rate
                                based on a stock market index (like the S&P 500), chosen by the insurer.
                            </p>
                            <br />
                            <div className="flex flex-row  p-2 leading-relaxed gap-2">
                                <div className="w-1/2 border-r-2"><span className="font-bold">Pro</span> <br/>Cash value gains. There’s potential for bigger gains
                                    in the cash value account compared to other permanent life
                                    insurance policies, depending on stock market
                                    performance.</div>
                                <div className="w-1/2 border-l-2 pl-4"><span className="font-bold">Con</span> <br/>Investment caps. Most insurers set limits on cash
                                    value gains. You won’t lose your base cash value, but
                                    dedicated investment accounts offer higher returns.</div>
                            </div>
                                <div className="border-t-2  p-2"><span className="font-bold">Who it’s for</span> <br/>Portfolio enhancers. If you’ve maxed out
                                    other investment accounts or are looking for a relatively
                                    safe investment with guaranteed minimum values, IUL
                                    might be right for you.</div>
                            <br />
                            {/* <h3 className="underline capitalize">Guaranteed universal life insurance</h3> */}

                            <p className="leading-relaxed indent-6">⸺ <span className="italic capitalize "> Guaranteed universal life </span>insurance (GUL) is universal life insurance without
                                the market risk. Your premiums stay the same regardless of how market
                                indexes perform, as your plan’s interest rates are baked into the premiums
                                when you sign up for the policy. This type of life insurance has a “no-lapse”
                                guarantee, meaning that as long as you pay your premiums, you’ll have
                                coverage.</p>
                            <br />
                            <div className="flex flex-row p-2 leading-relaxed gap-2">
                                <div className="w-1/2 border-r-2"><span className="font-bold">Pro</span> <br/> Stability. Guaranteed universal life insurance
                                    provides lifelong coverage without the market fluctuations
                                    of indexed or variable policies.</div>
                                <div className="w-1/2 border-l-2 pl-4"><span className="font-bold">Con</span> <br/>No cash guarantee. Unlike some permanent life
                                    insurance, GUL doesn’t allow for premium payments from
                                    the cash value account. If you skip a premium payment,
                                    your policy will lapse.</div>
                            </div>
                                <div className="border-t-2  p-2"><span className="font-bold">Who it’s for </span> <br/> Risk-averse people with permanent
                                    insurance needs. Guaranteed universal life insurance is a
                                    relatively affordable permanent option, sort of like a term
                                    life insurance policy where the term lasts the rest of your
                                    life.</div>
                            <br />
                            {/* <h3 className="italic font-bold capitalize">Variable universal life insurance</h3> */}
                            <p className="leading-relaxed indent-6">⸺ <sp className='italic capitalize'>Variable Universal Life Insurance</sp> (VUL) has a variable interest rate set by the
                                life insurance company. Cash value is invested in mutual funds that can
                                increase or decrease. It shares elements from universal and variable life
                                insurance policies.</p>
                            <br />
                            <div className="flex flex-row  p-2 leading-relaxed gap-2">
                                <div className="w-1/2 border-r-2"><span className="font-bold">Pro</span> <br/> Cash value gains. There’s a potential to see bigger
                                    gains in the cash value account compared to other
                                    permanent life insurance policies, depending on your
                                    investment choices.</div>
                                <div className="w-1/2 border-l-2 pl-4">
                                    <span className="font-bold">Con </span> <br/>Too hands-on. The policyholder, not the insurance
                                    company, manages the investment portfolio. Unlike other
                                    types of permanent insurance, you’ll need to manage your
                                    own cash value investments or work with your own
                                    financial advisor.</div>
                            </div>
                                <div className="border-t-2  p-2"><span className="font-bold">Who it’s for</span> <br/> DIY investors. There’s a big potential
                                    upside for policyholders who don’t mind being involved in
                                    money management.</div>

                        </article>
                    </section>

                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">Group life insurance policies</h2>
                            <br />
                            <p className="leading-relaxed">Group life insurance is an employee benefit provided by some employers
                                that is a type of term life insurance called annual renewable term. It isn’t
                                technically a type of life insurance, but it’s important to know how it's
                                different from privately purchased life insurance.
                                <br />
                                Most people think their employer-sponsored life insurance is enough
                                coverage when in most cases it isn’t. Make no mistake: If your employer is
                                offering life insurance at no extra cost to you, it’s a great benefit. By all
                                means, get insured. But if you need life insurance to protect your family,
                                employer-provided coverage usually isn’t sufficient.</p>
                            <br />
                            <h2 className="text-xl lg:text-2xl font-bold">What type of life insurance is best for you?</h2>
                            <br />
                            <p className="leading-relaxed">Term life insurance policies are usually the best solution for people who need
                                affordable life insurance for a specific period in their life. Permanent life
                                insurance policies, including whole life insurance, are best for people who
                                can pay more and want life insurance that will never expire.
                                Simplified issue and guaranteed issue life insurance are options for people
                                who might not be able to get insured otherwise because of age or poor
                                health and elderly consumers who don’t want to burden their families with
                                burial costs.</p>
                            <br />
                            <p className="leading-relaxed">You should always speak to a licensed independent broker, like BlueVest, or
                                a financial advisor to determine the best insurance company and policy for
                                you. They can help you weigh the pros and cons of each type of coverage
                                and buy the right type of insurance for your needs.</p>


                        </article>
                    </section>
                </div>
            </div>
        </div>
    )


}

export default ArticleFive;