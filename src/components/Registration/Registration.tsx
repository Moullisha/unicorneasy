import React, { FC, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import Button from '../customElements/Button';
import Input from '../customElements/Input';
import Checkbox from '../customElements/Checkbox';
import Dropdown from '../customElements/Dropdown';
import DropOption from '../customElements/DropOption';
import * as yup from 'yup';


// const SignupSchema


const Registration: React.FC = () => {

    
    const [username, setUsername] = useState("");

    const handleSubmit = (values: any, actions: any) => {
        console.log(`Email: ${values.email}. Password: ${values.password}. First Name: ${values.firstName}`)
        actions.resetForm();
    }

    return (
        <div>
            <Formik
                initialValues={{
                    username:'',
                    displayUsername: '',
                    password: '',
                    role: '',
                    isCorporate: false,
                    userProfile: {
                        firstName: '',
                        middleName: '',
                        lastName: '',
                        email: '',
                        address1: '',
                        address2: '',
                        address3: '',
                        city:'',
                        state: '',
                        pincode: '',
                        country: '',

                    }

                }}

                onSubmit={handleSubmit}

                
            >
                {(props: any) => (<Form>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <Field name="username"></Field>
                    </div>
                    <div>
                        <label htmlFor="displayUsername">Display User Name:</label>
                        <Field name="displayUsername"></Field>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <Field type="password" name="password"></Field>
                    </div>
                    <div>
                        <label htmlFor="role">Role:</label>
                        <Field type="text" name="role"></Field>
                    </div>
                    <div>
                        <label htmlFor="isCorporate">isCorporate:</label>
                        <Field type="radio" name="isCorporate"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.firstName">First Name:</label>
                        <Field type="text" name="userProfile.firstName"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.middleName">Middle Name:</label>
                        <Field type="text" name="userProfile.middleName"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.lastName">Last Name:</label>
                        <Field type="text" name="userProfile.lastName"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.email">Email:</label>
                        <Field type="email" name="userProfile.email"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.address1">Address 1:</label>
                        <Field type="text" name="userProfile.address1"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.address2">Address 2:</label>
                        <Field type="text" name="userProfile.address2"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.address3">Address 3:</label>
                        <Field type="text" name="userProfile.address3"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.city">City:</label>
                        <Field type="text" name="userProfile.city"></Field>
                    </div>
                    <div>
                        <label htmlFor="uderProfile.state">State:</label>
                        <Field type="text" name="userProfile.state"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.pincode">Pincode:</label>
                        <Field type="number" name="userProfile.pincode"></Field>
                    </div>
                    <div>
                        <label htmlFor="userProfile.country">Country:</label>
                        <Field type="text" name="userProfile.country"></Field>
                    </div>
                    <Button type="submit">Submit</Button>
                </Form>)}
            </Formik>
            {/* <Input
                type="text"
                id="name"
                name="name"
                value={username}
                placeholder="username"
                onChange={handleInput}></Input> */}
            {/* <Input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                value="check"
                onChange=
            ></Input> */}
            {/* <Checkbox></Checkbox>
            <Dropdown name="selectList" id="selectList">
                <DropOption value="opt1" ></DropOption>
            </Dropdown>
            <Button>Submit</Button> */}

        </div>
    )
}

export default Registration;