import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCandidateCount } from "./CandidateContext";









const Refused = () => {
    const { refreshRefusedCount } = useCandidateCount();
    const [candidates, setCandidates] = useState([]);
    const [showNotes, setNotesDisplay] = useState(false)

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/candidate/getRefused')
            setCandidates(data);
            refreshRefusedCount();
        }
        getCandidates();

    }, []);

    const onToggleClick = () => {
        setNotesDisplay(!showNotes);        
    }

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div>
                <h1>Refused</h1>
                
                    <button className="btn btn-success" onClick={onToggleClick}>Toggle Notes</button>

                    <table className="table text-center shadow-lg" style={{ borderCollapse: 'separate', borderSpacing: '0px 15px', maxWidth: '80%' }}>

                        <thead>
                            <tr style={{ backgroundColor: 'rgb(33, 37, 41)', color: 'white', borderRadius: '15px' }}>

                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                {showNotes ? <th> Notes</th> : ''}
                            </tr>
                        </thead>
                        <tbody>
                            {candidates.map(candidate =>
                                <tr
                                    style={{ backgroundColor: 'rgb(248, 249, 250)', borderRadius: '15px' }}
                                    key={candidate.id}>

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
                                    {showNotes ? <td> {candidate.notes}</td> : ''}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
       
    );
}

export default Refused;