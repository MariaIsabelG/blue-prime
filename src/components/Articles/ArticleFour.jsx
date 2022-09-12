import { useHistory } from 'react-router-dom';



function ArticleFour() {

    const history = useHistory();



    return (
        <div>
            <div className="fixed lg:ml-10 ml-3">
                <button
                    onClick={() => history.push('/resources')}
                    className="text-md lg:text-4xl hover:bg-gray-50 hover:rounded-sm">🔙</button>
            </div>
            <div className="mt-10 lg:mt-20 lg:mr-40 lg:ml-40">
                <h1 className=" text-2xl lg:text-4xl  text-center font-bold capitalize">What does renters insurance cover?</h1>
                <div className="text-sm lg:text-md ml-10 mr-10">
                    <section className="mt-10 flex flex-col">
                        <article>
                            <p className='leading-relaxed'>
                                Renters insurance covers your personal property if it is damaged or stolen, medical
                                and legal bills if you are found liable for damaging someone’s property, or injuring
                                them, and temporary living expenses if your rental home is currently uninhabitable.
                            </p>
                            <br />
                            <div className="flex flex-col items-center justify-center leading-relaxed ml-10">
                                <div>What does renters insurance cover?</div>
                                <div>What does renters insurance not cover?</div>
                                <div>What to do before buying renters insurance</div>
                            </div>
                            <br />
                            <p className='leading-relaxed'>Renters insurance is financial protection for a tenant and their personal belongings.
                                There are three categories of coverage that make up a renters insurance
                                policy: personal property coverage, personal liability coverage, and loss-of-use
                                coverage. Renters insurance is a relatively cheap insurance product, costing an
                                average of $15 a month. And although it’s cheap, renters insurance can offer
                                thousands of dollars in protection.</p>
                            <br />
                            <p className='leading-relaxed'>
                                Renting is on the rise, but according to the Insurance Information Institute only 37%
                                of renters have renters insurance. It’s a common myth that landlords will insure
                                renters belongings (they won’t), or that renters insurance isn’t worth it. Your
                                landlord might require you to buy renters insurance, but even if they don’t it’s still a
                                good idea to get a policy. Your landlord will have their own insurance to protect the
                                physical building you are living in, but that insurance will not extend to you or your
                                personal property.
                                If you’re a renter living paycheck to paycheck, or you’re saving up to buy a house,
                                you’re likely living on a budget with little leeway in your finances to replace
                                everything you own in the event of unexpected damages. Renters insurance is a
                                highly cost effective, affordable investment to keep you and your possessions
                                protected.</p>
                            <br />

                            <h3>What does renters insurance cover?</h3>
                            <br />
                            <p className='leading-relaxed'>Renters insurance is made up of three different categories of coverage. Each
                                category offers a different type of protection. Your renters policy will protect
                                you from a variety of different covered perils.</p>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">Personal property coverage</h2>
                            <br />
                            <p className='leading-relaxed'>A renters insurance policy will cover costs to replace your personal
                                belongings, like your furniture, electronics, computer equipment, your
                                clothes, jewelry and appliances. Basic renters insurance will reimburse you
                                for the loss of property (up to your policy’s coverage limit) if destroyed,
                                damaged, lost or stolen in any one of the following 16 different events:</p>
                            <br />
                            <ul className=" ml-10 leading-relaxed columns-2 ">
                                <li>🔥 Fire and lightning</li>
                                <li>💨 Windstorm and hail</li>
                                <li>💣 Explosions</li>
                                <li>❤️‍🔥 Riots</li>
                                <li>✈️ Damage by aircraft</li>
                                <li>🚘 Damage by vehicle (not your own)</li>
                                <li>🌫 Smoke damage</li>
                                <li>🎨 Vandalism</li>
                                <li>🥷🏻 Theft</li>
                                <li>🌋 Volcanic eruption</li>
                                <li>Falling objects</li>
                                <li>🌨 Weight of snow, ice, sleet</li>
                                <li>💦 Damage from steam-heating/water-heating appliances/systems</li>
                                <li>💦 Leakage or overflow of water or steam</li>
                                <li>🪠 Freezing of plumbing, heating, air conditioning</li>
                                <li>⚡︎ Short-circuit damage caused by electrical appliances</li>
                            </ul>
                            <br />
                            <p className='leading-relaxed'>Renters insurance can also cover property when it’s not even in your home,
                                like if your laptop is stolen while you’re on vacation; since it’s considered. </p>
                        </article>
                        <br />
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">Personal liability coverage and medical
                                expenses</h2>
                            <br />
                            <p className='leading-relaxed'>

                                A renters insurance insurance policy will also cover costs you may be legally
                                responsible for paying if someone is injured in your apartment. If someone
                                slips, falls and is hurt on the premises, or if your overzealous dog or cat bites
                                a visitor and sends them to the ER, your policy’s personal liability and
                                medical coverage will cover the cost of potential medical bills.</p>
                            <br />
                            <p className='leading-relaxed'>
                                If that person decides to sue you for their injuries, your liability coverage will
                                pay for some legal expenses that you accrue from the lawsuit.</p>
                            <p className='leading-relaxed'>
                                A renters policy can protect property damage to others that you’re deemed
                                liable for. If a broken pipe in your apartment flooded your neighbor’s
                                residence below, your insurance policy should cover damages to their
                                property.</p>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">Loss-of-use coverage</h2>
                            <br />
                            <p className='leading-relaxed'>If your residence has been made uninhabitable, renters insurance can also
                                cover the cost of a temporary place to live. It may compensate you for
                                everything from hotel bills to the cost of food if it exceeds what you’d
                                normally pay for meals. For example, if there is a fire at your apartment and
                                it needs to be repaired, your loss-of-use coverage will cover the cost of a
                                hotel. If your hotel room doesn’t have a kitchen and you need to go to
                                restaurants more frequently, your renters insurance can reimburse you for
                                the cost of your meals. Your loss-of-use coverage will even cover the cost of
                                gas if you’re driving more because you are now living further away from
                                work. </p>

                            <p className='leading-relaxed'>Otherwise known as additional living expenses, this part of your renters
                                insurance policy can cover you until you’re able to move back in (or find a
                                new apartment).</p>
                            <br />
                            <p><span className="font-bold">Renters insurance also protects against other losses you may not
                                have thought of, including:</span></p>

                            <ul className="list-disc ml-10 leading-relaxed">
                                <br />
                                <li><span className="font-bold">Credit card/bank forgery coverage: </span>Your insurance
                                    policy safeguards against theft, but can also reimburse you
                                    for losses incurred if a thief burglarizes your home, steals
                                    your credit card or checkbook, and goes on a fraudulent
                                    spending spree.</li>
                                <li><span className="font-bold">Other people’s property:</span> It’s not just your property
                                    renters insurance covers. Say you borrowed a friend’s
                                    home gym equipment, or they loaned you their tablet,
                                    some LP records or books; if a fire or faucet flood damages
                                    them, your policy will cover to replace your property and
                                    theirs.</li>
                                <li><span className="font-bold">Items stored elsewhere:</span> Renters insurance doesn’t just
                                    cover property inside the walls of your home. Many rental
                                    insurance policies will cover for damages to your
                                    belongings if they’re stored off-site, too. It may also protect
                                    personal possessions stolen from your car, or damaged in
                                    a storage facility.</li>
                                <li><span className="font-bold">Food: </span>If you’re wondering what would happen to the
                                    contents of your fridge if it broke down, not to worry: you
                                    may be able to claim your groceries on your insurance
                                    policy, even if the fridge works but failed due to a power
                                    outage. (It should ideally fall under the "short-circuit
                                    damage" category.)</li>
                            </ul>
                        </article>
                    </section>
                    <br />

                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">What does renters insurance not cover?</h2>
                            <br />
                            <p className='leading-relaxed'>There are circumstances when renters insurance will not cover your personal
                                property, such as if your property is damaged by a peril that is not covered,
                                or the value of your possessions exceeds your policy’s limits. Renters
                                insurance doesn’t cover your belongings under the following conditions:</p>
                            <br />
                            <br />
                            <div className=" leading-relaxed">
                                <div className='flex flex-col lg:flex-row gap-6'>
                                    <div className=" w-40 h-40 md:w-1/3 lg:h-40 ">
                                        <img className="w-full h-full" src='https://images.unsplash.com/photo-1544257750-572358f5da22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2115&q=80'></img>
                                    </div>
                                    <div className="w-full md:w-2/3 lg:h-32 ">
                                        <p className="w-full h-full">
                                            <span className="font-bold">Natural disasters: </span>Damages caused
                                            by flooding, earthquakes, and even sinkholes aren’t
                                            covered under renters insurance policies. (Though,
                                            surprisingly, volcanic eruptions and windstorms are
                                            covered.) If you live in a flood zone, near a fault line, or in a
                                            region prone to major storms, consider buying additional,
                                            separate coverage.
                                        </p>
                                    </div>

                                </div>
                                <br />
                                <div className='flex flex-col lg:flex-row gap-6'>
                                    <div className=" w-40 h-40 md:w-1/3 lg:h-40 ">
                                        <img className="w-full h-full" src="https://img.freepik.com/premium-photo/person-white-protective-suit-mask-gloves-with-balloon-disinfection-kitchen_151013-27645.jpg?w=2000" />
                                    </div>
                                    <div className="w-full md:w-2/3 lg:h-32 ">
                                        <p className="w-full h-full">
                                            <span className="font-bold">Property damage caused by pests: </span>They’re pesky and
                                            seemingly immune to many forms of extermination, but
                                            damages to your property caused by rodents, bugs, pests
                                            and other sorts of vermin aren’t covered under renters
                                            insurance.</p>
                                    </div>
                                </div>
                                <br />
                                <div className=' flex flex-col lg:flex-row gap-6'>
                                    <div className="w-full md:w-2/3 lg:h-32 ">
                                        <p className="w-full h-full"><span className="font-bold">Items of high value: </span>Expensive valuables may not be fully
                                            covered under your renters insurance policy, like antiques,
                                            fine art, jewelry, vintage family heirlooms, a rare autograph
                                            collection, premium appliances, etc. An insurance company
                                            may limit the amount of coverage they provide since the
                                            value of said items may exceed what they can afford to pay
                                            out — coverage sublimits are usually $2,500 for electronic
                                            items and $1,500 for jewelry. To include pricier items in
                                            your policy, you may need to purchase additional coverage,
                                            called endorsements, for individual items, or standalone
                                            policies, like jewelry insurance.</p>
                                    </div>

                                    <div className="w-40 h-40 md:w-1/3 lg:h-32 ">
                                        <img className="w-full h-full" src="https://img.freepik.com/free-vector/precious-pearl-opened-shell_1441-2699.jpg?w=1380&t=st=1662964556~exp=1662965156~hmac=a52e9b42ac22b5a19da1e9129509f5540e48769b03188943925d8d075a0c0e80"/>
                                    </div>
                                </div>

                                <br />

                                <div className=' flex flex-col lg:flex-row gap-6 lg:mt-20'>
                                    <div className="w-full md:w-2/3 lg:h-40 ">  
                                        <p className="w-full h-full">
                                        <span className="font-bold">Damages from terrorism or nuclear war: </span>Before 9/11,
                                        standard renters insurance policies tended to include
                                        protection against terrorism at no cost. But today, you’d
                                        need to pay an extra cost to receive coverage, and even
                                        then, it would only cover damages in your apartment, not
                                        to the rest of the building, unless your landlord or property
                                        owner paid for separate terrorism coverage.
                                        </p>
                                    </div>
                                    <div className="w-40 h-40 md:w-1/3 lg:h-40 ">
                                        <img className="w-full h-full" src=" https://img.freepik.com/free-vector/terrorism-icons-set_1284-10681.jpg?w=1380&t=st=1662964686~exp=1662965286~hmac=9829a3b95166316b09c63b2ee4b4bf71fef25a0389cc232958db987a8b45b4a3"/>
                                    </div>
                                </div>
                            </div>

                            <br />
                            <div><span className="font-bold">Other exceptions: </span>While renters insurance may cover
                                losses to items stolen from your car, it won’t cover your
                                vehicle; that’s what your auto insurance is for. And while it
                                may protect items you’ve borrowed from someone else if
                                they become damaged in your apartment, your policy won’t
                                automatically cover the property of a roommate. They’d
                                need to buy their own renters insurance to cover their
                                property. Alternatively, roommates can purchase a joint
                                renters insurance policy. If you choose to do this, however,
                                remember that the payout in the event of a claim will be
                                split between you both. Renters insurance also won't cover
                                a lost security deposit.</div>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">Adding additional coverage</h2>
                            <br />
                            <p className='leading-relaxed'>If some of your belongings exceed your policy’s limits or sublimits, you can
                                add additional coverage to your policy to make sure your valuables are
                                protected. Additionally, you can add coverage for perils that are not covered
                                in your policy, like certain natural disasters. This additional coverage is called
                                an endorsement, and you can usually add endorsements to your policy
                                whenever you want — it doesn’t have to be at the time of purchase. Below
                                are common endorsements people add to their policies:</p>
                            <br />
                            <ul className="list-disc ml-10 leading-relaxed">
                                <li><span className="font-bold">Scheduled property endorsement:</span> Increased coverage
                                    limits for specific valuable items, like a wedding ring</li>
                                <li><span className="font-bold">Earthquake endorsement:</span>Coverage for personal
                                    property and loss-of-use caused by an earthquake</li>
                                <li><span className="font-bold">At-home business endorsement:</span> If you make more than
                                    $2,000 a year from an at-home business, your basic renters
                                    insurance policy will not cover your business equipment.
                                    You can add an at-home business endorsement to extend
                                    coverage to things like your work laptop.</li>
                            </ul>
                        </article>
                    </section>
                    <br />
                    <section>
                        <article>
                            <h2 className="text-xl lg:text-2xl font-bold">What to do before buying renters insurance</h2>
                            <br />
                            <p className='leading-relaxed'>Take an inventory of everything you own and add it all up. The average
                                renter owns $20,000 worth of personal property, but many apartment
                                dwellers underestimate the value of their stuff. Itemizing your belongings will
                                give you an idea of how much insurance you need.
                                <br />
                                And like any other insurance coverage, be it life, auto, health or otherwise,
                                know the type of coverage you’re seeking. Shop around, compare different
                                plans and insurance companies, and weigh your deductible versus
                                your premium to see where you can get the best coverage at the lowest
                                price.
                                <br />
                                You should also ask insurance companies about discounts they offer — many
                                will offer discounts for safety features like smoke alarms or deadbolt locks.
                                But on the other hand, if you own certain pets or breeds of dogs that
                                increase your risk of property damage, your rates could be higher.
                                Depending on the breed, you could even be denied insurance coverage.
                                Consider these factors when you’re shopping around.</p>
                            <br />
                            <h3 className="text-lg lg:text-xl font-bold">Replacement cost vs. actual cash value</h3>
                            <br />
                            <p className='leading-relaxed'>There are two types of renters insurance policies you can choose from, and
                                which you choose will determine how you will be paid out in the event of a
                                claim.</p>
                            <br />
                            <ul className="list-disc ml-10 leading-relaxed">
                                <li>A replacement cost policy covers the price of replacing
                                    your items. If your laptop is stolen, your payout covers the
                                    cost of a similarly priced computer. Between the two, this
                                    policy costs more, but pays out more.</li>
                                <li>An actual cash value policy replaces items at their
                                    depreciated value. So, if your laptop was a decade old, your
                                    policy would pay you out according to its current value. If
                                    that’s not enough for a new laptop, you’d need to pay the
                                    difference at your own expense.</li>
                            </ul>

                            <br />
                            <h3 className="text-lg lg:text-xl font-bold">Named perils vs. all risk</h3>
                            <br />
                            <p className='leading-relaxed'>In addition to choosing between an actual cash value or replacement cost
                                policy, there are also two types of policies when it comes to covered perils.</p>

                            <br />
                            <ul className="list-disc ml-10 leading-relaxed">
                                <li>Named perils policies, only cover damage or theft stemming from specific scenarios named in the policy.</li>
                                <li>All risk policies, cover every kind of peril except any
                                    exceptions named in the policy, like earthquake damage.</li>
                            </ul>
                            <br />
                            <p className='leading-relaxed'>You should talk to your insurance company to decide which policy works best
                                for your situation. After you take your home inventory, you should have a
                                good idea about how much your possessions cost and what you can afford to
                                pay to replace out of pocket. Named peril policies are considerably less
                                expensive than all risk policies, so consider this before making a decision,
                                especially if you live in an area of the country that doesn’t experience
                                extreme weather.</p>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ArticleFour;