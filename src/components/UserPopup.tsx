import React, { useState } from 'react';
import './UserPopup.css';

interface UserPopupProps {
    onClose: () => void;
}

const UserPopup: React.FC<UserPopupProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Registro:', { name, email, password });
        onClose();
    };

    return (
        <div className="user-popup-overlay" onClick={onClose}>
            <div className="user-popup-content" onClick={e => e.stopPropagation()}>
                <div className="popup-header">
                    <button className="close-button" onClick={onClose} aria-label="Cerrar"></button>
                    <h2>¡Bienvenido de nuevo!</h2>
                    <p>¿Listo para sumergirte en el mundo del entretenimiento ilimitado?</p>
                </div>
                <form className="popup-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="email" 
                            placeholder="Correo electrónico" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="password" 
                            placeholder="Contraseña" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserPopup; 