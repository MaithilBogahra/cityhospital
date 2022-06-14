import React, { useState } from 'react';
import './Form.css'

function FormL(props) {
  const [usertype, Setusertype] = useState('Login');
  const [password, setpassword] = useState(false)
  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          {
            usertype === 'Login' && password === false ?
              <h2>Login</h2> :
              password === true ?
                <h2>Forgot Password</h2> :
                <h2>Signup</h2>
          }

        </div >
        <div className="php-email-form">
          <div >
            <div className="row contain">
              {usertype === 'Signup' ? <div className="col-md-4 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div className="validate" />
              </div> : null}
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                <div className="validate" />
              </div>
            </div>
            <div className="row">
              {password === true ?
                null : <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="password" className="form-control" name="password" id="password" placeholder="Your password" />
                  <div className="validate" />
                </div>}
            </div>
            {
              usertype === 'Login' && password === false ?
                <>
                  <a type="submit" onClick={() => Setusertype('Signup')}>Create an account ?</a><br />
                  <a type="submit" onClick={() => setpassword(true)}>Forgot Password ?</a>
                </>
                : password === true ? <a type="submit" onClick={() => setpassword(false)}>Remember your password !</a> :
                  <a type="submit" onClick={() => Setusertype('Login')}>Already an account ?</a>

            }
          </div>

          <div className="row">
            {
              usertype === 'Login' ?
                <div className="text-center"><button type="submit">Login</button></div>
                :
                <div className="text-center"><button type="submit">Signup</button></div>
            }
          </div>
        </div>
      </div>
    </section>

  );
}


export default FormL;