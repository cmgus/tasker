import React, { useState } from 'react'
import { Column, Card, Container, Section, Field, Textarea, Button } from 'rbx'
import { NavbarApp } from '../components/NavbarApp'

const testTasks = [
    {
        name: 'Take Over the world',
        done: false
    },
    {
        name: 'Make a awesome app',
        done: false
    },
    {
        name: 'Take Over the world',
        done: true
    },
    {
        name: 'Make a awesome app',
        done: true
    },
    {
        name: 'Take Over the world',
        done: false
    },
    {
        name: 'Make a awesome app',
        done: false
    }
]

export const Tasks = () => {
    const [newTask, setNewTask] = useState({ name: '', done: false })
    const [tasks, setTasks] = useState([...testTasks])
    const saveTask = () => {
        console.log(newTask);
        setTasks([newTask, ...tasks])
        setNewTask({ name: '', done: false })
    }
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setNewTask({ ...newTask, [name]: value })
    }
    return (
        <>
            <NavbarApp />
            <Section>
                <Container>
                    <Column.Group multiline>
                        <Column size="3">
                            <Card>
                                <Card.Content>
                                    <Field>
                                        <Textarea name="name" rows="2" onChange={handleChange} value={newTask.name} placeholder="Description" />
                                    </Field>
                                    <Button.Group className="is-justify-content-end">
                                        <Button color="light">Cancel</Button>
                                        <Button color="black" onClick={saveTask}>Save Task</Button>
                                    </Button.Group>
                                </Card.Content>
                            </Card>
                        </Column>
                        {tasks.map((task, i) => (
                            <Column size="3" key={i}>
                                <Card>
                                    <Card.Content 
                                        backgroundColor={`${task.done ? 'success-light' : ''}`} 
                                        textColor={`${task.done ? 'success' : 'd'}`}>
                                        {task.name}
                                    </Card.Content>
                                    <Card.Footer as="footer">
                                        <Card.Footer.Item className="button is-text">
                                            Done
                                        </Card.Footer.Item>
                                        <Card.Footer.Item className="button is-text">
                                            Delete
                                        </Card.Footer.Item>
                                    </Card.Footer>
                                </Card>
                            </Column>
                        ))}
                    </Column.Group>
                </Container>
            </Section>
        </>
    )
}
