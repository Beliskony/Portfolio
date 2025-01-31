import TemBox from "./boite/TemBox"
import useEmblaCarousel from "embla-carousel-react"



function Temoignage() {
    const [emblaRef] = useEmblaCarousel({loop: true})
  return (
    <section className="w-full flex flex-col bg-[#0B162C] justify-center items-center py-10 px-10 max-sm:text-center max-sm:px-6">
        <h3 className="text-4xl font-bold text-[#FFFFFF] my-5">Le retour de certains de nos clients sur nous !</h3>
        <p className="text-base text-white">Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
            omnis nobis est iste cupiditate aut facilis ipsum.</p>

      
        <div className='Embla w-full h-80 flex flex-row justify-start items-start overflow-hidden' ref={emblaRef}>
          <div className='embla__container w-[350px] items-start max-sm:w-full'>
            <div className="embla__slide">
                <TemBox nom="Famoni"
                    image="https://i.pinimg.com/474x/da/b3/6e/dab36ebbeb67350d3882f7b16c838962.jpg"
                    texte="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"
                    bg="#FFFFFF"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Prince"
                    image="https://i.pinimg.com/474x/11/75/67/1175675b1bfb3fd9d5502b18794b7037.jpg"
                    texte="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"
                    bg="#5FC2BA"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Touré"
                    image="https://i.pinimg.com/474x/d5/88/a3/d588a3ec000545db4b72ddc1316d0376.jpg"
                    texte="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"
                    bg="#FFFFFF"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="André"
                    image="https://i.pinimg.com/474x/fc/2e/f8/fc2ef8327d29c1d34bf1f97b25efbf68.jpg"
                    texte="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"
                    bg="#5FC2BA"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Ettien"
                    image="https://i.pinimg.com/474x/6d/ee/5c/6dee5c8fdcec2e82128dd4d83966c690.jpg"
                    texte="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"
                    bg="#FFFFFF"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Kimmy"
                    image="https://i.pinimg.com/474x/fc/2e/f8/fc2ef8327d29c1d34bf1f97b25efbf68.jpg"
                    texte="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"
                    bg="#5FC2BA"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Franck"
                    image="https://i.pinimg.com/474x/fc/2e/f8/fc2ef8327d29c1d34bf1f97b25efbf68.jpg"
                    texte="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"
                    bg="#FFFFFF"/>
            </div>
         </div>
        </div>
     
    </section>
  )
}

export default Temoignage