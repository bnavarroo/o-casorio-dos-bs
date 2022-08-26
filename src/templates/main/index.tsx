import Header from '@shared/components/header';
import Footer from '@shared/components/footer';
import * as Styled from './styles';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Styled.Container>
    <Header />
    <Styled.Wrapper as="main">{children}</Styled.Wrapper>
    <Footer />
  </Styled.Container>
);

export default MainTemplate;
