import { ReactNode } from 'react'
import Base from 'templates/Base'
import Hero from '../../components/Hero/HeroElement'
import * as S from './style'

export default function Home({ children }: { children: ReactNode }) {
  return (
    <S.Main>
      <Base>
        <h1>Home</h1>
        <Hero
          text="All fresh, organic and natural products"
          hasMarketingBlock={true}
          image=""
          marketingImage=""
          marketingText="Our Cafe is now open"
        />
        {children}
      </Base>
    </S.Main>
  )
}
