import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Form } from './styles';


export function NewNote() {
    const [links, setLinks] = useState([]);
 
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <Link to='/'>Back</Link>
                    </header>

                    <Input placeholder='Title'/>
                    <Textarea placeholder='Observations'/>

                    <Section title='Useful links'>
                        <NoteItem value='https://rocketseat.com.br'/>
                        <NoteItem isNew placeholder='New link'/>
                    </Section>

                    <Section title='Markers'>
                        <div className='tags'>
                            <NoteItem value='react'/>
                            <NoteItem isNew placeholder='New tag'/>
                        </div>
                    </Section>

                    <Button title='Salve'/>
                </Form>
            </main>
        </Container>
    );
}