import './todo.scss'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export default function Todo() {
    return (
        <div className="box-todo-englobador">
            <div className="box-todo">

                <div className="head">
                    <h1>ToDo List</h1>
                    <AddCircleOutlineIcon className="add-task" />
                </div>

                <p>test</p>
            </div>
        </div>
    )

}