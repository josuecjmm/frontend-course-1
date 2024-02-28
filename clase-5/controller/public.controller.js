exports.getIndex = (req, res, next) => {
    res.render(
        'index',
        {
            hello: 'Jessy',
            users: [
                'Pablo',
                'Cami',
                'Tony'
            ]
        }
    )
};

exports.getUserInfo = (req, res, next) => {
    res.render(
        'userInfo',
        {
            user: {
                name: 'Camilo Martinez'
            },
            error: req.flash('error')
        }
    )
};

exports.getTest = (req, res, next) => {
    res.render(
        'test'
    )
};

exports.postProposal = (req, res, next) => {
    const { enterprise, salary, recruiter } = req.body;
    let valid = true; 
    if(!(enterprise && salary && recruiter)) {
        valid = false
        req.flash('error', 'Todos los campos son requeridos')
    }

    if(enterprise.length < 3) {
        valid = false 
        req.flash('error', 'La empresa debe de tener al menos 3 caracteres')
    } 

    if(parseInt(salary) < 1000) {
        valid = false
        req.flash('error', 'El salario debe ser al menos 1000')
    }

    if(recruiter.length < 3) {
        valid = false 
        req.flash('error', 'El reclutador debe de tener al menos 3 caracteres')
    } 

    if (valid) {
        res.redirect('/')
    } else {
        res.redirect('/user')
    }
};