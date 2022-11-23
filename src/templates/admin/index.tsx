import HeaderAdmin from '@shared/components/header-admin';
import Footer from '@shared/components/footer';
import { ContainerTemplate } from '@styles/ui/container';
import { IProps } from './types';
import * as Styled from './styles';

const AdminTemplate: React.FC<IProps> = ({ children, user }) => (
  <ContainerTemplate>
    <HeaderAdmin user={user} />
    <Styled.Wrapper as="main">{children}</Styled.Wrapper>
    <Footer />
  </ContainerTemplate>
);

export default AdminTemplate;
