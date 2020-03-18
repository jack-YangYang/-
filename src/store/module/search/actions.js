import axios from 'axios'
import { Indicator } from 'mint-ui'
export default {
    search ({ commit },value) {
        Indicator.open({
            spinnerType: 'fading-circle'
        })
        axios.get(`/api/searchList?cityId=10&kw=${value}`).then(res => {
            if (res.data.msg === 'ok') {
                commit('SERACHMOVIELIST', {
                    searchMovieList:res.data.data.movies ? res.data.data.movies.list : [],
                    cinemas:res.data.data.cinemas ? res.data.data.cinemas.list : []
                })
                Indicator.close();
            }
        })
    }
}