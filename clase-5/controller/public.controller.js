exports.getIndex = (req, res, next) => {
    res.render(
        'index',
        {
            hello: 'world',
            users: [
                'Pablo',
                'Cami',
                'Jessy'
            ]
        }
    )
};