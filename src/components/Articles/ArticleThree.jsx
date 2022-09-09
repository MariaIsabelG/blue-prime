import { useHistory } from "react-router-dom";


function ArticleThree() {
    const history = useHistory();

    return (
        <div>
            <div className="mt-5 lg:mt-5 ml-5">
                <button
                    onClick={() => history.push('/resources')}
                    className="text-xs lg:text-lg hover:bg-gray-50 hover:rounded-sm">...Back to Resources</button>
            </div>
            <div className=" mt-10 lg:mt-20 lg:mr-40 lg:ml-40">
                <h1 className=" text-2xl lg:text-5xl text-center font-bold capitalize">Guide to Long-Term Disability Insurance</h1>
                <div className="text-sm lg:text-md ml-10 mr-10">
                    <section className="mt-10 flex flex-col">
                        <article>
                            Long-term disability insurance provides coverage for multiple years, even
                            decades.
                            <ol className="list-decimal leading-relaxed ml-10 mt-3">
                                <li>What is disability insurance?</li>
                                <li>How Long-Term disability works</li>
                                <li>Do you need long-term disability insurance?</li>
                            </ol>
                            <br />
                            <p className="leading-relaxed">
                                Around one in four people will become disabled before they retire. As you
                                age, the chances of a disability due to an accident or illness only increase.
                                But there’s a way to make sure you have a safety net – Disability Insurance.
                                Long-term disability insurance protects your paycheck, and by extension,
                                your day-to-day life, if you can’t work for an extended period of time – think
                                years or even decades
                            </p>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold leading-relaxed">What is disability insurance?</h2>
                            <br />
                            <p>Disability insurance is a form of income protection that pays out a benefit if
                                you can’t work because of an illness or injury. The level of income
                                replacement you can get and how long your disability benefits last varies by
                                your policy and what type of disability insurance you have.</p>
                            <br />
                            <ul className="list-disc ml-10 leading-relaxed">
                                <li>Long-term disability insurance lasts two years or up until
                                    retirement and can supplement other coverage.</li>
                                <li>Short-term disability insurance is usually tied to your
                                    employer and only lasts 3 to 12 months.</li>
                                <li>Social Security disability insurance is free, but notoriously
                                    difficult to qualify for.</li>
                            </ul>
                            <br />
                            <h2 className="text-lg lg:text-xl font-bold">What qualifies as a disability?</h2>
                            <br />
                            <p className="leading-relaxed">All insurance policies include a definition of disability, which explains the
                                conditions you must meet in order to qualify for a benefit payment under
                                your specific plan.
                                In most cases, you don’t need to be totally and permanently disabled to
                                receive long-term disability insurance benefits. An injury or illness will qualify
                                you for disability insurance benefits if you are either mentally or physically
                                unable to complete your job, or if you have an impairment that substantially
                                limits your ability to carry out basic life activities.

                                When you get disability coverage, the insurance company will further define
                                your disability using the following terms:
                            </p>
                            <br />
                            <ul className="list-disc ml-10 leading-relaxed">
                                <li>Own-occupation disability means you can’t work at your
                                    regular job, even if you still might be able to work at
                                    another job.</li>
                                <li>Any-occupation disability means you can’t work any job</li>
                            </ul>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h1 className="text-xl lg:text-2xl font-bold leading-relaxed">How long-term disability insurance works</h1>
                            <br />
                            <p> Disability insurance pays out about 60% of your non-taxed income on a
                                regular basis, just like a paycheck. Some people get long-term disability
                                insurance as part of their employee benefits program, but it may not provide
                                enough protection. Most people need their own long-term disability plan to
                                get adequate coverage.</p>
                            <br />
                            You can figure out how much coverage you need with our disability
                            insurance calculator.
                            <br />
                            <p>The way long-term disability insurance works is that you pay premiums for a
                                long-term plan, and when you become disabled, you’ll file a claim with
                                details about your diagnosis and proof that you are unable to work.
                                After the waiting period, you’ll begin to receive benefit payments. Disability
                                insurance payments typically stop when you return to work, but you may be
                                able to extend your coverage with a rider.
                                <br />
                                If you want to get rid of your long-term disability coverage, you can
                                always cancel your policy </p>
                            <br />
                            <h2 className="text-lg lg:text-xl font-bold leading-relaxed">Long-term disability insurance benefits</h2>
                            <p>
                                It takes about 90 days before you can start receiving long-term disability
                                benefits, which can last until you retire — unlike short-term disability
                                benefits, which pay up to a year. You can use disability insurance benefits
                                the same way you use your income: to cover everyday expenses, pay
                                regular bills, and keep up with your larger financial plan.
                            </p>
                            <br />
                            <p className="leading-relaxed">Your long-term disability benefits usually aren’t taxable (unlike short-term
                                insurance benefits), and you don't have to pay them back. They’re also
                                typically larger than disability benefits from Social Security, which is why an
                                individual long-term policy is the best way to protect your income.
                            </p>
                            <br />
                            <h2 className="text-lg lg:text-xl font-bold leading-relaxed">Do you need long-term disability insurance?</h2>
                            <br />
                            <p className="leading-relaxed">If you can’t go years or months without a paycheck without depleting your
                                savings, you need long-term disability insurance.
                                Losing your income risks your ability to pay bills or support your family,
                                which can lead to long-term financial consequences — 66.5% of all U.S.
                                bankruptcies and more than 50% of all mortgage foreclosures stem from
                                illness or injury-related medical issues. [2] And a disability is more likely than
                                you think — over 25% of American workers become disabled before they
                                retire, and on average the disability lasts more than three months at some
                                point in their careers. </p>
                            <br />
                            <p className="leading-relaxed">Disability insurance isn’t just for people who work dangerous jobs. You can
                                become disabled no matter what you do for work — the majority of long-term
                                disabilities are due to an illness rather than an accident. And if you took out
                                loans for your education, getting disability insurance prevents you from
                                falling behind on those payments.</p>
                            <br />
                            <p className="leading-relaxed">Long-term disability insurance protects your most valuable asset — your
                                ability to earn an income — and should be a part of every financial safety
                                net.  Even if you have short-term coverage from an employer, consider
                                combining it with a long-term policy for more complete coverage.</p>

                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-lg lg:text-xl font-bold">How to get disability insurance</h2>
                            <br />
                            <p className="leading-relaxed">The application process takes about four to six weeks to complete. There are
                                six steps to getting long-term disability coverage:</p>
                            <ol className="list-decimal leading-relaxed ml-10">
                                <li>Shop around and compare different quotes from insurers</li>
                                <li>Fill out the application</li>
                                <li>Have a phone interview about your medical history and lifestyle</li>
                                <li>Take a medical exam</li>
                                <li>Wait for a decision on the application</li>
                                <li>Sign your policy and make your first payment</li>
                            </ol>
                            <br />
                            <p className="leading-relaxed">A licensed agent at BlueVest can help you get a disability quote and find a long-
                                term policy that meets your needs.</p>
                            <br />
                            <h2 className="text-lg lg:text-xl font-bold">How much does disability insurance cost?</h2>
                            <br />
                            <p className="leading-relaxed">You can generally expect to pay between 1% to 3% of your annual salary for
                                a long-term disability policy. Costs are also affected by your occupation, and
                                some disability insurance companies may offer better rates than others.
                                Disabilities become more likely as you age, and rates will increase as you get
                                older so it’s best to get a policy while you’re young.</p>
                        </article>
                    </section>

                </div>
            </div>
        </div>
    )


}

export default ArticleThree;