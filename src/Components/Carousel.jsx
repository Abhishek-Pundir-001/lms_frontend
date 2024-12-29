function Carousel({image,desc,name,slideNumber,totalSlides,id}) {
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full flex flex-col items-center">
            <img
                src={image}
                className="w-1/2 rounded-full bg-cover block" />
            <p>{desc}
                <span className="text-xl font-serif text-yellow-200">~{name}</span>
            </p>
            <div className="absolute left-1 right-1 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={`#slide${slideNumber == 1 ? totalSlides : slideNumber - 1}`} className="btn btn-circle">❮</a>
                <a href={`#slide${slideNumber == totalSlides ? 1 : slideNumber + 1}`} className="btn btn-circle">❯</a>
            </div>

        </div>
    )
}
export default Carousel