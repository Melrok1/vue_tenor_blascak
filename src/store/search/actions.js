import axios from "axios"

export const retrieveCollection = ({ commit }, searchTerm = '') => {

    let trendyEndpoint = `https://g.tenor.com/v1/search?q=${searchTerm}&key=LIVDSRZULELA&limit=50&media_filter=gif`

    let getRequest = axios.get(trendyEndpoint);

    getRequest.then((response) => {
        commit('SAVE_FOUND_COLLECTION', response)
    }).catch((e) => {
        console.log(e.message)
    }) 
}