import axios from 'axios';

const api_key = '88ed0bf1277ae4fc655a409bbd11dcbe';

const getMovies = async (id) => {
  try {
    const url = axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`);
    return await axios.get(url);
  }
  catch(e) {
    console.log(e);
  }
}