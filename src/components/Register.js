import React from "react";
import {Form, Field, withFormik} from "formik/dist/index";
import * as Yup from "yup";
import {connect} from "react-redux";

import {userRegister} from '../store/auth/Actions';



const RegisterForm = () => {
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
                  <li>Confirm Password</li>
                </ul>
              </div>
              <div classname="values">
                <Field className="input" type="text" name="username" />
                <Field className="input" type="password" name="password1" />
                <Field className="input" type="password" name="password2" />
              </div>
            </div>
            <div className="btn-container">
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, password1, password2 }) {
        return {
            username: username || "",
            password1: password1 || "",
            password2: password2 || "",
        };
    },

    validationSchema: () => {
        const schema = {};
        schema.username = Yup.string().required("Please enter a username");
        schema.password1 = Yup.string().required("Please enter a password");
        schema.password2 = Yup.string().required("Please confirm your password");
        
        return Yup.object().shape(schema);
    },

    handleSubmit(values, {props}) {
        return(
            props.userRegister(values)
        ) 
    }

})(RegisterForm);

const mapStateToProps = state =>{
    return {
        err: state.registerReducer.error
    };
};


export default connect(mapStateToProps,{userRegister})(FormikRegisterForm);