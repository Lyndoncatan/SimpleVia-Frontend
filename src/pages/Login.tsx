import { useState, type FC, type FormEvent } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.svg';

const Login: FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        // Simulate login for now
        navigate('/dashboard');
    };

    return (
        <div className="flex h-screen w-full">
            {/* Left Side - Login Form */}
            <div className="w-1/2 flex flex-col justify-center items-center bg-white p-12 relative">
                <div className="w-full max-w-md space-y-8">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <img src={logo} alt="SimpleVia Logo" className="w-32 h-32" />
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[var(--color-primary)]">Welcome!</h2>
                        <p className="text-gray-500 mt-2">Sign in to continue to SimpleVia System</p>
                    </div>

                    <form onSubmit={handleLogin} className="mt-8 space-y-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                required
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                                placeholder="Username / Email"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                                )}
                            </button>
                        </div>

                        <div className="flex items-center justify-end">
                            <a href="#" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-[var(--color-primary)] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] transition-all transform hover:scale-[1.02]"
                        >
                            LOG IN
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Powered by SimpleVia
                    </div>
                </div>
            </div>

            {/* Right Side - Image/Branding */}
            <div className="w-1/2 bg-[var(--color-primary-light)] relative hidden md:block overflow-hidden">
                {/* Abstract shapes or image can go here. For now using a gradient/pattern */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-12 text-[var(--color-primary)]">
                    <h1 className="text-5xl font-extrabold mb-4">SimpleVia System</h1>
                    <p className="text-xl max-w-lg">
                        Efficient Management for Modern Organizations
                    </p>

                    {/* Decorative circles to match general style */}
                    <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-[var(--color-secondary)] opacity-10 blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-10 blur-3xl"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
