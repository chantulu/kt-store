import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: clamp(2rem, 3rem, 4vw);
`

export const Description = styled.h2`
  font-size: clamp(1.5rem, 2.5rem, 3vw);
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: clamp(30rem, 100%, 80vh);
`
