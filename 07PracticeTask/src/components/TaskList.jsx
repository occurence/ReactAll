import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, selectIsLoading, selectError } from '../redux/tasks/tasksSelector';
import { fetchTasks, addTask, deleteTask } from '../redux/tasks/tasksOperations';

export const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectError);
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);
    const handleText = e => {
        setText(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(text.trim()===''){return;}
        const existingTask = tasks.find(
            task => task.text.toLowerCase() === text.toLowerCase());
        if(existingTask){
            alert(`${text} is already in tasks`);
            return;}
        dispatch(addTask({ text }));
        setText('');
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{ display: "flex", gap: "30px"}}>
                    <span>Add Task</span>
                    <input
                        type="text"
                        name="text"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
                        value={text}
                        onChange={handleText}
                    />
                    <button>Add</button>
                </label>
            </form>

            {isLoading && <p>Loading...</p>}
            {isError && <p>Error...</p>}
            {tasks.length === 0 && <p>Tasks empty</p>}
            {tasks.length > 0 && (
                <ul>
                    {tasks.map(({ id, text}) =>(
                        <li key={id} style={{ display: "flex", gap: "30px"}}>{text}
                            <button onClick={() => dispatch(deleteTask(id))}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}