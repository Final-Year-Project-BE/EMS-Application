import React from "react";
import { Container, Image } from "react-bootstrap";
import { Table } from 'reactstrap';
function listCases() {
    return (

        <div>
            <Container>
                <h1 className="mt-5">Active Cases.</h1>
                <Table className="mt-5" bordered>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Case Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td><button type="button" class="btn btn-success">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td><button type="button" class="btn btn-success">View</button></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td><button type="button" class="btn btn-success">View</button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

        </div>


    )
}

export default listCases;