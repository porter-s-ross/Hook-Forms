import React, {useState} from 'react'


const Form = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })


    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    }


    return(
        <div>
            <form className='w-25 p-3 border border-dark mx-auto my-3 mt-5 mb-5'>
                <div class="form-group">
                    <label>First Name</label>
                    <input name="firstName" type="text" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input name="lastName" type="text" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input name="email" type="text" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input name="password" type="text" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input name="confirmPassword" type="text" className="form-control" onChange={onChangeHandler}/>
                </div>
            </form>
            <div>
                <h3>Your form data: </h3>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password: {form.password}</p>
                <p>Confirm Password: {form.confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form;