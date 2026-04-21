import React, { useState } from 'react';
import './BookTutorial.css';

const CraftGuide = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const materials = [
    "Colored paper or patterned paper (for the cover)",
    "White paper sheets (for the pages)",
    "Thin cardboard or kraft paper",
    "Glue stick",
    "Scissors",
    "Hole punch or needle",
    "Ribbon or string (small piece)",
    "Keychain ring",
    "Markers or pens (for decorating)"
  ];

  return (
    <div className="guide-wrapper">
      <div className="guide-container">
        {}
        <section className="guide-section">
          <h2 className="section-title">Tool and materials</h2>
          <ul className="materials-list">
            {materials.map((item, index) => (
              <li key={index} className="material-item" onClick={() => toggleItem(`m-${index}`)}>
                <span className={`custom-checkbox ${checkedItems[`m-${index}`] ? 'is-checked' : ''}`}></span>
                <span className="material-text">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {}
        <section className="guide-section">
          <h2 className="section-title">Paper Sizes</h2>
          <ul className="sizes-list">
            <li><strong>Cover cardboard:</strong> 7.5 × 7.5 cm (3 × 3 inches)</li>
            <li><strong>White pages:</strong> 7.5 × 7.5 cm</li>
            <li><strong>Decorative outer cover:</strong> 7.5 × 7.5 cm</li>
          </ul>
        </section>

        {}
        <section className="guide-section">
          <h2 className="section-title">Steps</h2>
          
          <div className="step-block">
            <h3 className="step-heading">1. Cut the Pages</h3>
            <p className="step-description">Cut several small squares of white paper (7.5 cm × 7.5 cm). These will be the pages of your mini book.</p>
          </div>

          <div className="step-block">
            <h3 className="step-heading">2. Fold the Pages</h3>
            <p className="step-description">Stack the white squares together and fold them accordion-style (zigzag) so they create a small book structure.</p>
          </div>

          <div className="step-block">
            <h3 className="step-heading">3. Make the Cover</h3>
            <p className="step-description">Cut two squares of cardboard (7.5 × 7.5 cm). These will be the front and back cover.</p>
          </div>

          <div className="step-block">
            <h3 className="step-heading">4. Decorate the Cover</h3>
            <p className="step-description">Glue decorative paper on top of the cardboard pieces. You can draw stars, write a title, or add stickers.</p>
          </div>

          <div className="step-block">
            <h3 className="step-heading">5. Attach the Pages</h3>
            <p className="step-description">Apply glue to the first and last fold of the accordion pages, then stick them inside the cardboard covers.</p>
          </div>

          <div className="step-block">
            <h3 className="step-heading">6. Add the Keychain Loop</h3>
            <p className="step-description">Make a small loop using ribbon or string. Glue or tape it between the back cover and the pages.</p>
          </div>

          <div className="step-block">
            <h3 className="step-heading">7. Attach the Keyring</h3>
            <p className="step-description">Add the keychain ring to the ribbon loop.</p>
          </div>

          <div className="step-block">
            <h3 className="step-heading">8. Decorate the Mini Book</h3>
            <p className="step-description">Write a title on the cover and draw inside the pages.</p>
            <div className="examples-box">
              <p className="example-label">Examples:</p>
              <ul className="example-list">
                <li>"My Secret Notes"</li>
                <li>"Star Journal"</li>
                <li>"Tiny Sketchbook"</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CraftGuide;