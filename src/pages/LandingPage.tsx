import ContactUs from "../components/ContactUs"
import CreationSection from "../components/CreationSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SectionUn from "../components/SectionUn"
import Services from "../components/Services"
import SkillsSection from "../components/SkillsSection"
import Temoignage from "../components/Temoignage"
import ProcessSection from "../components/ProcessSection"

function LandingPage() {
  return (
    <>
       <Header />

       <SectionUn />
       <CreationSection />
       <SkillsSection />
       <Services />
       <Temoignage />
       <ProcessSection />
       <ContactUs />

      <Footer />
  </>
  )
}

export default LandingPage