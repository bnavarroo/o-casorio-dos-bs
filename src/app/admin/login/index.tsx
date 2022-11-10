import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@styles/ui/input';
import { Loader } from '@shared/components/loader';
import { ErrorBox } from '@shared/components/error-box';
import { onSubmit } from './helpers';
import * as Styled from './styles';

const AdmLogin: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const { register, handleSubmit } = useForm();

  return (
    <>
      <Styled.Title>Área Administrativa</Styled.Title>
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
      {loading && <Loader />}
    </>
  );
};

export default AdmLogin;
