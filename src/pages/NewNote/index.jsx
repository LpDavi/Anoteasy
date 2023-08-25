import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { NoteItem } from '../../components/NoteItem';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Container, Form } from './styles';
import { api } from '../../services/api';

export function NewNote() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
 
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");
    
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

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

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewNote(){
        if(!title){
            return alert("Você deixou a nota sem título.");
        }

        if(newLink){
            return alert("Clique em adicionar em todos os links ou deixe o campo vazio.");
        }

        if(newTag){
            return alert("Clique em adicionar em todas as tags ou deixe o campo vazio.");
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso!");
        navigate("/");
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

                    <Input 
                        placeholder='Title'
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea 
                        placeholder='Observations'
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title='Useful Links'>
                        {
                            links.map((link, index) =>(
                                <NoteItem
                                    key={String(index)}
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

                    <Section title='Tags'>
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)} 
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
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

                    <Button 
                        title='Salve'
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    );
}