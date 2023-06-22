import { AbsoluteCenter, Box, Button, Heading, Input, Stack } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';
import { FirebaseRepository } from '../../../../repositories/firebase.repository';

export function SignUp() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signUpResponse = await FirebaseRepository.signUpUser({ email, name, surname, password });
  };

  return (
    <Box h="100%">
      <AbsoluteCenter maxWidth="500px" minWidth="300px">
        <Box pb="50px">
          <Box px="4" py="2" borderWidth="2px" borderRadius="none" borderColor="black">
            <Heading as="h3" size="lg">
              auto-repair
            </Heading>
          </Box>
        </Box>
        <Box pb="50px">
          <Heading>registro</Heading>
        </Box>
        <Box>
          <form onSubmit={() => onSubmitSignUp}>
            <Stack spacing={3}>
              <Input placeholder="Nombre" value={name} onChange={(event) => setName(event.target.value)} />
              <Input placeholder="Apellido" value={surname} onChange={(event) => setSurname(event.target.value)} />
              <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Input placeholder="Confirma password" type="password" />
              <Button variant="solid" mt="4" type="submit">
                Registrar
              </Button>
            </Stack>
          </form>
        </Box>
      </AbsoluteCenter>
    </Box>
  );
}
