import React, { useState } from 'react';

import Input from '../../components/Input';

import { Container, Main, Sidebar, Form } from './style';

const CreateOrphanage: React.FC = () => {
  const [name, setName] = useState('');
  return (
    <Container>
      <Sidebar />
      <Main>
        <Form>
          <fieldset>
            <legend>Dados</legend>

            <Input
              name="name"
              label="Nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

          </fieldset>
        </Form>
      </Main>
    </Container>
  )
}

export default CreateOrphanage;
