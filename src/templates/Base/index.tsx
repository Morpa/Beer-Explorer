import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { Container } from 'components/Container'
import Header from 'components/Header'
import TopLine from 'components/TopLine'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const router = useRouter()

  const route = router ? router.pathname : ''

  useEffect(() => {
    if (['/beer/[beerId]', '/search'].includes(route)) {
      setIsVisible(false)
    }
  }, [route, isVisible])

  return (
    <>
      <S.TopWrapper>
        <TopLine />
        <Header isVisible={isVisible} />
      </S.TopWrapper>
      <Container>
        <S.Stack>{children}</S.Stack>
      </Container>
    </>
  )
}

export default Base
