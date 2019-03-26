const LogBuilder = require('../log/log-builder');
const log = new LogBuilder(__filename);
const message = require('../utils/message.util');
const Payment = require("../models/payment.model")

exports.pay = (req, res) => {
    try {
        let payment = new Payment(req.body);
        log.debug("pay: "+JSON.stringify(payment));        
        let paymentStatus = payment.pay(); 
        log.debug("pay: "+JSON.stringify(paymentStatus));
        res.status(200).send(paymentStatus);
    } catch (error) {
        log.debug("pay error: "+error.message);
        res.status(500).send({
            message: message.CONST.INTERNAL_ERROR
        });               
    }
};