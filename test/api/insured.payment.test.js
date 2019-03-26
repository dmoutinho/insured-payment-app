const assert = require('assert');
const request = require('request');
const appEndpoint = require('../../server').appEndpoint;
const message = require('../../app/utils/message.util');
const Payment = require('../../app/models/payment.model');

function dateStr(date) {
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}

function decYears(date,years) {
    date.setFullYear(date.getFullYear()-years);
    return date;
}

describe('payment api', function() {
    describe('exec pay', function() {
        it('should return status paid', function(done) {
            let payment = new Payment({
                cardNumber : "123456789", 
                valid : "2019-12"
            });
            request.put(appEndpoint+'/pay', { json : payment }, (err, res, body) => {
                if (err) assert.fail(err);
                assert.equal(body.status,payment.STATUS_ENUM.PAID);
                assert.equal(res.statusCode,200);
                done();
            });
        });
    });
});