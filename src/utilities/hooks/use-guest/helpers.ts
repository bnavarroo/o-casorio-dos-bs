import { TObjectMap } from '@shared/types/_globals';

const errorMap: TObjectMap<{ title?: string; description: string }> = {
  404: {
    description: `Verifique o código informado e tente novamente. Para dúvidas e mais informações acesse o link 'dúvidas e ajuda', localizado no canto superior direito da tela.`,
  },
  401: {
    title: 'Ops...',
    description: 'Algo inesperado aconteceu (401)',
  },
};

export const fmtErrorData = (status: number, message: string) => {
  const errorTitle = errorMap?.[status]?.title ?? message;
  const errorMessage = errorMap?.[status]?.description ?? '';

  return { errorTitle, errorMessage };
};
