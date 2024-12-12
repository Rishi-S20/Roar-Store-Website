import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeAccess = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Employee Login</h1>
            <button
                className="btn btn-primary mt-4"
                onClick={() => navigate('/')}
            >
                Back to Home
            </button>
        </div>
    );
}

export default EmployeeAccess;