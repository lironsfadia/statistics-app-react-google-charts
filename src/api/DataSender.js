import axios from 'axios';

export function DataSender(payload, url){
    axios.post(url, payload)
    .then(response => {
        console.log("SUCCESS", response)
    }).catch(error => {
        console.log(error)
    })
}
