import React, { useState } from 'react';
import { TasksCollection } from '/imports/api/TasksCollection';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const TaskForm = () => {
    const [text, setText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if(!text) return;

        TasksCollection.insert({
            text: text.trim(),
            createdAt: new Date()
        });

        setText("");
    }

    return (
        <form className = "task-form" onSubmit={handleSubmit}>
            <TextField
            type = "text"
            placeholder = "Type to add new tasks"
            value = {text}
            onChange = {(e) => setText(e.target.value)}
            />

            <Button type = "submit">Add Task</Button>
        </form>
    );
};