const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res){
    let defaultFlight = new Flight();
    let dt = defaultFlight.departs;
    dt.setFullYear(dt.getFullYear() + 1);
    dtMonth = dt.getMonth() + 1;
    if(dtMonth < 10) {
        dtMonth = dtMonth.toString().padStart(2, '0');
    };
    let destDate = `${dt.getFullYear()}-${dtMonth}-${dt.getDate().toString().padStart(2, '0')}T${dt.getHours().toString().padStart(2,'0')}:${dt.getMinutes().toString().padStart(2,'0')}`;
    res.render('flights/new');
}

function create(req, res){
    const flight = new Flight(req.body);
    flight.save(function(err){
        // handling errors
        if (err) return res.render('flights/new');
        // redirect to new.ejs for now
        res.redirect('/flights');
    });
}

function index(req, res){
    Flight.find({}, function (err, flights){
        res.render('flights/index', { flights });
    });
};

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      res.render('flights/show', { flights: 'Trip Detail', flight });
    });
  }