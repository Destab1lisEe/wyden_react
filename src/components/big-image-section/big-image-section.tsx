import image from "../../media/images/image.png";

export function BigImageSection() {
  return (
    <section className="big-image md:mt-[90px] mt-[50px]">
      <div className="container">
        <h2 className="text-[28px] md:text-[32px] lg:text-[48px] font-bold text-center">
          So much more than a growth tool.
        </h2>
        <p className="text-[16px] leading-[150%] md:text-[20px] mt-[26px] text-center max-w-[744px] mx-auto">
          Sure, we’ll help you grow. But there’s more: create real engagements,
          get followed by your ideal audience - and start building the social
          profile you really want.
        </p>
        <img
          className="max-w-full max-h-full w-full h-full mt-[40px] shadow-image"
          src={image}
          alt="image"
        />
      </div>
    </section>
  );
}
