import icon from '../../media/images/icon.svg'

export function PowerfullSection() {
  return (
    <section className="powerfull-section md:mt-[90px] mt-[50px]">
      <div className="container">
        <h2 className="font-bold text-[48px] text-center leading-[initial]">
          Powerful organic features.
        </h2>
        <div className="grid md:grid-cols-3 gap-[20px] md:gap-[40px] lg:gap-[75px] mt-[40px]">
          <div>
            <img src={icon} alt="icon" className="max-w-[30px] mx-auto" />
            <p className='mt-[10px] text-center text-[16px] leading-[150%]'>
              Target competitors, complementary brands, and even influencers in
              your niche. Their followers may like your page more.
            </p>
          </div>
          <div>
            <img src={icon} alt="icon" className="max-w-[30px] mx-auto" />
            <p className='mt-[10px] text-center text-[16px] leading-[150%]'>
              Target competitors, complementary brands, and even influencers in
              your niche. Their followers may like your page more.
            </p>
          </div>
          <div>
            <img src={icon} alt="icon" className="max-w-[30px] mx-auto" />
            <p className='mt-[10px] text-center text-[16px] leading-[150%]'>
              Target competitors, complementary brands, and even influencers in
              your niche. Their followers may like your page more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
