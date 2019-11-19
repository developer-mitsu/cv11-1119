import React from 'react'

import Item from './Item';

const List = (props) => {
    const todos = props.todos.map((todo, i) => (
        // ['宿題をする','夕飯を作る']
        // ⇩
        // [
        // <Item desc='宿題をする'></Item>,
        // <Item desc='夕飯を作る'></Item>
        // ]

        <Item 
            // ※keyはpropsとして参照できない
            key={i}

            desc={todo}
        />

    ))
    return (
        <ol>
            {todos}
        </ol>
    )
}

export default List



