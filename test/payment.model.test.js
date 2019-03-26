
const assert = require('assert');
const Payment = require('../app/models/payment.model');

describe('payment.model.test.js', function() {
    describe('exec pay', function() {
        it('should return status paid', function(done) {
            let payment = new Payment({
                cardNumber : "123456789", 
                valid : "2019-12"
            });
            assert.equal(payment.pay().status,payment.STATUS_ENUM.PAID);
            done();
        });
    });
});