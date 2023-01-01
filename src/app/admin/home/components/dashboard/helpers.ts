import { IGuest } from '@shared/types/guest';

export const getDahsboardData = (data: Array<IGuest>) => {
  const total = data?.filter(({ priority }) => priority === 1)?.length ?? 0; // total de convidados (somente prioridade 1)
  const totalAdults =
    data?.filter(({ priority, isChild }) => !isChild && priority === 1)
      ?.length ?? 0; // total de adultos/crianças com +10 anos
  const totalChild = total - totalAdults; // total de crianças
  const totalConfirmed =
    data?.filter(({ confirmed }) => confirmed)?.length ?? 0; // total de confirmados
  const totalNotConfirmed = totalAdults - totalConfirmed; // total de não confirmados

  return { total, totalAdults, totalChild, totalConfirmed, totalNotConfirmed };
};
