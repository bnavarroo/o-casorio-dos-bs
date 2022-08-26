import * as Styled from './styles';

export const InfoComponent: React.FC = () => (
  <Styled.Wrapper>
    <div>
      <Styled.Title>Onde?</Styled.Title>
      <Styled.Text>
        Rua Mirian Strambi, 651 - Recreio Anhanguera, Ribeirão Preto - SP.
      </Styled.Text>
    </div>
    <div className="mt">
      <Styled.Title>Quando?</Styled.Title>
      <Styled.Text>29 de abril de 2023.</Styled.Text>
    </div>
  </Styled.Wrapper>
);

export default InfoComponent;
