export const getMessage = (confirmed: boolean) =>
  [
    'Iremos nos casar e seria uma honra e satisfação imensa ter você conosco nesse momento tão especial das nossas vidas!',
    '<span class="first-line">Dia <b>29/04/2023</b> promete hein!?</span> <br /> Nesse momento sua presença está confirmada. Caso não possa comparecer por algum motivo, clique no botão abaixo para cancelar a confirmação.',
  ][confirmed ? 0 : 1] ?? '';
