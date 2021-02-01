const { Router } = require('express');
const router = Router();

router.route('/')
        .get((req, res) => res.json({message: 'Get Users Message'}))
        .post((req, res) => res.send('Post Users Notes'))

/*router.route('/:id')
        .get()
        .put()
        .delete()*/

module.exports = router;