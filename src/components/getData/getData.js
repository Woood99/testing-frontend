const axios = require('axios');

const getData = async () => {
   try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const usersIds = response.data.map(user => user.id);
      return usersIds;
   } catch (error) {}
};

module.exports = getData;
