import { IGuest } from '@shared/types/guest';

export const getDahsboardData = (data: Array<IGuest>) => {
  const adults = data?.filter(
    ({ priority, isChild }) => !isChild && priority === 1
  ); // Adultos P1

  const payingChildren = data?.filter(({ priority, isChild, age }) => {
    const formattedAge = age ?? 0;
    return isChild && formattedAge > 5 && formattedAge <= 10 && priority === 1;
  }); // Crianças pagantes p1

  const totalFreeChildren =
    data?.filter(({ priority, isChild, age }) => {
      const formattedAge = age ?? 0;
      return isChild && formattedAge <= 5 && priority === 1;
    })?.length ?? 0; // Total de crianças não pagantes p1

  const totalAdults = adults?.length;
  const totalPayingChildren = payingChildren?.length;

  const totalMainPriority =
    totalAdults + totalPayingChildren + totalFreeChildren; // Total pessoas P1

  const totalInvitationsMainPriority = totalAdults + totalPayingChildren / 2; // Total convites P1: Adultos + Crianças Pagantes / 2 (a cada 2 crianças, é 1 convite)

  const totalSecondPriority =
    data?.filter(({ priority }) => priority === 2)?.length ?? 0; // Total P2

  // Adultos confirmados
  const totalConfirmedAdults = adults?.filter(
    ({ confirmed }) => confirmed
  )?.length; // Total de confirmados

  // Crianças pagantes confirmadas
  const totalConfirmedChildren = payingChildren?.filter(
    ({ confirmed }) => confirmed
  )?.length; // Total de confirmados

  const totalConfirmed = Math.round(
    totalConfirmedAdults + totalConfirmedChildren / 2
  );

  const totalNotConfirmed = Math.round(
    totalAdults + totalPayingChildren / 2 - totalConfirmed
  ); // total de não confirmados

  return {
    totalAdults,
    totalPayingChildren,
    totalFreeChildren,
    totalMainPriority,
    totalSecondPriority,
    totalInvitationsMainPriority,
    totalConfirmed,
    totalNotConfirmed,
  };
};
