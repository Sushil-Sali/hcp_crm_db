import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    hcpName: '',
    interactionType: 'Meeting',
    date: '',
    time: '',
    attendees: '',
    topicsDiscussed: '',
    materialsShared: '',
    samplesDistributed: '',
    sentiment: 'Neutral',
    outcomes: '',
    followUpActions: ''
  },
  chatMessages: [
    { role: 'assistant', content: 'Log interaction details here (e.g., "Met Dr. Smith, discussed Product X efficacy, positive sentiment, shared brochure") or ask for help.' }
  ],
  isLoading: false,
  error: null,
};

export const interactionSlice = createSlice({
  name: 'interaction',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    addChatMessage: (state, action) => {
      state.chatMessages.push(action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const { updateFormData, addChatMessage, setLoading, setError } = interactionSlice.actions;

export default interactionSlice.reducer;
