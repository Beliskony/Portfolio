import Creation from "./boite/Creation"

function CreationSection() {
  return (
    <section id="creation" className="w-full px-20 my-10 max-sm:px-1 md:px-1">
      
      <h2 className="font-bold underline text-center my-10 md:text-3xl lg:text-[50px]">Quelques inspirations & projets</h2>
       
       <div className="w-full grid justify-center item-center space-y-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3 lg:px-20 lg:gap-x-3 gap-x-5 max-sm:space-y-5">

         <Creation image="https://i.pinimg.com/736x/3f/7f/1e/3f7f1e9486dc3acc9b196ae5c5155ffe.jpg"
                   textExplicatif="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"/>

        <Creation image="/images/siteUn.png"
                   textExplicatif="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"/>

        <Creation image="https://i.pinimg.com/736x/04/ae/d6/04aed634429791c6a8e298ec28e31856.jpg"
                   textExplicatif="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"/>

        <Creation image="https://i.pinimg.com/736x/60/3a/8d/603a8d0670813f2d0d99856ebf760397.jpg"
                   textExplicatif="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"/>

        <Creation image="https://i.pinimg.com/736x/a9/be/c1/a9bec1cd989fa24fe67a2d41e779f8ce.jpg"
                   textExplicatif="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"/>

        <Creation image="https://i.pinimg.com/736x/d2/43/0c/d2430c7a2b9300e369ab9a2a47cb37d7.jpg"
                   textExplicatif="Lorem ipsum dolor sit amet. Et nihil autem aut earum dicta est voluptatem quia ad dolorum pariatur. Sed 
                           omnis nobis est iste cupiditate aut facilis ipsum"/>

       </div>

    </section>
  )
}

export default CreationSection