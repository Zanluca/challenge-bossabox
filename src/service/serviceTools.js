import axios from 'axios'
const API_PATH = 'http://localhost:3000/'

const getTool = async ({
    queryString = '',
    queryTag = ''
} = {}) => {
    let query = ''

    if (queryString)
        query = `?q=${queryString}`
    else if (queryTag)
        query = `?tags_like=${queryTag}`

    try {
        const response = await axios.get(API_PATH + `tools${query}`)
        if (response.status === 200)
            return response.data
        else {
            console.error('Não foi possível recuperar a lista de ferramentas')
            console.log(response)
            return undefined
        }
    }
    catch (error) {
        console.log(error);
        return undefined
    }
}

const addTool = async (tool)  =>{
    try{
        const response = await axios.post(API_PATH + 'tools', 
            tool
        , {
            headers : {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 201) {
            return response.data
        } 
        else {
            console.error('Não foi possível registrar a nova ferramenta')
            console.log(response)
            return undefined   
        }
    }
    catch(error) {
        console.log(error)
        return undefined
    }
}

const deleteTool = async (toolID) => {
    try {
        const response = await axios.delete(API_PATH + `tools/${toolID}`)

        if (response.status === 200)
            return true
        else {
            console.error('Não foi possível exluir a ferramenta')
            console.log(response)
            return undefined     
        }
    }
    catch(error) {
        console.log(error)
        return undefined
    }
}

export {
    getTool,
    addTool,
    deleteTool
} 