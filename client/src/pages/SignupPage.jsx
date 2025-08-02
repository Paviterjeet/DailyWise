import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Placeholder: Logic to handle signup goes here
    navigate('/dashboard');
  };

  return (
    <div className="min-vh-100 bg-light d-flex flex-column justify-content-between">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 px-4 d-flex justify-content-between align-items-center">
        <h1 className="text-primary m-0">DailyWise</h1>
        <button className="btn btn-outline-primary" onClick={() => navigate('/')}>Home</button>
      </header>

      {/* Signup Section */}
      <main className="container text-center py-5">
        <h2 className="display-5 fw-bold mb-3">Join DailyWise</h2>
        <p className="lead text-muted mb-5">Sign up in 10 seconds and get your first wisdom tip tomorrow morning.</p>

        <form onSubmit={handleSignup} className="row justify-content-center">
          <div className="col-md-6">
            <div className="mb-3 text-start">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100">Sign Up</button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-white py-3 text-center border-top">
        <small className="text-muted">&copy; {new Date().getFullYear()} DailyWise. All rights reserved.</small>
      </footer>
    </div>
  );
}
