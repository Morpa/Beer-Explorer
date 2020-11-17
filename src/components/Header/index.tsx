import Link from 'next/link'
import {
  SearchAlt as SearchIcon,
  ArrowBack as BackIcon
} from '@styled-icons/boxicons-regular'

import Logo from 'components/Logo'

import * as S from './styles'

export type HeaderProps = {
  isVisible?: boolean
}

const Header = ({ isVisible }: HeaderProps) => (
  <S.Wrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile size="large" />
    </S.LogoWrapper>

    {isVisible ? (
      <S.IconWrapper>
        <Link href="/search">
          <a aria-label="search">
            <SearchIcon />
          </a>
        </Link>
      </S.IconWrapper>
    ) : (
      <S.IconWrapper>
        <Link href="/">
          <a aria-label="back">
            <BackIcon />
          </a>
        </Link>
      </S.IconWrapper>
    )}
  </S.Wrapper>
)

export default Header
