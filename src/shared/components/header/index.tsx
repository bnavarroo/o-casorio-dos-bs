/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '@shared/components/logo';
import * as Styled from './styles';

export const HeaderComponent: React.FC = () => {
  const { pathname } = useRouter();
  const isFaqPage = pathname?.includes('/faq');
  const link = isFaqPage ? '/' : '/faq';
  const linkText = isFaqPage ? 'voltar' : 'dúvidas e ajuda';
  const linkTarget = isFaqPage ? '_self' : '_blank';

  return (
    <Styled.Header as="header">
      <Styled.Wrapper>
        <Styled.LinkWrapper>
          <Link href={link}>
            <a target={linkTarget}>{linkText}</a>
          </Link>
        </Styled.LinkWrapper>
        <Logo />
      </Styled.Wrapper>
    </Styled.Header>
  );
};

HeaderComponent.defaultProps = { isFaqPage: false };

export default memo(HeaderComponent);
