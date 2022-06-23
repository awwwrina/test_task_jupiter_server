const {Router} = require('express');
const router = Router();
const path = require('path');
const fs = require('fs')

const buffer = fs.readFileSync(path.join(__dirname, '../../data/db.json'));
const data = JSON.parse(buffer.toString());

router.get('/cards', async (req, res) => {
    try {
        let limit = +req.query.limit;
        let offset = +req.query.offset;
        const slicedData = data.cards.slice(offset, limit);
        res.status(200).json(slicedData);
    } 
    catch (error) {
        res.status(500).json({message: 'server error'});
    }
});

module.exports = router;