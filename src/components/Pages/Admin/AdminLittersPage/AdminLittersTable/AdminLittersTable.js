import React, {Component} from "react";
import ReactPaginate from "react-paginate";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import Axios from "axios";
import {BASE_URL} from "../../../../../const";
import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";

class AdminLittersTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pages: 0,
            offset: 0,
            litters: []
        };
        this.loadLitters = this.loadLitters.bind(this);
    }

    loadLitters() {
        let self = this;
        Axios.post(BASE_URL + "/api/litter/count").then(
            function (response) {
                self.setState({
                    pages: Math.ceil(response.data / self.props.countLitterOnPage)
                });
                Axios.post(BASE_URL + "/api/litter/get", {
                    limit: self.props.countLitterOnPage,
                    offset: self.state.offset,
                    order: {birthday: "desc"}
                }).then(
                    function (litters) {
                        let data = litters.data
                        console.log(data);
                        self.setState({litters: data});
                    }
                );
            }
        );
    }

    componentDidMount() {
        this.loadLitters();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) this.loadLitters();
    }

    render() {
        return (
            <>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Буква</Th>
                            <Th>Дата</Th>
                            <Th>Отец</Th>
                            <Th>Мать</Th>
                            <Th>Котята</Th>
                            <Th>Управление</Th>
                            <Th/>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {this.state.litters.map(litter => this.litterRow(litter))}
                    </Tbody>
                </Table>
                <ReactPaginate
                    previousLabel={<FontAwesomeIcon icon={faArrowLeft}/>}
                    nextLabel={<FontAwesomeIcon icon={faArrowRight}/>}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    onPageChange={(data) => {
                        let selected = data.selected;
                        let offset = Math.ceil(selected * this.props.countLitterOnPage);
                        this.setState({
                            offset: offset
                        }, this.loadLitters);
                    }}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    pageCount={this.state.pages}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}/>
            </>
        );
    }

    litterRow(litter) {
        return (
            <Tr key={litter.id}>
                {litter.letter}
            </Tr>
        );
    }
}

export default AdminLittersTable;
