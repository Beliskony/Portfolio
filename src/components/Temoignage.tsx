import TemBox from "./boite/TemBox"
import useEmblaCarousel from "embla-carousel-react"



function Temoignage() {
    const [emblaRef] = useEmblaCarousel({loop: true})
  return (
    <section className="w-full flex flex-col bg-[#0B162C] justify-center items-center py-10 px-10 max-sm:text-center max-sm:px-6">
        <h3 className="text-3xl font-bold text-[#FFFFFF] my-5 md:text-3xl lg:text-[50px] text-center">Le retour de certains de nos clients sur nous !</h3>
        <p className="text-base text-white">Je vous propose de découvrir quelques impressions</p>

      
        <div className='Embla w-full h-80 flex flex-row justify-start items-start overflow-hidden' ref={emblaRef}>
          <div className='embla__container w-[350px] items-start max-sm:w-full'>
            <div className="embla__slide">
                <TemBox nom="Famoni"
                    image="https://i.pinimg.com/474x/da/b3/6e/dab36ebbeb67350d3882f7b16c838962.jpg"
                    texte="Merci pour le professionalisme d'on vous faites preuves, merci le site est une merveille"
                    bg="#FFFFFF"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Prince"
                    image="https://i.pinimg.com/474x/11/75/67/1175675b1bfb3fd9d5502b18794b7037.jpg"
                    texte="Un service impeccable ! Mon site a été conçu avec professionnalisme, rapidité
                           et une attention aux détails impressionnante. Je recommande vivement !"
                    bg="#5FC2BA"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Touré"
                    image="https://i.pinimg.com/474x/d5/88/a3/d588a3ec000545db4b72ddc1316d0376.jpg"
                    texte="Une expérience exceptionnelle ! La conception de mon site s'est faite en toute transparence avec de 
                           très bons conseils. Un vrai plaisir de collaborer avec eux."
                    bg="#FFFFFF"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="André"
                    image="https://i.pinimg.com/474x/fc/2e/f8/fc2ef8327d29c1d34bf1f97b25efbf68.jpg"
                    texte="Grâce à leur expertise, j'ai enfin un site web moderne, fluide et attractif. L'équipe a su comprendre mes besoins et
                           les traduire en un design parfait."
                    bg="#5FC2BA"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Ettien"
                    image="https://i.pinimg.com/474x/6d/ee/5c/6dee5c8fdcec2e82128dd4d83966c690.jpg"
                    texte="Je suis plus que satisfait du travail réalisé. Écoute, professionnalisme et créativité sont au rendez-vous.
                            Mon site correspond exactement à ce que je voulais !"
                    bg="#FFFFFF"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Kimmy"
                    image="https://i.pinimg.com/236x/58/b0/c3/58b0c3244f9c76134d018f89c5fc454b.jpg"
                    texte="Un accompagnement au top du début à la fin ! Mon site a été conçu avec soin et professionnalisme. Il est rapide, moderne et correspond
                           parfaitement à mon image de marque."
                    bg="#5FC2BA"/>
            </div>

            <div className="embla__slide">
                <TemBox nom="Franck"
                    image="https://i.pinimg.com/236x/e9/f1/ac/e9f1ac1be3e35d62c72f2118af3da92d.jpg"
                    texte="Le portfolio conçu est très beau et m'accorde une crédibilité au près de ma clientèle, bref j'en suis très très satisfait du travail."
                    bg="#FFFFFF"/>
            </div>
         </div>
        </div>
     
    </section>
  )
}

export default Temoignage