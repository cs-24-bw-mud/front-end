import React from "react";
import {Form, Field, withFormik} from "formik/dist/index";
import * as Yup from "yup";
import {connect} from "react-redux";

import {userRegister} from '../store/auth/Actions';



const RegisterForm = props => {

    return (
        <>
            <Form>
                <div className="form-container">
                        <h1 className="title">Sign Up</h1>
                    <div className="form-contents"> 
                        
                        <div className="inline">
                            <div className="labels">
                                <ul>
                                    <li>Username</li>
                                    <li>Password</li>
                                </ul>
                            </div>
                            <div classname="values">
                                <label className="error-holder">
                                    <Field className="regular-input" type="text" name="username"/>
                                    {props.touched.username && props.errors.username && (
                                        <p className="errormessage errormessage_positioning">{props.errors.username}</p>
                                    )}
                                </label>
                                <label className="error-holder">
                                    <Field className="regular-input" type="password" name="password"/>
                                    {props.touched.password && props.errors.password && (
                                        <p className="errormessage errormessage_positioning">{props.errors.password}</p>
                                    )}
                                </label>
                                
                            </div>
                        </div>
                        <div className="btn-container">
                            <button className="submit-btn" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </Form>
           
        </>
    );
};

const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },

    validationSchema: () => {
        const schema = {};
        schema.username = Yup.string().required("Please enter a username");
        schema.password = Yup.string().required("Please enter a password");
        
        return Yup.object().shape(schema);
    },

    handleSubmit(values) {
            userRegister(values); 
        }
})(RegisterForm);

const mapStateToProps = state =>{
    console.log(state)
    return {
        err: state.registerReducer.error
    };
};


export default connect(mapStateToProps,{userRegister})(FormikRegisterForm);