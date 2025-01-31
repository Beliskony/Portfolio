
export default function Footer() {
  return (
    <footer className='w-full flex flex-row py-5 justify-center items-center gap-x-5 max-sm:flex-col max-sm:gap-x-1 max-sm:gap-y-5'>
        <div className='w-[20%] flex flex-row items-center justify-center max-sm:w-full'>
             <img src='/images/LogoRemove.png' className='h-20 w-20 object-cover max-sm:h-40 max-sm:w-40'/>
        </div>

        <div className='w-[45%] items-center justify-center max-sm:w-full'>
            <nav>
             <ul className='flex flex-row gap-x-16 text-lg font-bold items-center justify-center max-sm:flex-col max-sm:gap-x-0 max-sm:gap-y-5'>
              <li className="hover:animate-bounce hover:text-2xl transition-[150] text-[#0B162C] hover:text-[#5FC2BA]">
                <a href="#presentation">Presentaion</a>
              </li>

              <li className="hover:animate-bounce hover:text-2xl text-[#0B162C] hover:text-[#5FC2BA]"> 
                <a href="#skills">Skills</a>
              </li>

              <li className="hover:animate-bounce hover:text-2xl text-[#0B162C] hover:text-[#5FC2BA]">
                <a href="#creation">Creations</a>
              </li>

              <li className="hover:animate-bounce hover:text-2xl text-[#0B162C] hover:text-[#5FC2BA]">
                <a href="#contact">Contact</a>
              </li>
             </ul>
            </nav>
        </div>

        <div className='w-[30%] flex flex-row gap-x-5 justify-center max-sm:w-full max-sm:gap-x-10'>
              <a href='https://www.facebook.com/axel.nguessan.167'>
                <img src='/images/facebook.png' className='h-10 w-10'/>
              </a>

              <a href='https://www.linkedin.com/in/axel-sylvain-n-guessan-a46661291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
                <img src='/images/linkedin.png' className='h-10 w-10'/>
              </a>

              <a href='#'>
                <img src='/images/X.png' className='h-10 w-10'/>
              </a>
        </div>

    </footer>
  )
}
