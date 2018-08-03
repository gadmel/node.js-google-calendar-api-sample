const router = require('express').Router()
const events = require('./events')

router.get('/todayEvents', events.listEvents);

router.post('/event', events.insert);



module.exports = router