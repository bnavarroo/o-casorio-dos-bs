/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Logo from '@shared/components/logo';
import { getHeaderLinks } from './helpers';
import * as Styled from './styles';

export const HeaderComponent: React.FC = () => {
  const { pathname } = useRouter();
  const links = getHeaderLinks(pathname);

  return (
    <Styled.Header as="header">
      <Styled.Wrapper>
        <Styled.LinkContainer>
          <Styled.LinkWrapper>
            {links?.map(({ link, text, target }) => (
              <Link key={link} href={link}>
                <a target={target}>{text}</a>
              </Link>
            ))}
          </Styled.LinkWrapper>
        </Styled.LinkContainer>
        <Logo />
      </Styled.Wrapper>
    </Styled.Header>
  );
};

HeaderComponent.defaultProps = { isFaqPage: false };

export default memo(HeaderComponent);
