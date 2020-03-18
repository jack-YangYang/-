export default {
    SERACHMOVIELIST(state, { searchMovieList, cinemas }) {
        state.getSearchMovieList = searchMovieList,
        state.cinemas = cinemas
    }
}