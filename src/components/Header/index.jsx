import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from './styles';

export function Header(){
    return(
        <Container>
            <Profile to='/profile'>
                <img src="https://github.com/LpDavi.png" alt="Foto do usuário" />

                <div>
                    <span>Welcome</span>
                    <strong>Davi Lima</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout> 
        </Container>
    );
}