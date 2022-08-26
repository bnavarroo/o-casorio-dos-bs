import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import type { NextApiRequest, NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getGuestFromCookies } from '@utilities/guest';
import { IRedirect } from '@shared/types/_globals';
import { TGuestFromServer } from '@shared/types/guest';

export const getPropsFromServer = (
  ctx?: Pick<NextPageContext, 'req'> | { req: NextApiRequest } | null
): IRedirect<TGuestFromServer> | { props: TGuestFromServer } => {
  const persistedGuest = getGuestFromCookies(ctx);
  const { id } = persistedGuest ?? {};
  const qs = (ctx as { query?: ParsedUrlQuery })?.query ?? {};
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
  setState: Dispatch<SetStateAction<string>>
) => {
  e.preventDefault();

  const formEntries = Object.fromEntries(new FormData(e?.target));
  const { guestId } = formEntries;
  setState(guestId as string);
};
