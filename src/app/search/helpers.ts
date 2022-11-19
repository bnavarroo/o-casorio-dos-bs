import { ChangeEvent } from 'react';
import { getGuestFromCookies } from '@utilities/guest';
import { TNextCtx, IRedirect, TSetState } from '@shared/types/_globals';
import { TGuestFromServer } from '@shared/types/guest';

export const getSSRProps = (
  ctx?: TNextCtx
): IRedirect<TGuestFromServer> | { props: TGuestFromServer } => {
  const persistedGuest = getGuestFromCookies(ctx);
  const { id } = persistedGuest ?? {};
  const qs = ctx?.query ?? {};
  const { id: qsId } = qs;

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

export const handleSubmit = (
  e: ChangeEvent<HTMLFormElement>,
  setState: TSetState<string>
) => {
  e.preventDefault();

  const formEntries = Object.fromEntries(new FormData(e?.target));
  const { guestId } = formEntries;
  setState(guestId as string);
};
