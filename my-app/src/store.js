import { createStore } from 'redux';

// Initial state
const initialState = {
  isLoggedIn: false,
  currentUser: null,
  documents: [],
  isLoading: false
};

// Reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.payload
      };
      case 'SIGNUP':
      return {
        ...state,
        isLoggedIn: false,
        signedUpUser: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null
      };
    case 'LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false
      };
    case 'SET_DOCUMENTS':
      return {
        ...state,
        documents: action.payload
      };
    case 'ADD_DOCUMENT':
      return {
        ...state,
        documents: [...state.documents, action.payload]
      };
    case 'UPDATE_DOCUMENT':
      const updatedDocuments = state.documents.map(doc => {
        if (doc.id === action.payload.id) {
          return action.payload;
        } else {
          return doc;
        }
      });
      return {
        ...state,
        documents: updatedDocuments
      };
    case 'DELETE_DOCUMENT':
      const filteredDocuments = state.documents.filter(doc => doc.id !== action.payload);
      return {
        ...state,
        documents: filteredDocuments
      };
    default:
      return state;
  }
};

// Actions
 export const loginAction = (user) => {
  return { type: 'LOGIN', payload: user };
};
export const signUpAction = (signUpUser) => {
    return { type: 'SIGNUP', payload: signUpUser };
  };
export const logoutAction = () => {
  return { type: 'LOGOUT' };
};
export const setLoadingAction = () => {
  return { type: 'LOADING' };
};
export const stopLoadingAction = () => {
  return { type: 'STOP_LOADING' };
};
export const setDocumentsAction = (documents) => {
  return { type: 'SET_DOCUMENTS', payload: documents };
};
export const addDocumentAction = (document) => {
  return { type: 'ADD_DOCUMENT', payload: document };
};
export const updateDocumentAction = (document) => {
  return { type: 'UPDATE_DOCUMENT', payload: document };
};
export const deleteDocumentAction = (id) => {
  return { type: 'DELETE_DOCUMENT', payload: id };
};

// Store
const store = createStore(appReducer);

export default store;


