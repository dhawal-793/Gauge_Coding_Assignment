import heroImage from "../assets/mobile-landing.webp"
import Button from "./ui/Button"

const Hero = () => {
    return (
        <section name="landing-page">
            <div className="rounded-b-3xl bg-[#1C1C3A]">
                <div className="flex px-5 pb-24 mx-auto text-center xl:container">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        <div className="w-full">
                            <img src={heroImage} alt="Hero Image" className="object-cover object-center w-[570px] h-auto max-w-full mx-auto" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-[2.5em] md:text-[3.75em] md:font-semibold font-bold text-white leading-snug md:leading-[81px] mb-5 lg:pt-10">Gauge Water Purifier <span className="text-transparent bg-gradient-to-r from-[#D83665] to-[#FEA063] bg-clip-text whitespace-nowrap">Puts An End</span> To RO Service Pain</h1>

                            <p className="text-[#6B6B6B] font-medium px-4 mb-8">Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience.</p>\
                            <div className="grid gap-12 place-items-center">
                                <Button>Take a product Tour</Button>
                                <p className="text-[#B5B5B5]">
                                    Experience Convenience Like Never Before With Our Smart Water Purifier
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero