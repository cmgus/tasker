import React, { useState } from 'react'
import { Column, Card, Container, Section, Field, Textarea, Button, Delete, Box, Media } from 'rbx'
import { useUser, useFirestore, useFirestoreCollectionData } from 'reactfire'

export const Tasks = () => {
    const user = useUser()
    const [newTask, setNewTask] = useState({ name: '', done: false, uid: user.uid })
    const tasksCollection = useFirestore().collection('tasks')
    const tasks = useFirestoreCollectionData(tasksCollection.where('uid', '==', user.uid))
    const saveTask = async () => {
        console.log(newTask);
        await tasksCollection.doc().set(newTask)
        setNewTask({ name: '', done: false, uid: user.uid })
    }
    const handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget
        setNewTask({ ...newTask, [name]: value })
    }
    return (
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
                            <Box textColor="success">
                                <Media>
                                    <Media.Item align="content">
                                        {task.name}
                                    </Media.Item>
                                    <Media.Item align="right" marginless>
                                        <Delete />
                                    </Media.Item>
                                </Media>
                            </Box>
                            {/* <Card>
                                <Card.Header className="is-justify-content-end" paddingless>
                                    <Card.Header.Icon>
                                        <Delete />
                                    </Card.Header.Icon>
                                </Card.Header>

                                <Card.Content
                                    backgroundColor={`${task.done ? 'success' : 'white'}`}
                                    textColor={`${task.done ? 'white' : 'black'}`}>
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
                            </Card> */}
                        </Column>
                    ))}
                </Column.Group>
            </Container>
        </Section>
    )
}
