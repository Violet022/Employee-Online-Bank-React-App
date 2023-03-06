import React from "react";
import {Form, Button, Card} from 'react-bootstrap';

function NewEmployeeCreationForm() {
    return (
        <Card className="mb-4 mx-auto" style={{ width: '800px' }}>
            <Card.Body>
                <h3 className="text-center">Создать нового сотрудника</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control type="text" placeholder="Введите имя сотрудника" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>Фамилия</Form.Label>
                        <Form.Control type="password" placeholder="Введите фамилию сотрудника" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Создать
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default NewEmployeeCreationForm;