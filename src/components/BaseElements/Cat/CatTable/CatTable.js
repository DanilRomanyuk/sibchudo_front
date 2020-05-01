import React, {Component} from "react";
import {Table, Thead, Tbody, Tr, Th} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import CatTableCell from "./CatTableCell/CatTableCell";
import Button from "../../Button/Button";
import CatColor from "../CatColor/CatColor";
import CatGender from "../CatGender/CatGender";
import CatStatus from "../CatStatus/CatStatus";

class CatTable extends Component {

    catRow(cat) {
        return (
            <Tr key={cat.id}>
                <CatTableCell key={cat.id + "name"}>{cat.name}</CatTableCell>
                <CatTableCell key={cat.id + "gender"}>
                    <CatGender gender={cat.gender}/>
                </CatTableCell>
                <CatTableCell key={cat.id + "status"}>
                    <CatStatus status={cat.status}/>
                </CatTableCell>
                <CatTableCell key={cat.id + "color"}>
                    <CatColor color={cat.color}/>
                </CatTableCell>
                <CatTableCell key={cat.id + "btn"}>
                    <Button color={"green"} href={"/cat/"+cat.id}>Подробнее</Button>
                </CatTableCell>
            </Tr>
        );
    }

    render() {
        return (
            <Table>
                <Thead>
                    <Tr>
                        <Th>Имя</Th>
                        <Th>Пол</Th>
                        <Th>Статус</Th>
                        <Th>Окрас</Th>
                        <Th/>
                    </Tr>
                </Thead>
                <Tbody>
                    {this.props.cats.map(cat => this.catRow(cat))}
                </Tbody>
            </Table>
        );
    }
}

export default CatTable;
