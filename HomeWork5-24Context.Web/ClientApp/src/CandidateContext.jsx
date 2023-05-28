import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const CandidateCountContext = createContext();

const CandidateContext = ({ children }) => {
    const [pendingCount, SetPendingCount] = useState(0);
    const [confirmedCount, SetConfirmedCount] = useState(0);
    const [refusedCount, SetRefusedCount] = useState(0);


    const refreshPendingCounts = async () => {
        const { data } = await axios.get('/api/Candidate/getPendingCount');
        SetPendingCount(data.count);
    }
    const refreshConfirmedCount = async () => {
        const { data } = await axios.get('/api/Candidate/getConfirmedCount');
        SetConfirmedCount(data.count);
    }
    const refreshRefusedCount = async () => {
        const { data } = await axios.get('/api/Candidate/getRefusedCount');
        SetRefusedCount(data.count);
    }

    useEffect(() => {
        refreshPendingCounts();
        refreshConfirmedCount();
        refreshRefusedCount();
    }, []);

    return (
        <CandidateCountContext.Provider value={{
            pendingCount, refreshPendingCounts, confirmedCount, refreshConfirmedCount,
            refusedCount, refreshRefusedCount
        }}>
            {children}
        </CandidateCountContext.Provider>
    )

}

const useCandidateCount = () => {
    return useContext(CandidateCountContext);
}

export { CandidateContext, useCandidateCount };