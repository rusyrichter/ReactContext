import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useCandidateCount } from './CandidateContext';


const OrderDetails = () => {
    const [candidate, setCandidate] = useState([]);
    const { id } = useParams();
    const { refreshConfirmedCount, refreshRefusedCount, refreshPendingCounts } = useCandidateCount();

    const navigate = useNavigate();
    useEffect(() => {
        const getCandidateById = async () => {
            const { data } = await axios.get(`/api/candidate/getCandidatebyId?id=${id}`);
            setCandidate(data);
        }
        getCandidateById();

    }, []);

    const onConfirmClick = async () => {      
        await axios.post('/api/candidate/addToConfirmed', { id });
        refreshPendingCounts();
        navigate('/confirmed');
    }

    const onRefuseClick = async () => {
        await axios.post('/api/candidate/addToRefused', { id });
        refreshPendingCounts();
        navigate('/Refused');
    }

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Name: {candidate.firstName} {candidate.lastName}</h4>
                        <h4>Email: {candidate.email}</h4>
                        <h4>Phone: {candidate.phoneNumber}</h4>
                        <h4>Status: {candidate.status}</h4>
                        <h4>Notes: {candidate.notes}</h4>
                        <p></p>
                        <div>
                            <button onClick={onConfirmClick} className="btn btn-primary">Confirm</button>
                            <button onClick={onRefuseClick} className="btn btn-danger">Refuse</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetails;





