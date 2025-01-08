import Button from "../Button"
import ClipedText from "../ClipedText"

export const HeroSection = () => {
    return (
        <section className="md:w-[100%] md:flex md:justify-center">
            <div className="md:flex md:justify-center md:w-[90%] md:py-20 px-10 bg-gradient-to-r from-purple-50 to-[#F7E6EE] rounded-2xl">
                <div className="md:w-[1400px] md:flex md:justify-between">
                    <div className="flex gap-y-2 flex-col md:w-[50%] justify-center pr-10">
                        <h3 className="uppercase  font-medium text-md text-purple-700">go for advertising</h3>
                        <h1 className="font-bold text-5xl leading-snug">Achieve Top
                            <ClipedText>&nbsp;Search Results&nbsp;</ClipedText>
                            With Our Seo Services</h1>
                        <p className="mt-5 font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                        <div className="md:flex mt-10">
                            <Button>Explore</Button>
                            <p className="px-16 py-4 underline cursor-pointer text-xl font-medium">Contact Us</p>
                        </div>
                    </div>
                    <div>
                        <img className="w-[500px]" src="/images/hero-image-3.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
