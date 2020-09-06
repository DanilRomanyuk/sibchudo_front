import React, {Component} from "react";
import Axios from "axios";
import {Field, Formik} from "formik";
import Button from "../../../../BaseElements/Button/Button";
import {API} from "../../../../../const";
import * as Yup from "yup";
import CommunitySelect from "../../../../BaseElements/Inputs/SelectForField/CommunitySelect/CommunitySelect";
import LetterSelect from "../../../../BaseElements/Inputs/SelectForField/LetterSelect/LetterSelect";
import DateField from "../../../../BaseElements/Inputs/DateField/DateField";
import CatSelect from "../../../../BaseElements/Inputs/SelectForField/CatSelect/CatSelect";
import {litterUpdater} from "../AdminLittersPage";

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
        let values = {
            id: null,
            birthday: null,
            cats: [],
            community: null,
            father: null,
            letter: null,
            mother: null
        };
        if (this.props.litter) {
            values = this.templateDataSet(values, this.props.litter);
        }
        return (
            <Formik
                enableReinitialize={true}
                initialValues={values}
                validationSchema={
                    Yup.object().shape({
                        id: Yup.number().nullable(true),
                        birthday: Yup.date().required(),
                        community: Yup.number().required(),
                        father: Yup.number().nullable(true),
                        mother: Yup.number().nullable(true),
                        letter: Yup.string().required(),
                    })}
                onSubmit={(values, {setSubmitting}) => {
                    if (values.id) {
                        Axios.put(API.LITTER(this.props.litter.id), values).then(() => {
                            litterUpdater();
                            this.props.modal.closeModal();
                        }).catch((e) => {
                            console.log(e);
                            alert("Произошла ошибка при обновлении");
                        });
                    } else {
                        Axios.post(API.LITTER(), values).then(() => {
                            litterUpdater();
                            this.props.modal.closeModal();
                        }).catch((e) => {
                            console.log(e);
                            alert("Произошла ошибка при создании");
                        });
                    }
                }}
            >
                {({setFieldValue, handleSubmit, resetForm, setValues}) => (
                    <form className={"form"} onSubmit={handleSubmit}>
                        <h3>Форма создания или обновления помета</h3>
                        <Field
                            name="letter"
                            component={LetterSelect}
                            placeholder="Буква"/>
                        <Field
                            name="birthday"
                            component={DateField}
                            placeholder="Дата рождения"/>
                        <Field
                            name="mother"
                            params={{
                                criteria: {
                                    gender: 'female'
                                },
                                order: {name: 'asc'}
                            }}
                            component={CatSelect}
                            placeholder="Мать"/>
                        <Field
                            name="father"
                            params={{
                                criteria: {
                                    gender: 'male'
                                },
                                order: {name: 'asc'}
                            }}
                            component={CatSelect}
                            placeholder="Отец"/>
                        <Field
                            name="community"
                            component={CommunitySelect}
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
