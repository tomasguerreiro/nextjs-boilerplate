import Head from 'next/head';
import React from 'react';
import { Container, Form, Input, useForm } from 'simple-design-react';
import PageWrapper from '../../templates/PageWrapper/Index';

const Contato = () => {
  const {
    inputs,
    erros,
    handleInputChange,
    handleFormSubmit,
    handleFormRest,
    register,
  } = useForm(handleSubmit, {});

  function handleSubmit(data: any, ev: any) {
    console.log(data);
    handleFormRest();
  }

  return (
    <PageWrapper>
      <Head>
        <title>Contato | Next.js + TypeScript Example</title>
      </Head>
      <Container>
        <h1>Página de Contado</h1>
        <Form>
          <Input
            type="text"
            name="nome"
            value={inputs.nome || ''}
            onChange={handleInputChange}
            label="Nome"
            validation={{ required: true }}
            message={
              erros.nome ? erros.nome : 'Seu nome esta seguro com a gente'
            }
            hasError={erros.nome ? true : false}
            // icon={<FaUserAlt />}
          />
        </Form>
      </Container>
    </PageWrapper>
  );
};

export default Contato;
