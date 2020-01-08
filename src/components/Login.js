import React from 'react';
import {Form, Field, withFormik} from 'formik/dist/index';
import * as Yup from 'yup';
import {userLogin} from '../store/auth/Actions';
import { connect } from 'react-redux';

const LoginForm = () => {

return (
        <>
            <div className="login-container">
                <div className="form-container">
                    <Form className="form-contents">
                        <h1>Login</h1>
                        <label>Username
                            <Field className="form-inputs" type="text" name="username"/>
                        </label>
                        <label>Password
                            <Field className="form-inputs" type="password" name="password"/>
                        </label>
                        <div className="btn-container">
                            <button className="submit-btn" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter a username'),
        password: Yup.string().required('Enter a password')
    }),

    handleSubmit(values, {props}) {
        props.userLogin(values, props.history);
    }
})(LoginForm);

const mapStateToProps = state => {
    return {
        token: state.loginReducer.token,
        error: state.loginReducer.error
    };
};


export default connect(
    mapStateToProps,
    {userLogin}
)(FormikLoginForm);