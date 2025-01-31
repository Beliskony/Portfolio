import { useState } from "react"

const ContactUs = () => {
    const [formData, setFormData] = useState({
        nom:"",
        email:"",
        contact:"",
        message:"", 
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      }

    const envoie = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLien = `mailto:nguessanaxel21@gmail.com?subject= Message ${encodeURIComponent(formData.nom)}
        &body=${encodeURIComponent(formData.message)}&contact=${encodeURIComponent(formData.contact)}%0D%0A%0D%0AEmail: ${encodeURIComponent(formData.email)}`;
        window.location.href = mailtoLien;
    }

  return (
    <section id='contact' className='bg-[#0B162C] flex flex-row w-full justify-center items-center py-5 px-20 max-sm:flex-col max-sm:px-1 max-sm:gap-y-3'>
        <div className="w-[50%] justify-center items-center text-center space-y-5 px-10 max-sm:px-0 max-sm:w-full">
             <p className="text-white text-wrap text-base">Faite nous part de vos attentes, vos envies ou même parlez nous d'un projet web que vous souhaitez concrétiser</p>
             <h2 className="text-white font-extrabold text-xl underline">Votre satisfaction une priorité</h2>
        </div>

        <div className="w-[50%] justify-center items-center bg-[#EBF2FA] p-5 rounded-xl flex flex-col max-sm:w-full max-sm:gap-y-5">
            <h3 className="underline text-5xl text-[#0B162C]">Contactez-moi</h3>
            <form onSubmit={envoie} className="bg-white rounded-2xl space-y-4 py-10 px-4 text-center flex flex-col justify-center items-left max-sm:w-full max-sm:gap-y-5">
                <input type="text"
                       name="nom"
                       placeholder="Votre nom"
                       value={formData.nom}
                       onChange={handleChange}
                       className="w-80 h-9 p-5 text-left border-4 border-[#0B162C] rounded-md"
                       required />
                
                <input type="text"
                       name="contact"
                       placeholder="Votre contact"
                       value={formData.contact}
                       onChange={handleChange}
                       className="w-80 h-9 p-5 text-left border-4 border-[#0B162C] rounded-md" />

                <input type="email" 
                       name="email" 
                       placeholder="E-mail"
                       value={formData.email}
                       onChange={handleChange}
                       className="w-80 h-9 p-5 text-left border-4 border-[#0B162C] rounded-md shadow-xl"
                       required />

                <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange}
                 className="w-96 h-36 p-2 border-4 border-[#0B162C] rounded-md max-sm:w-full">

                </textarea>

                <button type="submit" className="w-40 h-10 text-white font-bold bg-[#0B162C] rounded-2xl
                hover:bg-[#5FC2BA] hover:text-[#0B162C] mx-28 max-sm:mx-20">
                    Envoyer
                </button>

            </form>
        </div>

    </section>
  )
}

export default ContactUs