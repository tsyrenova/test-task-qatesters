import React from 'react';
import Table from './table';
import { Route, Routes } from 'react-router-dom';
import TableRecord from './table-record';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Table />} />
            <Route path="/table" element={<Table />} />
            <Route path="/table/:id" element={<TableRecord />} />
        </Routes>
    );
}

export default App;
