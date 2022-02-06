import React from "react";
import { Container, Image } from "react-bootstrap";
import { Table } from 'reactstrap';
function listEvidences() {
    return (

        <div>
            <Container>
                <h1 className="mt-5">Evidences.</h1>
                <Table className="mt-5" bordered>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Owner Name</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Pune</td>
                            <td>06/02/2022</td>
                            <td><button type="button" className="btn btn-primary mr-2">Request</button><button type="button" className="btn btn-success ml-2">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Pune</td>
                            <td>06/02/2022</td>
                            <td><button type="button" className="btn btn-primary mr-2">Request</button><button type="button" className="btn btn-success ml-2">View</button></td>
                            
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>Pune</td>
                            <td>06/02/2022</td>
                            <td><button type="button" className="btn btn-primary mr-2">Request</button><button type="button" className="btn btn-success ml-2">View</button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>

        </div>


    )
}

export default listEvidences;