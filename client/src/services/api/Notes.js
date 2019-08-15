import axios from 'axios';

export default {
  getNotes() {
    return axios.get('notes').then(response => {
      return response;
    });
  },
  getNoteData(noteID) {
    return axios.get(`notes/${noteID}`).then(response => {
      return response;
    });
  }
};
