import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import './Form.css';

function FormL(props) {

  const [usertype, Setusertype] = useState('Login');
  const [password, setpassword] = useState(false);

  let LoginSchema, SignupSchema, PasswordSchema, initVal;

  if (usertype == 'Login') {
    LoginSchema = {
      email: yup.string().email("Invalid email address format").required("Email is required"),
      password: yup.string().required("Password is required")
    };
    initVal = {
      email: '',
      password: ''
    }
  } else if (usertype == 'Signup') {
    SignupSchema = {
      name: yup.string().required("name is required"),
      email: yup.string().email("Invalid email address format").required("Email is required"),
      password: yup.string().required("Password is required")
    };
    initVal = {
      name: '',
      email: '',
      password: ''
    }
  } else {
    PasswordSchema =
      { email: yup.string().email("Invalid email address format").required("Email is required") }
    initVal = {
      email: ''
    }
  }

  let Schema = yup.object().shape(LoginSchema, PasswordSchema, SignupSchema);


  const formikobj = useFormik({
    initialValues: initVal,
    validationSchema: Schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { errors, handleChange, handleSubmit, handleBlur, touched } = formikobj;

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          {
            password ?
              <h2>Forgot Password</h2>
              :
              usertype === 'Login' ?
                <h2>Login</h2>
                :
                <h2>Signup</h2>
          }

        </div >
        <Formik values={formikobj}>
          <Form mathod="post" onSubmit={handleSubmit} className="php-email-form">
            <div >
              <div className="row contain">

                {
                  usertype === 'Signup' ?
                    <div className="col-md-4 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name ? (
                        <p>{errors.name}</p>
                      ) : (
                        ""
                      )}
                    </div>
                    :
                    null
                }
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <p>{errors.email}</p>
                  ) : (
                    ""
                  )}
                  <div className="validate" />
                </div>
              </div>
              <div className="row">
                {
                  password ?
                    null : <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password ? (
                        <p>{errors.name}</p>
                      ) : (
                        ""
                      )}
                      <div className="validate" />
                    </div>
                }
              </div>
              {
                usertype === 'Login' && password === false ?
                  <>
                    <a
                      type="submit"
                      onClick={() => Setusertype('Signup')}>
                      Create an account ?
                    </a><br />
                    <a
                      type="submit"
                      onClick={() => setpassword(true)}>
                      Forgot Password ?
                    </a>
                  </>
                  :
                  password === true ?
                    <a
                      type="submit"
                      onClick={() => setpassword(false)}>
                      Remember your password !
                    </a> :
                    <a
                      type="submit"
                      onClick={() => Setusertype('Login')}>
                      Already an account ?
                    </a>

              }
            </div>

            <div className="row">
              {
                password ?
                  <div
                    className="text-center">
                    <button
                      type="submit">
                      Forgot
                    </button>
                  </div>
                  :
                  usertype === 'Login' ?
                    <div
                      className="text-center">
                      <button
                        type="submit">
                        Login
                      </button>
                    </div>
                    :
                    <div
                      className="text-center">
                      <button
                        type="submit">
                        Signup
                      </button>
                    </div>
              }
            </div>
          </Form>
        </Formik>
      </div>
    </section>

  );
}


export default FormL;