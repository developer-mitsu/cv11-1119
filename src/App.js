import React from 'react';
import Form from './Form'
import List from './List';

const App = () => {
    const [todos, setTodos] = React.useState([
        '宿題をする',
        '夕飯を作る',
        '蟹を食べる'
    ])

    return (
        <div>
            <Form />
            <List todos={todos} />
        </div>
    )
}

export default App