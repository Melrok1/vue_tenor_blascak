import axios from "axios"


const trendyEndpoint = "https://g.tenor.com/v1/trending?key=LIVDSRZULELA&limit=50"
export const retrieveCollection = ({ commit }) => {
    let getRequest = axios.get(trendyEndpoint)

    getRequest.then((response) => {
        commit('SAVE_TRENDY_COLLECTION', response)
    }).catch((e) => {
        console.log(e.message)
    })
}