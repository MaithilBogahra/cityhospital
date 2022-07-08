import { Form, Formik, useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import * as yup from 'yup';

function Appoinment(props) {
    const history = useHistory()
    const [update, setUpdate] = useState(false)


    let schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.number().required().positive().integer(),
        department: yup.string().required(),
        message: yup.string().required(),
        date: yup.date().required("Enter valid date")

    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            department: '',
            message: '',
            date: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if (update) {
                handleUpdateData(values)
            } else {
                handleInsert(values);
            }

            // history.push("/list_appointment")
            // alert(JSON.stringify(values, null, 2));
        },
    });

    const handleInsert = (values) => {
        const localData = JSON.parse(localStorage.getItem('apt'));

        let id = Math.floor(Math.random() * 1000);

        const data = {
            id: id,
            ...values
        }
        if (localData === null) {
            localStorage.setItem('apt', JSON.stringify([data]));
        } else {
            localData.push(data);
            localStorage.setItem('apt', JSON.stringify(localData));
        }
        history.push("/list_appointment");
    }

    useEffect(() => {

        let localData = JSON.parse(localStorage.getItem('apt'));

        if (props.location.state !== null && props.location.state !== undefined) {

            let edata = localData.filter((e) => e.id === props.location.state.id);
            if (edata !== null) {
                formik.setValues(edata[0]);
            }

            setUpdate(true)
             history.replace();
        }
       
    }, []);

    const handleUpdateData = (values) => {
        let localData = JSON.parse(localStorage.getItem('apt'));

        let udata = localData.map((l) => {
            if (l.id === values.id) {
                return values;
            } else {
                return l;
            }
        })
        localStorage.setItem('apt', JSON.stringify(udata));
        history.replace();
        formik.resetForm();
        setUpdate(false);
        history.push('/list_appointment');

    }

    const { errors, handleChange, handleSubmit, handleBlur, touched, values } = formik;

    return (

        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>

                <div className='row'>
                    <div className='col-6 text-center'>
                        <NavLink exact className="nav-link scrollto maithil" to={"/appointment"}>Book Appoinment</NavLink>
                    </div>
                    <div className='col-6 text-center'>
                        <NavLink exact className="nav-link scrollto maithil" to={"/list_appointment"}>List Appoinment</NavLink>
                    </div>
                </div>
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input
                                    value={values.name}
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
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    value={values.email}
                                    type="email"
                                    className="form-control"
                                    name="email" id="email"
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
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input
                                    value={values.phone}
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && touched.phone ? (
                                    <p>{errors.phone}</p>
                                ) : (
                                    ""
                                )}
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input
                                    value={values.date}
                                    type="date"
                                    name="date"
                                    className="form-control datepicker"
                                    id="date"
                                    placeholder="Appointment Date"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.date && touched.date ? (
                                    <p>{errors.date}</p>
                                ) : (
                                    ""
                                )}
                                <div className="validate" />
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select
                                    value={values.department}
                                    name="department"
                                    id="department"
                                    className="form-select"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                {errors.department && touched.department ? (
                                    <p>{errors.department}</p>
                                ) : (
                                    ""
                                )}
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea
                                value={values.message}
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder="Message (Optional)"
                                defaultValue={""}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.message && touched.message ? (
                                <p>{errors.message}</p>
                            ) : (
                                ""
                            )}
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>

                        {
                            update ?
                                <div className="text-center">
                                    <button type="submit">Update an Appointment</button>
                                </div>
                                :
                                <div className="text-center">
                                    <button type="submit">Make an Appointment</button>
                                </div>
                        }

                    </Form>
                </Formik>
            </div>
        </section>

    );
}

export default Appoinment;