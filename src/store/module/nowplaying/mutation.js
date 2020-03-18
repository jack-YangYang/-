export default {
    GetMovieList (state,list) {
        console.log(list)
        console.log(state)
        state.movieList = list
        console.log(state.movieList)
    }
}