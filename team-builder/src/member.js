import React from 'react'

export default function Member(props){
    const { details } = props

    return(
        <div className='member-container'>
            <p>Name: {details.name}</p>
            <p>Email: {details.email}</p>
            <p>Role:{details.role}</p>
        </div>
    )

}