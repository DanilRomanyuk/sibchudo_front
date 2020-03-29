import React, {Component} from "react";
import {ErrorMessage, Field, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {BASE_URL} from "../../../../const";

class AdminAuthPage extends Component {
    render() {
        return (
            <Formik
                initialValues={{username: '', password: ''}}
                validationSchema={Yup.object().shape({
                    username: Yup.string().required(),
                    password: Yup.string().required()
                })}
                onSubmit={(values, {setSubmitting}) => {
                    axios.post(BASE_URL+"/api/login/check", values).then((result) => {
                        alert("Вы успешно зашли в админ панель, нажмите ОК");
                        document.location.href = "/admin/main";
                    }).catch((error) => {
                        alert("Вы не смогли зайти в админ панель, попробуйте снова");
                    })
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleSubmit,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="username"
                            type="text"
                            placeholder="Username"
                        />
                        <br/>
                        <ErrorMessage
                            name="email"
                            component="div"
                        />
                        <br/>
                        <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        <br/>
                        <ErrorMessage
                            name="password"
                            component="div"
                        />
                        <br/>
                        <button type="submit">
                            Войти
                        </button>
                    </form>
                )}
            </Formik>
        );
    }
}

export default AdminAuthPage;