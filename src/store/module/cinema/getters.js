let arr = []
export default {
    filtersCinemaList (state) {
        state.cinemaList.forEach(item => {
            for (let ele in item.tag) {
                if (item.tag[ele]) {
                    arr.push(item)
                }
            }
        })
        return arr
    }
}