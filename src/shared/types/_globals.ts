import { ParsedUrlQuery } from 'querystring';
import type { GetServerSidePropsContext, PreviewData } from 'next';

export type TBinary = 0 | 1;

export type TStringMap = { [key: string]: string };

export type TObjectMap<T = object> = { [key: string]: T };

export type TCssSize =
  | `${number}${'px' | '%' | 'em' | 'rem' | 'vw' | 'vh'}`
  | 'auto';

export interface IRedirect<T> {
  redirect: {
    permanent: boolean;
    destination: string;
  };
  props?: T;
}

export interface IServerProps<T> {
  serverProps: T;
}

export type TNextCtx = GetServerSidePropsContext<
  ParsedUrlQuery,
  PreviewData
> | null;
