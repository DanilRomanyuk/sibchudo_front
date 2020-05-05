import React, {Component} from "react";
import axios from "axios";
import {Field, Formik} from "formik";
import InputForField from "../../../../BaseElements/Inputs/InputForField/InputForField";
import Button from "../../../../BaseElements/Button/Button";
import {BASE_URL} from "../../../../../const";

class LitterEditForm extends Component {

    templateDataSet(template, data) {
        for (let key in template) {
            if (typeof template[key] === "object" && template[key]) {
                template[key] = this.templateDataSet(template[key], data[key]);
            } else {
                if (typeof data[key] === "object" && data[key]) {
                    template[key] = data[key].id;
                } else {
                    template[key] = data[key];
                }
            }
        }
        return template;
    }

    render() {
        let vals = {
            id: null,
            name: '',
            color: {
                breed: null,
                base_color: null,
                base_color_additional: null,
                code0: null,
                code1: null,
                code2: null,
                code3: null,
                tail: null,
                eyes: null,
                ears: null,
            },
            litter: null,
            status: "",
            community: null,
            gender: null,
            owner: null,
            title: null,
            cat_class: null
        };
        if (this.props.cat) {
            vals = this.templateDataSet(vals, this.props.cat);
        }
        return (
            <Formik
                enableReinitialize={true}
                initialValues={vals}
                // validationSchema={Yup.object().shape({
                //     id: Yup.number().nullable(true),
                //     name: Yup.string().required(),
                //     litter: Yup.number().required(),
                //     status: Yup.string().required(),
                //     community: Yup.number().nullable(true),
                //     gender: Yup.string().required(),
                //     owner: Yup.number().nullable(true),
                //     title: Yup.number().nullable(true),
                //     cat_class: Yup.number().nullable(true)
                // })}
                onSubmit={(values, {setSubmitting}) => {
                    if (values.id) {
                        axios.post(BASE_URL + "/api/litter/" + this.props.cat.id + "/edit", values).then(() => {
                            this.props.handler(JSON.stringify(values));
                            alert("Помет изменен");
                        })
                    } else {
                        axios.post(BASE_URL + "/api/litter/create", values).then(() => {
                            this.props.handler(JSON.stringify(values));
                             alert("Помет создан");
                        })
                    }
                }}
            >
                {({setFieldValue, handleSubmit, resetForm, setValues}) => (
                    <form className={"form"} onSubmit={handleSubmit}>
                        <h3>Форма создания или обновления помета</h3>
                        <Field
                            name="letter"
                            component={InputForField}
                            placeholder="Буква"/>
                        <Field
                            name="birthday"
                            component={InputForField}
                            placeholder="Дата рождения"/>
                        <Field
                            name="mother"
                            component={InputForField}
                            placeholder="Мать"/>
                        <Field
                            name="father"
                            component={InputForField}
                            placeholder="Отец"/>
                        <Field
                            name="community"
                            component={InputForField}
                            placeholder="Питомник"/>
                        <br/>
                        <Button color={"white"}>Сохранить</Button>
                    </form>
                )}
            </Formik>
        );
    }
}

export default LitterEditForm;
