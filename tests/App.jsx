import React from 'react';
import { SmartIcon } from 'smart-icons';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🧠 Smart Icons Package Test</h1>
      <p>Testing the smart-icons npm package with various features:</p>
      
      {/* Exact Matches */}
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>✅ Exact Matches</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="home" size={24} color="blue" />
            <span>home</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="search" size={24} color="green" />
            <span>search</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="settings" size={24} color="purple" />
            <span>settings</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="user" size={24} color="orange" />
            <span>user</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="heart" size={24} color="red" />
            <span>heart</span>
          </div>
        </div>
      </div>

      {/* Prefix Matching */}
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>🔍 Prefix Matching (prefixMatch=true)</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="cal" prefixMatch={true} size={24} color="blue" />
            <span>cal → Calendar</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="pho" prefixMatch={true} size={24} color="green" />
            <span>pho → Phone</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="sea" prefixMatch={true} size={24} color="purple" />
            <span>sea → Search</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="hom" prefixMatch={true} size={24} color="orange" />
            <span>hom → Home</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="set" prefixMatch={true} size={24} color="red" />
            <span>set → Settings</span>
          </div>
        </div>
      </div>

      {/* Custom Styling */}
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>🎨 Custom Styling (Spread Props)</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon 
              name="star" 
              size={32} 
              color="gold"
              style={{ filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))' }}
            />
            <span>Star (Gold, 32px, Shadow)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon 
              name="heart" 
              size={28} 
              color="pink"
              style={{ transform: 'rotate(15deg)' }}
            />
            <span>Heart (Pink, 28px, Rotated)</span>
          </div>
        </div>
      </div>

      {/* Fallback Test */}
      <div style={{ margin: '30px 0', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>🛡️ Fallback Handling</h2>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="nonexistent" size={24} color="gray" />
            <span>nonexistent (should show nothing)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SmartIcon name="invalid" size={24} color="gray" />
            <span>invalid (should show nothing)</span>
          </div>
        </div>
      </div>

      {/* Package Info */}
      <div style={{ margin: '30px 0', padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
        <h2>📦 Package Information</h2>
        <ul>
          <li><strong>Package Name:</strong> smart-icons</li>
          <li><strong>Version:</strong> 1.0.0</li>
          <li><strong>Platforms:</strong> React Web & React Native</li>
          <li><strong>Features:</strong> Exact matching, Prefix matching, Spread props, Fallback handling</li>
          <li><strong>Icons:</strong> 200+ Lucide icons with synonyms</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
