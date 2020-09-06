import React, {Component} from "react";
import * as Yup from "yup";
import Axios from "axios";
import {Field, Formik} from "formik";
import InputForField from "../../../../BaseElements/Inputs/InputForField/InputForField";
import BreedSelect from "../../../../BaseElements/Inputs/SelectForField/BreedSelect/BreedSelect";
import BaseColorSelect from "../../../../BaseElements/Inputs/SelectForField/BaseColorSelect/BaseColorSelect";
import ColorCodeSelect from "../../../../BaseElements/Inputs/SelectForField/ColorCodeSelect/ColorCodeSelect";
import LitterSelect from "../../../../BaseElements/Inputs/SelectForField/LitterSelect/LitterSelect";
import StatusSelect from "../../../../BaseElements/Inputs/SelectForField/StatusSelect/StatusSelect";
import CommunitySelect from "../../../../BaseElements/Inputs/SelectForField/CommunitySelect/CommunitySelect";
import GenderSelect from "../../../../BaseElements/Inputs/SelectForField/GenderSelect/GenderSelect";
import OwnerSelect from "../../../../BaseElements/Inputs/SelectForField/OwnerSelect/OwnerSelect";
import TitleSelect from "../../../../BaseElements/Inputs/SelectForField/TitleSelect/TitleSelect";
import ClassSelect from "../../../../BaseElements/Inputs/SelectForField/ClassSelect/ClassSelect";
import Button from "../../../../BaseElements/Button/Button";
import {API} from "../../../../../const";
import "./CatEditForm.css";

class CatEditForm extends Component {

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
            name: '',
            color: {
                breed: null,
                baseColor: null,
                baseColorAdditional: null,
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
            catClass: null
        };
        if (this.props.cat) {
            values = this.templateDataSet(values, this.props.cat);
        }
        return (
            <Formik
                enableReinitialize={true}
                initialValues={values}
                validationSchema={Yup.object().shape({
                    id: Yup.number().nullable(true),
                    name: Yup.string().required(),
                    color: Yup.object().shape({
                        breed: Yup.number().required(),
                        baseColor: Yup.number().required(),
                        baseColorAdditional: Yup.number().nullable(true),
                        code0: Yup.number().nullable(true),
                        code1: Yup.number().nullable(true),
                        code2: Yup.number().nullable(true),
                        code3: Yup.number().nullable(true),
                        tail: Yup.number().nullable(true),
                        eyes: Yup.number().nullable(true),
                        ears: Yup.number().nullable(true)
                    }),
                    litter: Yup.number().required(),
                    status: Yup.string().required(),
                    community: Yup.number().nullable(true),
                    gender: Yup.string().required(),
                    owner: Yup.number().nullable(true),
                    title: Yup.number().nullable(true),
                    catClass: Yup.number().nullable(true)
                })}
                onSubmit={(values, {setSubmitting}) => {
                    if (values.id) {
                        Axios.put(API.CAT(values.id), values).then(() => {
                            this.props.modal.closeModal();
                            alert("Котик отредактирован");
                        }).catch((e) => {
                            console.log(e);
                            alert("Произошла ошибка при обновлении");
                        });
                    } else {
                        Axios.post(API.CAT(), values).then(() => {
                            this.props.modal.closeModal();
                            alert("Котик добавлен");
                        }).catch((e) => {
                            console.log(e);
                            alert("Произошла ошибка при создании");
                        });
                    }
                }}
            >
                {({setFieldValue, handleSubmit, resetForm, setValues}) => (
                    <form className={"form"} onSubmit={handleSubmit}>
                        <h3>Форма создания или обновления котика</h3>
                        <Field
                            name="name"
                            component={InputForField}
                            placeholder="Имя"/>
                        <Field
                            name="litter"
                            component={LitterSelect}
                            placeholder="Помет"/>
                        <Field
                            name="status"
                            component={StatusSelect}
                            placeholder="Статус"/>
                        <Field
                            name="community"
                            component={CommunitySelect}
                            placeholder="Питомник"/>
                        <Field
                            name="gender"
                            component={GenderSelect}
                            placeholder="Пол"/>
                        <Field
                            name="owner"
                            component={OwnerSelect}
                            placeholder="Хозяин"/>
                        <Field
                            name="title"
                            component={TitleSelect}
                            placeholder="Титул"/>
                        <Field
                            name="catClass"
                            component={ClassSelect}
                            placeholder="Класс"/>
                        <br/>
                        <div>
                            <h4>Окрас</h4>
                            <Field
                                name="color.breed"
                                component={BreedSelect}
                                placeholder="Порода"/>
                            <Field
                                name="color.baseColor"
                                component={BaseColorSelect}
                                placeholder="Основной цвет"/>
                            <Field
                                name="color.baseColorAdditional"
                                component={BaseColorSelect}
                                placeholder="Дополнительный цвет"/>
                            <Field
                                name="color.code0"
                                params={{custom: {firstNumber: 0}}}
                                component={ColorCodeSelect}
                                placeholder="Код окраса начинающийся с 0"/>
                            <Field
                                name="color.code1"
                                params={{custom: {firstNumber: 1}}}
                                component={ColorCodeSelect}
                                placeholder="Код окраса начинающийся с 1"/>
                            <Field
                                name="color.code2"
                                params={{custom: {firstNumber: 2}}}
                                component={ColorCodeSelect}
                                placeholder="Код окраса начинающийся с 2"/>
                            <Field
                                name="color.code3"
                                params={{custom: {firstNumber: 3}}}
                                component={ColorCodeSelect}
                                placeholder="Код окраса начинающийся с 3"/>
                            <Field
                                name="color.tail"
                                params={{custom: {firstNumber: 5}}}
                                component={ColorCodeSelect}
                                placeholder="Код типа хвоста"/>
                            <Field
                                name="color.eyes"
                                params={{custom: {firstNumber: 6}}}
                                component={ColorCodeSelect}
                                placeholder="Код цвета глаз"/>
                            <Field
                                name="color.ears"
                                params={{custom: {firstNumber: 7}}}
                                component={ColorCodeSelect}
                                placeholder="Код типа ушей"/>
                        </div>
                        <Button color={"white"}>Сохранить</Button>
                    </form>

                )}
            </Formik>
        );
    }
}

export default CatEditForm;
