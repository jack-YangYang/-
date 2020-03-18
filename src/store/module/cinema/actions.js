import axios from 'axios'
import  { Indicator } from 'mint-ui';
export default {
    getCinemaList ({ commit }) {
        Indicator.open({
            spinnerType: 'fading-circle'
        })
        axios.get('/api/cinemaList?cityId=10').then(res => {
            if (res.data.msg === 'ok') {
                commit('GetCinemaList', {
                    cinemaList: res.data.data.cinemas
                })
                Indicator.close();
            }
        })
    }
}