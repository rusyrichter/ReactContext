import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useCandidateCount } from './CandidateContext';

const AddCandidate = () => {

    const { refreshPendingCounts } = useCandidateCount();
    const [firstName, setFN] = useState('');
    const [lastName, setLN] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [notes, setNotes] = useState('');

    const navigate = useNavigate();

    const onSubmitClick = async () => {
        await axios.post('/api/candidate/addcandidate', { firstName, lastName, email, phoneNumber, notes });
        refreshPendingCounts();
        navigate('/');
    }

    return (
        <div className="container" style={{ marginTop: '80px' }}>
            <div className="row" style={{ marginTop: '20px' }}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <form>
                            <input value={firstName} type="text" name="firstName" placeholder="First Name" className="form-control" onChange={e => setFN (e.target.value)} /><br />
                            <input value={lastName}type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={e => setLN(e.target.value)} /><br />
                            <input value={email}type="text" name="email" placeholder="Email" className="form-control" onChange={e => setEmail(e.target.value)} /><br />
                            <input value={phoneNumber}type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" onChange={e => setPhoneNumber(e.target.value)} /><br />
                            <textarea
                                value={notes} rows="5" className="form-control" name="notes" onChange={e => setNotes(e.target.value)}>
                            </textarea>
                            <br />
                            <button onClick={onSubmitClick} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCandidate;