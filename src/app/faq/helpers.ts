import { EVENT_CONFIG } from '@config/event';

const { address, fullDate, localName, supportAppPhoneLink, confirmLimitDate } =
  EVENT_CONFIG;

export const qna = [
  {
    id: 'q_1',
    question: 'Como confirmar minha presença?',
    answer: `Cada convidado receberá um código de confirmação junto com o convite e
    a confirmação será realizada nesse mesmo site (<a href='/search' target='_blank'>clique aqui para acessar</a>).
    Para confirmar você precisa inserir o código no campo, fazer a busca através da lupa e na tela seguinte clicar no botão "Confirmar Presença".`,
  },
  {
    id: 'q_10',
    question: 'Até quando posso confirmar minha presença?',
    answer: `A confirmação deve ser feita até o dia ${confirmLimitDate}.`,
  },
  {
    id: 'q_2',
    question: 'Perdi o meu código de confirmação, e agora?',
    answer: `Entre em contato conosco através do whatsapp (<a href='https://web.whatsapp.com/send?phone=${supportAppPhoneLink}' target='_blank'>clique aqui para iniciar uma conversa</a>) informando o seu nome completo que recuperamos o código pra você!`,
  },
  {
    id: 'q_3',
    question: 'Como alterar minha resposta de confirmação?',
    answer: `Para alterar a resposta é o mesmo processo de confirmação, através <a href='/'>desse link</a>. A diferença é que o botão será exibido de acordo com a última resposta informada por você.`,
  },
  {
    id: 'q_4',
    question: 'Não consegui fazer minha confirmação pelo site, e agora?',
    answer: `Entre em contato conosco através do whatsapp (<a href='https://web.whatsapp.com/send?phone=${supportAppPhoneLink}' target='_blank'>clique aqui para iniciar uma conversa</a>) informando o seu código que fazemos a confirmação/cancelamento manualmente na aplicação.`,
  },
  {
    id: 'q_5',
    question: 'Onde será realizada a cerimônia e a festa?',
    answer: `A cerimônia e a festa serão realizadas no mesmo local, no espaço de eventos ${localName} localizado na ${address}.`,
  },
  {
    id: 'q_6',
    question: 'Qual a data/hora da cerimônia?',
    answer: `${fullDate}.`,
  },
  {
    id: 'q_7',
    question: 'O local possui estacionamento próprio?',
    answer:
      'Sim, o local possui um estacionamento com capacidade para até 150 carros.',
  },
  {
    id: 'q_8',
    question: 'O local possui opção de hospedagem própria?',
    answer:
      'Não, porém há ótimas opções de hospedagem próximas ao local do evento!',
  },
  {
    id: 'q_9',
    question: 'É necessário algum traje específico?',
    answer:
      'Com exceção dos padrinhos, o traje é livre! Queremos que todos se sintam a vontade e confortáveis =)',
  },
];
