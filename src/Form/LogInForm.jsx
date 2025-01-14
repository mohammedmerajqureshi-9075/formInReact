import { useState } from 'react';
import '../Form/LoginForm.css';
import axios from 'axios';

const LogInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');  

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Required fields are empty');
            return; 
        }

        setLoading(true); 

        try {
            const response = await axios.post('http://localhost:5098/user/login', {
                email,
                password,
            });
            
            console.log(response.data);

            setSuccessMessage('Login successful!'); 
            setError(null);  
        } catch (error) {
            console.error('Error:', error.message);
            setError(error.message);  
            setSuccessMessage('');  
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div>
            <div className="main-login">
                <div className="login-box">
                    <div className="login-hed">
                        <h2>Login form</h2>
                    </div>
                    <form onSubmit={handleSubmit} method="post">
                        <div className="email-box">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="password-box">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p>{error}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>} 
                        <div className="btn-login">
                            <button className='login-button' type="submit" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogInForm;
