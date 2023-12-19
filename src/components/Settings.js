// src/components/Settings.js
import React, { useState } from 'react';

const Settings = () => {

  return (
    <div className="settings-container">
      <header>
        <h1>Settings</h1>
      </header>

      <section className="settings-options">
        <div className="setting-option">
          <div className="setting-icon">
            <img src="path/to/icon1.png" alt="Icon 1" />
          </div>
          <p>Notification Preferences</p>
        </div>

        <div className="setting-option">
          <div className="setting-icon">
            <img src="path/to/icon2.png" alt="Icon 2" />
          </div>
          <p>Account Settings</p>
        </div>

        <div className="setting-option">
          <div className="setting-icon">
            <img src="path/to/icon3.png" alt="Icon 3" />
          </div>
          <p>Privacy Settings</p>
        </div>
      </section>
    </div>

  );
};

export default Settings;
