import Header from '@shared/components/header';
import Footer from '@shared/components/footer';
import { ContainerTemplate } from '@styles/ui/container';
import * as Styled from './styles';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ContainerTemplate>
    <Header />
    <Styled.Wrapper as="main">{children}</Styled.Wrapper>
    <Footer />
  </ContainerTemplate>
);

export default MainTemplate;
