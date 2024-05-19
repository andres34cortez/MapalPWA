async function NewsComponent() {
    const cards = await fetchCards();
    const { language } = useLanguage();
  
    return (
      <div className='flex flex-col mt-[10px] z-10 pl-6'>
        <div className='flex flex-row items-center relative mb-2'>
          <div className='absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]' />
          <h2 className='font-bold'>
            {language === "ESP" ? <>NOTICIAS / PRENSA</> : <>PRESS NEWS</>}
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {/* @ts-ignore */}
          {cards.map((card, index) => (
            <NewsCard card={card} key={index} />
          ))}
        </div>
      </div>
    );
  }
  
  async function News() {
    return <NewsComponent />;
  }