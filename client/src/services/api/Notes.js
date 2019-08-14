import axios from 'axios';

export default {
  getNotes() {
    return axios.get('notes').then(response => {
      return response;
    });
  }
};
