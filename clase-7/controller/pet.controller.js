const axios = require('axios')

const { API_URL } = process.env;

exports.postCreatePet = async (req, res) => {
    const { id, name } = req.body;
    if (!(id && name)) {
        req.flash('error', 'Todos los campos son requeridos')
        res.redirect('/pet')
    } else {
        const response = axios.post(`${API_URL}/pet`, {
            id: id,
            name: name
        })
        console.log(response.data)
        res.redirect('/pet')
    }
}

exports.getCreatePet = async (req, res) => {
    const { petId } = req.params;
    if (petId) {
        const response = await axios.get(`${API_URL}/pet/${petId}`)
        res.render('pets/petCreation', {
            pet: response.data,
            error: req.flash('error')
        })
    } else {
        res.render('pets/petCreation',
            {
                pet: undefined,
                error: req.flash('error')
            }
        )
    }
}

exports.getPetList = async (req, res) => {
    const response = await axios.get(`${API_URL}/pet/findByStatus?status=available`)

    res.render('pets/petList', {
        list: response.data
    })
}

