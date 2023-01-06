import { Button } from "../button";

export function HeroSection() {
  return (
    <section className="hero-section mt-[40px] md:mt-24">
      <div className="container">
        <h1 className="text-[32px] md:text-[40px] lg:text-[64px] leading-[109%] text-center font-bold max-w-[1024px] mx-auto">
          The most successful approach to Wyden your reach using a powerful
          organic tool for Instagram.
        </h1>
        <p className="mt-6 md:text-[18px] lg:text-[24px] leading-[145%] text-center max-w-[658px] mx-auto">
          Engage with real people and grow faster organically. Greater verticals
          for growth, no spam, no fake followers, and no bots.
        </p>
        <Button linkUrl="#" linkText="Try It Now" />
        <p className="text-center mt-[30px]">
          <span className="font-bold">Got a question?</span> ​Email our founders
          at{" "}
          <a href="#" className="text-accent font-bold">
            {" "}
            ​info@wyden.io
          </a>
        </p>
      </div>
    </section>
  );
}
