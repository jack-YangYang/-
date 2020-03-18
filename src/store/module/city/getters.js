const formartCityList = (cities) => {
    let cityList = []
    let hotCityList = []
    cities.forEach(item => {
        if (item.isHot === 1) {
            hotCityList.push(item)
        }
    })
    cities.forEach(item => {
        let firstLetter = item.py.substring(0,1).toUpperCase();
        if (toCom(firstLetter)) {
            cityList.push({ index: firstLetter, list: [{name: item.nm, id: item.id}] })
        } else {
            cityList.forEach(element => {
                if (element.index === firstLetter) {
                    element.list.push({name: item.nm, id: item.id})
                }
            })
        }
    })
    cityList.sort((name1, name2) => {
        if (name1.index > name2.index) {
            return 1
        }
        else if (name1.index < name2.index) {			
            return -1
        }
        else {
            return 0
        }
    })
    function toCom(firstLetter){
        for(let item of cityList){
            if( item.index ===  firstLetter){
                return false;
            }
        }
        return true;
    }
    return {
        cityList,
        hotCityList
    }
};
export default {
    cityList (state) {
        return formartCityList(state.cityListALL).cityList
    },
    hotCityList (state) {
        return formartCityList(state.cityListALL).hotCityList
    }
}