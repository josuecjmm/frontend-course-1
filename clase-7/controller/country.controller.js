const axios = require('axios')

const { API_COUNTRY_URL } = process.env;

exports.getCountryList = async (req, res) => {
    const response = await axios.get(`${API_COUNTRY_URL}/all?fields=name`)
    const simplifiedCountryList = response.data.map(country => {
        return {
            common: country.name.common,
            official: country.name.official
        }
    })
    simplifiedCountryList
    res.render('countryList',
        {
            list: simplifiedCountryList
        }
    )
}


