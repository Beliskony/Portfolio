import ContactUs from "../components/ContactUs"
import CreationSection from "../components/CreationSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionUn from "../components/SectionUn"
import Services from "../components/Services"
import SkillsSection from "../components/SkillsSection"
import Temoignage from "../components/Temoignage"

function LandingPage() {
  return (
    <html className="w-full h-full flex flex-col justify-start">
        <header className="h-20">
            <Header />
        </header>

        <main className="flex flex-col max-sm:px-0 bg-[#EBF2FA]">
           <SectionUn />
           <Services />
           <SkillsSection />
           <Temoignage />
           <CreationSection />
           <ContactUs />
        </main>

        <footer className="w-full flex bg-white items-center px-10">
            <Footer />
        </footer>
    </html>
  )
}

export default LandingPage