
const server = require('../server.js').server;

describe("insured-payment-app",function(){
    require('./payment.model.test.js');
    require('./api/insured.payment.test.js');
    after(function(done) {
        server.close(done);
    });
});