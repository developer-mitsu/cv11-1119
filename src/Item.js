import React from 'react'

const Item = (props) => {
    // react-hooks
    const [isDone, setIsDone] = React.useState(false)

    const toggleIsDone = () => setIsDone(!isDone)

    const buttonText = isDone? '完了済み':'完了！'
    return (
        <li>
            <p>{props.desc}</p>
            <button onClick={toggleIsDone}>{buttonText}</button>
        </li>
    )    
}

export default Item








