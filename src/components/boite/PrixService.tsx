import { useState } from 'react';
import Codes from './Codes';
import Wordpress from './Wordpress';
import { motion, AnimatePresence } from 'framer-motion';

const PrixService = () => {
    const [type, setType] = useState(1)

    const renduContenu = () =>{
        switch (type) {
            case 1:
                return <Codes/>
                
            case 2:
                return <Wordpress />
            default :
                return <Codes />
        }
    }

    return (
        <div className='flex flex-col w-full gap-x-4 items-center py-10 text-center'>
            <div className='my-5 flex flex-row justify-between items-center max-sm:w-full'>
                {/*onglet Codes*/}
                <button onClick={() => setType(1)} className={`w-full mx-2 h-20 px-5 items-center rounded-3xl ${type===1 ? 'bg-white':'border-b-0'}`} >
                    <h2 className={`text-3xl max-sm:text-xl font-extrabold ${
                            type === 1 ? 'text-[#0B162C]' : 'text-white'
                        }`}> Site Codé </h2>
                </button>

                {/*onglet Wordpress*/}
                <button onClick={() => setType(2)} className={`w-full mx-2 h-20 px-5 items-center rounded-3xl ${type===2 ? 'bg-white':'border-b-0'}`} >
                    <h2 className={`text-3xl max-sm:text-xl font-extrabold ${
                            type === 2 ? 'text-[#0B162C]' : 'text-white'
                        }`}> Wordpress</h2>
                </button>

            </div>

            {/*Contenu de l'onglet actif*/}
            <div className=' flex flex-row w-full justify-center items-center'>
                <AnimatePresence mode='wait'>
                    <motion.div key={type} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: "easeInOut" }} className='flex-1'>
                        {renduContenu()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
        
    )
}

export default PrixService;
