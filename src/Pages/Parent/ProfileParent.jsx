import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavParent from '../../Components/NavParent';
import './ProfileParent.css';
import parentImg from '../../Assets/parentprofile.svg';
import TopParent from '../../Components/TopParent';

const ProfileParent = () => {
    const navigate = useNavigate();
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const handleLogout = () => {
        setShowLogoutConfirm(false);
        navigate('/accounts');
    };

    return (
        <>
        <TopParent/>
            <NavParent />
            <div className="portal-surface-container">
                <header className="identity-header-stack">
                    <div className="guardian-avatar-wrap">
                        <img src={parentImg} alt="Profile" className="guardian-visual" />
                    </div>
                    <div className="greeting-label-group">
                        <h1 className="primary-welcome-msg">Mrs. Marwa Ahmed</h1>
                        <p className="sub-identity-text">Parent Account</p>
                    </div>
                </header>

                <main className="dashboard-content-flow">
                    <section className="personal-info-block">
                        <div className="info-entry-unit">
                            <h3 className="field-title-bold">Email</h3>
                            <p className="field-data-text">marwa.ahmed@example.com</p>
                        </div>
                        <div className="info-entry-unit">
                            <h3 className="field-title-bold">Phone Number</h3>
                            <p className="field-data-text">+20 123 456 7890</p>
                        </div>
                        <div className="info-entry-unit">
                            <h3 className="field-title-bold">Subscription</h3>
                            <p className="field-data-text">Premium Plan</p>
                        </div>
                    </section>

                    <nav className="action-link-stack" style={{ marginTop: '32px' }}>
                        <button className="nav-action-row">Edit Profile</button>
                        <button className="nav-action-row">Notification Settings</button>
                        <button
                            type="button"
                            className="nav-action-row logout-link"
                            onClick={() => setShowLogoutConfirm(true)}
                        >
                            Log Out
                        </button>
                    </nav>
                </main>
            </div>

            {showLogoutConfirm && (
                <div className="logout-modal-overlay" onClick={() => setShowLogoutConfirm(false)}>
                    <div className="logout-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Are you sure?</h3>
                        <div className="logout-modal-actions">
                            <button
                                type="button"
                                className="logout-modal-btn cancel"
                                onClick={() => setShowLogoutConfirm(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="logout-modal-btn confirm"
                                onClick={handleLogout}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileParent;
