import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../store/interactionSlice';

const LogInteractionForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.interaction.formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  return (
    <div className="form-panel">
      <h2 className="section-title">Interaction Details</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label>HCP Name</label>
          <input 
            type="text" 
            name="hcpName"
            placeholder="Search or select HCP..." 
            value={formData.hcpName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Interaction Type</label>
          <select name="interactionType" value={formData.interactionType} onChange={handleChange}>
            <option value="Meeting">Meeting</option>
            <option value="Call">Call</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Date</label>
          <input 
            type="date" 
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input 
            type="time" 
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label>Attendees</label>
        <input 
          type="text" 
          name="attendees"
          placeholder="Enter names or search..." 
          value={formData.attendees}
          onChange={handleChange}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '12px' }}>
        <label>Topics Discussed</label>
        <textarea 
          name="topicsDiscussed"
          placeholder="Enter key discussion points..."
          value={formData.topicsDiscussed}
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="btn-secondary" style={{ marginBottom: '24px' }}>
        <span style={{ fontSize: '16px' }}>✨</span> Summarize from Voice Note (Requires Consent)
      </button>

      <h3 className="section-title" style={{ borderBottom: 'none', paddingBottom: '0', marginBottom: '12px' }}>
        Materials Shared / Samples Distributed
      </h3>
      
      <div className="materials-section">
        <div className="materials-row">
          <label style={{ fontSize: '13px', fontWeight: '500' }}>Materials Shared</label>
          <button className="btn-secondary">🔍 Search/Add</button>
        </div>
        <div className="materials-row" style={{ borderBottom: 'none', paddingTop: '4px' }}>
          <span className="empty-text">No materials added.</span>
        </div>
      </div>

      <div className="materials-section">
        <div className="materials-row">
          <label style={{ fontSize: '13px', fontWeight: '500' }}>Samples Distributed</label>
          <button className="btn-secondary">📦 Add Sample</button>
        </div>
        <div className="materials-row" style={{ borderBottom: 'none', paddingTop: '4px' }}>
          <span className="empty-text">No samples added.</span>
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label>Observed/Inferred HCP Sentiment</label>
        <div className="radio-group">
          <label className="radio-option">
            <input 
              type="radio" 
              name="sentiment" 
              value="Positive"
              checked={formData.sentiment === 'Positive'}
              onChange={handleChange}
            /> 
            <span className="emoji-icon">😊</span> Positive
          </label>
          <label className="radio-option">
            <input 
              type="radio" 
              name="sentiment" 
              value="Neutral"
              checked={formData.sentiment === 'Neutral'}
              onChange={handleChange}
            /> 
            <span className="emoji-icon">😐</span> Neutral
          </label>
          <label className="radio-option">
            <input 
              type="radio" 
              name="sentiment" 
              value="Negative"
              checked={formData.sentiment === 'Negative'}
              onChange={handleChange}
            /> 
            <span className="emoji-icon">😞</span> Negative
          </label>
        </div>
      </div>

      <div className="form-group" style={{ marginBottom: '20px' }}>
        <label>Outcomes</label>
        <textarea 
          name="outcomes"
          placeholder="Key outcomes or agreements..."
          value={formData.outcomes}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label>Follow-up Actions</label>
        <textarea 
          name="followUpActions"
          placeholder="Enter next steps or tasks..."
          value={formData.followUpActions}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="ai-suggestions">
        <p>AI Suggested Follow-ups:</p>
        <div className="ai-suggestion-item">+ Schedule follow-up meeting in 2 weeks</div>
        <div className="ai-suggestion-item">+ Send OncoBoost Phase III PDF</div>
      </div>

    </div>
  );
};

export default LogInteractionForm;
