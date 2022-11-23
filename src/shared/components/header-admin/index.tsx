import { memo } from 'react';
import { withLoader } from '@utilities/hoc/with-loader';
import { IInjectedProps } from '@utilities/hoc/with-loader/types';
import Logo from '@shared/components/logo';
import { IUser } from '@shared/types/user';
import { handleLogout } from './helpers';
import * as Styled from './styles';

export const HeaderAdminComponent: React.FC<
  IInjectedProps & { user?: IUser }
> = ({ user, setLoading }) => (
  <Styled.Header as="header">
    <Styled.Wrapper $isLoggedIn={user?.isLoggedIn as boolean}>
      <Styled.LogoWrapper>
        <Logo widthDesktop="180px" widthMobile="140px" />
        <h1>Área Administrativa</h1>
      </Styled.LogoWrapper>
      {user?.isLoggedIn && (
        <Styled.UserWrapper>
          Olá {user?.name}&nbsp;&nbsp;|&nbsp;&nbsp;
          <Styled.LogoutLink onClick={handleLogout(setLoading)}>
            Sair
          </Styled.LogoutLink>
        </Styled.UserWrapper>
      )}
    </Styled.Wrapper>
  </Styled.Header>
);

export default memo(withLoader(HeaderAdminComponent));
