import { useState } from 'react';
import { Loader } from '@shared/components/loader';
import { IInjectedProps } from './types';

export const withLoader = <P extends IInjectedProps>(
  Component: React.ComponentType<P>
) => {
  const WrappedComponent = (props: Omit<P, keyof IInjectedProps>) => {
    const [loading, setLoading] = useState<boolean>(false);
    const injectedProps = { loading, setLoading };

    return (
      <>
        <Component {...(props as P)} {...injectedProps} />
        {loading && <Loader />}
      </>
    );
  };

  return WrappedComponent;
};
