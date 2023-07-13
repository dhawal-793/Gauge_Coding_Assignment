import { BsShieldFillCheck } from "react-icons/bs"
import { AiFillCheckCircle } from "react-icons/ai"

import water_lg from "../assets/water-lg.webp"
import Button from "./ui/Button"

const WhyGauge = () => {
    return (
        <section name="why-gauge">
            <div className="flex flex-col-reverse px-5 pt-20 mx-auto mb-5 text-center lg:flex-row lg:pl-14 lg:pt-12">
                <div className="flex flex-col md:items-start md:text-left text-start lg:mx-auto lg:w-1/2 lg:flex-grow">
                    <div className="mx-auto mt-10 w-fit">
                        <div className="flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-full shadow-lg">
                            <BsShieldFillCheck className="w-6 h-6 text-blue-500" />
                            Customers’ Needs Above All Else
                        </div>
                    </div>
                    <div className="lg:pr-16">
                        <div className="py-6">
                            <h2 className="text-3xl md:text-[2.6rem] font-semibold leading-snug">
                                <span className="block">Take Control</span>
                                <span className="block text-[#ff5f55]">Monitor Usage & Change Filters</span>
                                <span className="block">
                                    No Technician Needed
                                </span>
                            </h2>
                        </div>
                        <p className="mb-6 text-[#6b6b6b] text-[1em]">We have crafted a product that addresses the real frustrations of a customer. The first step is to ensure there are zero service delays.</p>
                    </div>
                    <div className="flex flex-col pr-12 space-y-4">
                        <div className="flex gap-3">
                            <div className="pt-[2px]">
                                <AiFillCheckCircle className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-bold text-gray-800 capitalize lg:w-full">
                                    Smart Water Purifier With Self Servicing Capability
                                </h2>
                                <p className="mt-3 mb-6 text-base leading-relaxed text-gray-600">
                                    Say goodbye to the hassle of scheduling a technician for purifier maintenance with our <span className="font-bold">self-replacing</span> filters
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="pt-[2px]">
                                <AiFillCheckCircle className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div className="">
                                <h2 className="text-xl font-bold text-gray-800 capitalize lg:w-full">
                                    Compensation For Service Delays
                                </h2>
                                <p className="mt-3 mb-6 text-base leading-relaxed text-gray-600">
                                    You are entitled to a compensation of <span className="font-bold">100 Rs/Day</span> if service is delayed for more than 24 hours.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 pb-12 mx-auto">
                        <Button>
                            Next: Smart Water Conservation
                        </Button>
                    </div>
                </div>
                <div className="w-full cursor-pointer lg:w-1/2 lg:pt-10">
                    <img src={water_lg} alt="" className="relative object-cover object-center transition-all duration-200 hover:-translate-y-2" />
                </div>
            </div>
        </section>
    )
}

export default WhyGauge