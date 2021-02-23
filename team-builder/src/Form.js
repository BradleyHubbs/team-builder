import React from 'react'

export default function Form(props){
    const { values, update, submit } = props

    const onChange = evt => {
        const{name, value} = evt.target
        update(name, value)
    }
        
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Name:
                    <input
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onChange}
                        placeholder='Enter Your Name'
                    />
                </label>
                <label>Email:
                    <input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={onChange}
                        placeholder='name@email.com'
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>Select Role</option>
                        <option value='Web Developer'>Web Developer</option>
                        <option value='Software Engineer'>Software Engineer</option>
                        <option value='Student'>Student</option>
                        <option value='Other'>Other</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}