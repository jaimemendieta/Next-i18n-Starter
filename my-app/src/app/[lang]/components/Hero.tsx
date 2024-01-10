import {dictionary} from "@/content";

const Hero = ({ params }: { params: { lang: string } }) => {
    return (
        <>
            <section className="section section-hero">
                <div className="container__hero">
                    <div className="title_hero">
                        <h1>{dictionary[params.lang]?.heroTitle}</h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;