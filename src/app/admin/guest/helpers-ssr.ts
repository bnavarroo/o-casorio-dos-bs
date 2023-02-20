import { getGuest } from '@utilities/client/guest';
import { TNextCtx, IRedirect } from '@shared/types/_globals';
import { TGuestFromServer } from '@shared/types/guest';

export const getSSRProps = async (
  ctx?: TNextCtx
): Promise<IRedirect<TGuestFromServer> | { props: TGuestFromServer }> => {
  const { query, params } = ctx ?? {};
  const id: string = params?.id as string;

  // Quando é um novo registro
  if (id?.toLowerCase() === 'new') {
    return {
      props: {
        serverProps: {
          persistedGuest: null,
        },
      },
    };
  }

  // quando recebo os dados via query
  if (query?.name) {
    const persistedGuest = {
      id,
      name: query?.name as string,
      internalName: query?.internalName as string,
      isChild: query?.isChild === 'true',
      confirmed: query?.confirmed === 'true',
      priority: parseInt(query?.priority as string, 10),
      updatedAt: query?.updatedAt as string,
      age: parseInt(query?.age as string, 10),
      isActive: query?.isActive === 'true',
    };

    return {
      props: {
        serverProps: {
          persistedGuest,
        },
      },
    };
  }

  // Quando não é um novo registro e nada foi recebido via query, faz a busca do convidado
  const guest = await getGuest(id);
  if (!guest) {
    return {
      redirect: {
        permanent: false,
        destination: `/admin/home`,
      },
    };
  }

  return {
    props: {
      serverProps: {
        persistedGuest: guest,
      },
    },
  };
};
