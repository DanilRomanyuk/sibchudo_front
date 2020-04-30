import React, {Component} from "react";
import {ErrorMessage, Field, Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";
import {BASE_URL} from "../../../../const";
import AbstractPage from "../../AbstractPage/AbstractPage";
import "./AdminAuthPage.css";
import Button from "../../../BaseElements/Button/Button";

class AdminAuthPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
    }

    render() {
        return (
            <AbstractPage title={'Главная - Вход'}>
                <Formik
                    initialValues={{username: '', password: ''}}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required(),
                        password: Yup.string().required()
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        axios.post(BASE_URL + "/api/login/check", values).then((result) => {
                            document.location.href = "/admin/main";
                        }).catch((error) => {
                            this.setState({error:"Не удалось войти"})
                        })
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleSubmit,
                      }) => (
                        <form className={"auth_form"}>
                            <Field className={"form-input"} name="username" type="text" placeholder="Логин"/>
                            <ErrorMessage name="email" component="div"/>
                            <Field className={"form-input"} name="password" type="password" placeholder="Пароль"/>
                            <ErrorMessage name="password" component="div" className={"error_message"}/>
                            <div className={"error_message"}>{this.state.error}</div>
                            <Button onClick={handleSubmit} className={"auth_form"} color={"green"}>Войти</Button>
                        </form>
                    )}
                </Formik>
            </AbstractPage>
        );
    }
}

export default AdminAuthPage;
