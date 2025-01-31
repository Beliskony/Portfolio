interface ProjetCreation{
    image: string;
    titre?: string;
    textExplicatif: string;
}

const Creation: React.FC <ProjetCreation>=({image,titre,textExplicatif}) => {
  return (
    <div className='w-96 h-[550px] bg-white flex flex-col p-4 gap-y-4 text-center shadow max-sm:w-full max-sm:h-[620px]'>
        <img src={image} className="h-96 w-full object-cover object-top" />
        <h3 className="text-xl font-bold text-[#0B162C] text-wrap">{titre}</h3>
        <p className="text-wrap font-medium text-base">{textExplicatif}</p>
    </div>
  )
}

export default Creation