import nookies from 'nookies';
import { COOKIES_CONFIG } from '@config/cookies';
import { getGuestFromCookies } from '@utilities/guest';
import { getGuest } from '@utilities/client/guest';
import { TNextCtx, IRedirect } from '@shared/types/_globals';
import { TGuestFromServer } from '@shared/types/guest';

export const getSSRProps = async (
  ctx?: TNextCtx
): Promise<IRedirect<TGuestFromServer> | { props: TGuestFromServer }> => {
  const persistedGuest = getGuestFromCookies(ctx);
  let { id } = persistedGuest ?? {};
  const qs = ctx?.query ?? {};
  const { id: qsId } = qs;

  if (qsId && !id) {
    const guest = await getGuest(qsId as string, {
      priority: 1,
      isActive: true,
    });
    if (guest) {
      const { maxAge, path, keys } = COOKIES_CONFIG;
      nookies.set(ctx, keys.guest, JSON.stringify(guest), {
        maxAge,
        path,
      });
      id = guest.id;
    }
  }

  if (id) {
    return {
      redirect: {
        permanent: false,
        destination: `/confirm/${id}`,
      },
    };
  }

  return {
    props: {
      serverProps: {
        persistedGuest,
        id: (qsId as string) ?? '',
      },
    },
  };
};
