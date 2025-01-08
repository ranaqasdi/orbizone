import ServiceCards from "./ServiceCards"

function OurServices(props) {
    return (
        <section className="flex justify-center py-32 bg-inherit bg-right bg-no-repeat"  style={{backgroundImage:'url(/images/bg-shape-2-3.png)'}}>

            <div className="md:max-w-[1400px]">
                <div></div>
                <div className="md:flex justify-between gap-x-8">
                    <ServiceCards title={"Search Engine Optimization"} imgurl={"/images/01-2.png"} text={"Collaboratively formulate principle capital doing progressively evolve user"} url={"seo"}/>
                    <ServiceCards title={"Search Engine Optimization"} imgurl={"/images/01-2.png"} text={"Collaboratively formulate principle capital doing progressively evolve user"} url={"contact"}/>
                    <ServiceCards title={"Search Engine Optimization"} imgurl={"/images/01-2.png"} text={"Collaboratively formulate principle capital doing progressively evolve user"} url={"seo"}/>
                  
                </div>
            </div>
        </section>
    )
}

OurServices.propTypes = {}

export default OurServices
