import { BetterSection } from '../components/better-section/better-section';
import { BigImageSection } from '../components/big-image-section/big-image-section';
import { FaqSection } from '../components/faq-section/faq-section';
import { HeroSection } from '../components/hero-section/hero-section';
import { PowerfullSection } from '../components/powerfull-section/powerfull-section';

export function HomePage(){
  return(
    <main className='page'>
      <HeroSection />
      <BigImageSection />
      <BetterSection />
      <PowerfullSection />
      <FaqSection />
    </main>
  )
}