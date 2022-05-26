import Footer from 'components/Footer'
import Menu from 'components/Menu'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export default function Base({ children }: BaseTemplateProps) {
  return (
    <S.Wrapper>
      <Menu />
      {children}
      <Footer />
    </S.Wrapper>
  )
}
