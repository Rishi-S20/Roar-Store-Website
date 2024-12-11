import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/employee-access');
    };

    return (
        <section id="employee" className="min-h-screen p-8 flex items-center justify-center flex-col gap-4">
            <h2 className="text-4xl font-bold">Employee</h2>
            <button onClick={handleLoginClick} className="btn btn-primary">Employee Login</button>
        </section>
    );
}

export default Employee;