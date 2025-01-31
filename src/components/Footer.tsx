
export default function Footer() {
  return (
    <footer className='w-full flex flex-row py-5 justify-center items-center gap-x-5'>
        <div className='w-[20%] flex flex-row items-center justify-center'>
             <img src='/images/LogoRemove.png' className='h-20 w-20 object-cover'/>
        </div>

        <div className='w-[45%] items-center justify-center'>
            <nav>
             <ul className='flex flex-row gap-x-16 text-lg font-bold items-center justify-center'>
              <li className="hover:animate-bounce hover:text-2xl transition-[150] hover:text-[#0B162C]">
                <a href="#">Presentaion</a>
              </li>

              <li className="hover:animate-bounce hover:text-2xl hover:text-[#0B162C] h-full"> 
                <a href="#">Skills</a>
              </li>

              <li className="hover:animate-bounce hover:text-2xl hover:text-[#0B162C] h-full">
                <a href="#">Creations</a>
              </li>

              <li className="hover:animate-bounce hover:text-2xl hover:text-[#0B162C] h-full">
                <a href="#">Contact</a>
              </li>
             </ul>
            </nav>
        </div>

        <div className='w-[30%] flex flex-row gap-x-5 justify-center'>
              <a href='#'>
                <img src='/images/facebook.png' className='h-10 w-10'/>
              </a>

              <a href='#'>
                <img src='/images/linkedin.png' className='h-10 w-10'/>
              </a>

              <a href='#'>
                <img src='/images/X.png' className='h-10 w-10'/>
              </a>
        </div>

    </footer>
  )
}
