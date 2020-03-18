import { Indicator } from 'mint-ui'
import axios from 'axios'
export default {
    getNowplayingMovie ({commit}) {
        Indicator.open({
            spinnerType: 'fading-circle'
        })
        axios.get('/api/movieOnInfoList?cityId=10').then(res => {
            if (res.data.msg === 'ok') {
                // console.log(res.data.data)
                commit('GetMovieList',res.data.data.movieList)
                Indicator.close();
            }
        })
    }
}