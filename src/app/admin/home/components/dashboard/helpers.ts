import { IGuest } from '@shared/types/guest';

export const getDahsboardData = (data: Array<IGuest>) => {
  const totalMainPriority =
    data?.filter(({ priority }) => priority === 1)?.length ?? 0; // total de convidados prioridade 1;
  const totalSecondPriority =
    data?.filter(({ priority }) => priority === 2)?.length ?? 0; // total de convidados prioridade 2;
  const total = totalMainPriority + totalSecondPriority;
  const totalAdults =
    data?.filter(({ priority, isChild }) => !isChild && priority === 1)
      ?.length ?? 0; // total de adultos/crianças com +10 anos
  const totalChild = total - totalAdults; // total de crianças
  const totalConfirmed =
    data?.filter(({ confirmed }) => confirmed)?.length ?? 0; // total de confirmados
  const totalNotConfirmed = totalAdults - totalConfirmed; // total de não confirmados

  return {
    totalMainPriority,
    totalSecondPriority,
    total,
    totalAdults,
    totalChild,
    totalConfirmed,
    totalNotConfirmed,
  };
};
