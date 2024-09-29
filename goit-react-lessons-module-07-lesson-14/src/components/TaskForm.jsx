import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { selectTasks } from '../redux/tasks/tasksSelector';

export const TaskForm = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    const [text, setText] = useState('');

    const handleTextChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(text.trim()===''){
            return;
        }

        const existingTask = tasks.find(
            task => task.text.toLowerCase() === text.toLowerCase()
        );

        if(existingTask){
            alert(`${text} is already in tasks`);
            return;
        }
        // addTask({
        //     text: text.trim(),
        // })

        // dispatch(addTask({ text: text }));
        // dispatch(addTask({ text }));

        setText('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>Name</p>
                <input
                    type="text"
                    name="text"
                    // add \ before - in [' \-] to make it work (LMS)
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                    required
                    value={text}
                    onChange={handleTextChange}
                />               
            </label>
            <button
                    type="submit">Add</button>
        </form>
    )

}