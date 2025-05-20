interface ProjetCreation{
    image: string;
    titre?: string;
    lien?: string
}

const Creation: React.FC <ProjetCreation>=({image,titre,lien}) => {
  return (
    <div className='w-96 h-[450px] flex flex-col justify-center p-1 text-center shadow max-sm:w-full max-sm:h-[620px]'>
      <a href={lien}>
        <img src={image} className="h-96 w-full object-cover object-top" />
        <h3 className="text-xl font-bold text-[#0B162C] text-wrap">{titre}</h3>
        {/*<p className="text-wrap font-medium text-base">{textExplicatif}</p>*/}</a>
    </div>
  )
}

export default Creation