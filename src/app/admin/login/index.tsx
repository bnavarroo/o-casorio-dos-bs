import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { withLoader } from '@utilities/hoc/with-loader';
import { IInjectedProps } from '@utilities/hoc/with-loader/types';
import { Input } from '@styles/ui/input';
import { ErrorBox } from '@shared/components/error-box';
import { onSubmit } from './helpers';
import * as Styled from './styles';

const AdmLogin: React.FC<IInjectedProps> = ({ setLoading }) => {
  const [error, setError] = useState<string>('');
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Styled.Title>
        Informe os dados de usuário e senha para prosseguir
      </Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onSubmit(setError, setLoading))}>
        <Styled.FieldWrapper>
          <label htmlFor="username">Usuário</label>
          <Input type="text" {...register('username', { required: true })} />
        </Styled.FieldWrapper>
        <Styled.FieldWrapper>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            {...register('password', { required: true })}
          />
        </Styled.FieldWrapper>
        <Styled.Button type="submit">Entrar</Styled.Button>
      </Styled.Form>
      {error && (
        <Styled.ErrorWrapper>
          <ErrorBox title={error} />
        </Styled.ErrorWrapper>
      )}
    </>
  );
};

export default withLoader(AdmLogin);
