import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
    const navigate = useNavigate();

    return (
        <section id="employee" className="min-h-screen p-8 flex items-center justify-center flex-col gap-4">
            <h2 className="text-4xl font-bold">Employee</h2>
            <button
                className="btn-lg bg-base-content text-base-100"
                onClick={() => navigate('/employee-access')}
                type="button"
            >
                Employee Login
            </button>
        </section>
    );
}

export default Employee;