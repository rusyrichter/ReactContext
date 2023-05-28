import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import AddCandidate from './AddCandidate'
import Pending from './Pending';
import ViewDetails from './ViewDetails'
import Confirmed from './Confirmed'
import Refused from './Refused'
import { CandidateContext } from './CandidateContext';

class App extends React.Component {
    render() {
        return (
            <CandidateContext>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/addcandidate' element={<AddCandidate />} />
                        <Route exact path='/pending' element={<Pending />} />
                        <Route exact path='/viewDetails/:id' element={<ViewDetails />} />
                        <Route exact path='/confirmed' element={<Confirmed />} />
                        <Route exact path='/refused' element={<Refused />} />
                    </Routes>
                </Layout>
            </CandidateContext>
        );
    }
};

export default App;