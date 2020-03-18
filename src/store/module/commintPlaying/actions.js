import { Indicator } from 'mint-ui';
import axios from 'axios'
export default {
    movieList ({ commit }) {
        Indicator.open({
            spinnerType: 'fading-circle'
        })
        axios.get('/api/movieComingList?cityId=10').then(res => {
            if (res.data.msg === 'ok') {
                commit('GETCOMINGMOVIELIST', {
                    comingMovieList:res.data.data.comingList
                })
                Indicator.close();
            }
        })
    }
}