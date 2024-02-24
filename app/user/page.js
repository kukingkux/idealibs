import axios from 'axios';

async function getUser() {
    const baseURL = ('https://tricky-gown-newt.cyclic.app/')

    try {
      const response = await axios.get(baseURL,'/users');
      console.log(response)

    } catch (error) {
      console.error(error);
    }

    
}
  
export default async function User({data}) {
  
} 



