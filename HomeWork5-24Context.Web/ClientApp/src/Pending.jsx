import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCandidateCount } from './CandidateContext';





const Pending = () => {
    const [candidates, setCandidates] = useState([]);
    const { refreshPendingCounts } = useCandidateCount();

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/candidate/getPending')
            setCandidates(data);
            refreshPendingCounts();
        }
        getCandidates();

    }, []);


    return (
        <div className="d-flex justify-content-center">
            <table className="table text-center shadow-lg" style={{ borderCollapse: 'separate', borderSpacing: '0px 15px', maxWidth: '80%' }}>
                <thead>
                    <tr style={{ backgroundColor: 'rgb(33, 37, 41)', color: 'white', borderRadius: '15px' }}>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {candidates.map(candidate =>
                        <tr
                            style={{ backgroundColor: 'rgb(248, 249, 250)', borderRadius: '15px' }}
                            key={candidate.id}>
                            <td>
                                <Link to={`/ViewDetails/${candidate.id}`}>
                                    View Details
                                </Link>
                            </td>

                            <td>
                                {candidate.firstName}
                            </td>
                            <td>
                                {candidate.lastName}
                            </td>
                            <td>
                                {candidate.phoneNumber}
                            </td>
                            <td>
                                {candidate.email}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Pending;