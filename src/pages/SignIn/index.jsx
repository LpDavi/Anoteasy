import { Container, Form, Background } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Button } from '../../components/Button';
import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';


export function SignIn() {
    const data = useAuth();
    console.log('meu contexto', data);
    return (
        <Container>
            <Form>
                <h1>Anote Easy</h1>
                <p>Application to save and manage your useful links.</p>

                <h2>Login</h2>

                <Input 
                placeholder='E-mail'
                type='text'
                icon={FiMail}
                />

                <Input 
                placeholder='Password'
                type='password'
                icon={FiLock}
                />

                <Button title='Enter'/>

                <Link to='/register' >
                    Create account
                </Link>
            </Form>

            <Background />
        </Container>
    );
}