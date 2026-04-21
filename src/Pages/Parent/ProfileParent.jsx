import React from 'react';
import NavParent from '../../Components/NavParent';
import './ProfileParent.css';
import parentImg from '../../Assets/parentprofile.svg';

const ProfileParent = () => {
    return (
        <>
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
                        <button className="nav-action-row">Log Out</button>
                    </nav>
                </main>
            </div>
        </>
    );
};

export default ProfileParent;
