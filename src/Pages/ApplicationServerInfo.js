import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';

function ApplicationServerInfo(props) {
    const [serverInfo, setServerInfo] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/serverInfo", { method: "GET" })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Failed to fetch server info');
                }
            })
            .then(res => setServerInfo(res))
            .catch(error => console.error("Error fetching server info:", error));
    }, []);

    console.log(serverInfo);

    return (
        <div>
            <Header/>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>IP Address</th>
                        <th>Server</th>
                        <th>Port</th>
                        <th>Date Modified</th>
                        <th>Modified By</th>
                        <th>IP Status</th>
                    </tr>
                </thead>
                <tbody>
                    {serverInfo.map(info =>
                        <tr key={info.serverInfoUid}>
                            <td>{info.serverInfoUid}</td>
                            <td>{info.destinationIpAddress}</td>
                            <td>{info.destinationHostName}</td>
                            <td>{info.destinationPort}</td>
                            <td>{info.modifiedAt}</td>
                            <td>{info.modifiedBy}</td>
                            <td>{info.ipStatus}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <Button variant="primary" onClick={() => navigate("/Application")}>Go Back</Button>{' '}
        </div>
    );
}

export default ApplicationServerInfo;