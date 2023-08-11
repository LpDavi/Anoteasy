import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './style';

import { Input } from '../../components/Input';
import { Note } from '../../components/Note';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home() {
    const [tags, setTags] = useState([]);


    useEffect(() => {
        async function fetchTags(){
            const response = await api.get('/tags');
            setTags(response.data);
        }

        fetchTags();
    },[]);

    return (
        <Container>
            <Brand>
                <h1>AnotEasy</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        isactive 
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText 
                                title={tag.name} 
                            />
                        </li>
                    ))
                }
            </Menu>
            
            <Search>
                <Input placeholder="Search by title" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="My notes">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'Rockeseat'}
                        ]
                    }}
                    />
                    <Note data={{
                        title: 'Nodejs',
                        tags: [
                            {id: '3', name: 'nodejs'},
                            {id: '4', name: 'impacta'}
                        ]
                    }}/>
                </Section>
            </Content>

            <NewNote to='/NewNote'>
                <FiPlus />
                Create note
            </NewNote>  
        </Container>
    );
}