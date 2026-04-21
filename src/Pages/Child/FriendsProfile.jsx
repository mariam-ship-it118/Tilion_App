import React, { useState } from 'react';
import './FriendsProfile.css';
import TopChat from '../../Components/TopChat';

const FriendsProfile = () => {
  const [activeModal, setActiveModal] = useState(null); 

  const settings = [
    { label: 'Best friend', type: 'nav' },
    { label: 'Starred messages', type: 'nav' },
    { label: 'Background', type: 'nav' },
    { label: 'Media', type: 'nav' },
    { label: 'Nickname', type: 'nav' },
    { label: 'Notification sound', type: 'nav' },
    { label: 'Block', type: 'danger', action: () => setActiveModal('block') },
    { label: 'Report', type: 'danger', action: () => setActiveModal('report') },
  ];

  const closeModal = () => setActiveModal(null);

  return (<>
  
  
    <TopChat     />
    <div className="profile-settings-container">
      <div className="settings-list">
        {settings.map((item, index) => (
            <button 
            key={item.label} 
            className={`settings-item ${item.type}`}
            onClick={item.action || null}
            style={{ animationDelay: `${index * 0.05}s` }}
            >
            {item.label}
          </button>
        ))}
      </div>

      {}
      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>{activeModal === 'block' ? 'Block User?' : 'Report User?'}</h3>
            <p>
              {activeModal === 'block' 
                ? "You won't receive messages or calls from this person." 
                : "The last few messages will be forwarded to our team for review."}
            </p>
            <div className="modal-actions">
              <button className="modal-btn cancel" onClick={closeModal}>Cancel</button>
              <button className="modal-btn confirm" onClick={() => {
                console.log(`${activeModal} confirmed`);
                closeModal();
              }}>
                {activeModal === 'block' ? 'Block' : 'Report'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
                </>
  );
};

export default FriendsProfile;