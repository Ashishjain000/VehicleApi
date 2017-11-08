'use strict';
module.exports = function(app) {
  var vehicle = require('../controllers/vehicleController');

  // vehicle Routes
  app.route('/tasks')
    .get(vehicle.getvehicleList);
    
};