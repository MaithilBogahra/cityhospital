import React, { useRef } from 'react';
import './Refexample.css'

function Refexample(props) {

    const nameref = useRef();
    const emailref = useRef();

    const handelClick = () => {
        console.log(nameref.current.value)
        emailref.current.focus();

    }
    return (
        <div className='name'>
            <div className="col-md-4 form-group name">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    ref={nameref}
                />

            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    ref={emailref}
                />
                <div className="validate" />
            </div>
            <button type="submit" onClick={() => handelClick()}>Submit</button>
        </div>
    );
}

export default Refexample;