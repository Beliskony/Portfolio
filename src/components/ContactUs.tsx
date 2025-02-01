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
    <section id='contact' className='bg-[#0B162C] flex flex-row w-full justify-center items-center py-5 px-20 md:px-10 max-sm:flex-col max-sm:px-1 max-sm:gap-y-3'>
        <div className="w-[50%] justify-center items-center text-center space-y-5 px-10 max-sm:px-0 max-sm:w-full">
             <p className="text-white text-wrap text-base">Faite nous part de vos attentes, vos envies ou même parlez nous d'un projet web que vous souhaitez concrétiser</p>
             <h2 className="text-white font-extrabold text-xl underline">Votre satisfaction une priorité</h2>
        </div>

        <div className="w-[40%] justify-center items-center bg-white p-5 rounded-xl flex flex-col md:w-[60%] max-sm:w-full max-sm:gap-y-5 lg:w-[40%]">
            <h3 className="text-4xl font-extrabold text-[#0B162C]">Contactez-moi</h3>
            <form onSubmit={envoie} className="rounded-2xl w-full space-y-4 py-10 px-4 text-center flex flex-col justify-center items-left max-sm:w-full max-sm:gap-y-5">
              <div className="flex flex-col text-left">
                <label className="text-xl font-medium"> Nom & Prénom </label>
                <input type="text"
                       name="nom"
                       placeholder="Votre nom"
                       value={formData.nom}
                       onChange={handleChange}
                       className="w-full h-9 p-5 text-left border border-[#939597] rounded-md shadow-xl"
                       required />
              </div>

              <div className="flex flex-col text-left">
                <label className="text-xl font-medium"> Contact </label>
                <input type="text"
                       name="contact"
                       placeholder="Votre contact"
                       value={formData.contact}
                       onChange={handleChange}
                       className="w-full h-9 p-5 text-left border border-[#939597] rounded-md shadow-xl" />
             </div>

             <div className="flex flex-col text-left">
                <label className="text-xl font-medium"> Email</label>
                <input type="email" 
                       name="email" 
                       placeholder="Votre@gmail.com"
                       value={formData.email}
                       onChange={handleChange}
                       className="w-full h-9 p-5 text-left border border-[#939597] rounded-md shadow-xl"
                       required />
             </div>

             <div className="flex flex-col text-left">
                <label className="text-xl font-medium"> Message </label>
                <textarea name="message" placeholder="Votre message ici ..." value={formData.message} onChange={handleChange}
                 className="w-full h-36 p-2 border border-[#939597] resize-none rounded-md max-sm:w-full shadow-xl">
                </textarea>
            </div>
            <div className="flex flex-row items-center space-x-3 justify-center w-full h-14 text-xl text-white font-bold bg-[#0B162C] hover:bg-[#5FC2BA] rounded-2xl">
                <button type="submit">
                    Envoyer
                </button>
                <img src="https://img.icons8.com/?size=100&id=7874&format=png&color=FFFFFF" className="h-9 w-9"/>
            </div>
            </form>
        </div>

    </section>
  )
}

export default ContactUs