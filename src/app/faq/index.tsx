import { qna } from './helpers';
import * as Styled from './styles';

const Faq: React.FC = () => (
  <Styled.List>
    {qna?.map((item) => (
      <Styled.ListItem key={item.id}>
        <Styled.Question>{item?.question}</Styled.Question>
        <Styled.Answer dangerouslySetInnerHTML={{ __html: item?.answer }} />
      </Styled.ListItem>
    ))}
  </Styled.List>
);

export default Faq;
