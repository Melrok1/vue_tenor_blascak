import axios from "axios"


const trendyEndpoint = "https://g.tenor.com/v1/trending?key=LIVDSRZULELA&limit=20"
export const retrieveCollection = ({ commit }) => {
    let getRequest = axios.get(trendyEndpoint);

    getRequest.then((response) => {
        console.log('Taham trendy', response.data.results)
        commit('SAVE_TRENDY_COLLECTION', response)
    })
}