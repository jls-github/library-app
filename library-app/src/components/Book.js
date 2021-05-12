import React from 'react'

const Book = ({title, author}) => {

    // // const title = props.title
    // // const author = props.author

    // const {title, author} = props
    console.log(title)
    console.log(author)

    return (
        <div>
            <p>{title}</p>
            <p>By: {author ?? "Unknown"}</p>
        </div>
    )
}

export default Book