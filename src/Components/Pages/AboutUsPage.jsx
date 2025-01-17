import HomeLayout from "../Layouts/HomeLayout";

import aboutMainImage from '../../assets/aboutmainimage.jpg'

import Carousel from "../Carousel";
import { carouselData } from "../../Constants/Carouseldata";

function AboutUs() {

    return (
        <HomeLayout>
            <div className="flex flex-col text-white pl-20 pt-20 w-full bg-gradient-to-r from-indigo-500 ...">
                <div className="flex justify-center items-center ">
                    <section className="w-1/2">
                        <h1 className="text-5xl text-yellow-200 tracking-wide font-bold">Affordable and quality education</h1>
                        <p className="text-xl mt-2">our goal is to provide the affordable and quality education to the world we are providing the platform to the aspiring teachers and the students to share their skills, creativity and knowledge to each other to empower and contribute in the growth of mankind.
                        </p>
                    </section>
                    <div className="w-1/2 flex justify-center ">
                        <img src={aboutMainImage} alt="" className="rounded-md drop-shadow-2xl" />
                    </div>
                </div>
                <div className="carousel w-1/4 m-auto my-4  flex items-center">
                    {carouselData.map((data) => <Carousel name={data.name} desc={data.desc} image={data.image} id={data.id} key={data.id} totalSlides={carouselData.length} slideNumber={data.id} />)}
                </div>
            </div>
        </HomeLayout>
    )
}
export default AboutUs;