import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from "./styles";
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Link } from 'react-router-dom';


export function Profile() {
    return (
        <Container>
            <header>
                <Link to='/'>
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/LpDavi.png" 
                    alt="User photo" 
                    />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                        id='avatar'
                        type='file' 
                        />
                    </label>
                </Avatar>
                <Input
                    placeholder='Name'
                    type='text'
                    icon={FiUser}
                />

                <Input
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                />

                <Input
                    placeholder='Current password'
                    type='password'
                    icon={FiLock}
                />

                <Input
                    placeholder='New password'
                    type='password'
                    icon={FiLock}
                />

                <Button title='Save'/>
            </Form> 
        </Container>
    );
}