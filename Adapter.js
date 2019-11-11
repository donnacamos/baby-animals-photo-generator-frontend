
const URL = 'http://localhost:3001/api/v1/photos'

const adapter = {

    getPhoto: () => {
        return fetch(`${URL}/photo`)
        .then(res=>res.json())
    },

    getCategory: () => {
        return fetch(`${URL}/category`)
        .then(res=>res.json())
    },

    createCategory: (name) => {
        return fetch(`${URL}/categories`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            name: JSON.stringify(name)
        })
    }, 

}
    

