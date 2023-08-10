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
    const [newLink, setNewLink] = useState("");
    
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }
 
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
                        {
                            links.map((link, index) =>(
                                <NoteItem
                                    key={index}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                /> 
                            ))
                        }
                        <NoteItem 
                            isNew 
                            placeholder='New link'
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title='Markers'>
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={index} 
                                        value={tag}
                                        onClick={() => {}}
                                    />

                                ))

                            }

                            <NoteItem 
                                isNew 
                                placeholder='New tag'
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button title='Salve'/>
                </Form>
            </main>
        </Container>
    );
}