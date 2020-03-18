import { Indicator } from 'mint-ui';
import axios from 'axios'
export default {
    getCityList ({ commit }) {
        Indicator.open({
            spinnerType: 'fading-circle'
        });
        axios.get('/api/cityList').then(res => {
            if (res.data.msg === 'ok') {
                Indicator.close();
                commit('GETCITYLIST', {
                    cityList: res.data.data.cities
                })
            }
        })
    }
}