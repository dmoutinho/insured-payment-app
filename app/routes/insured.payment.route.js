const express = require("express");

module.exports = (app) => {

    const insuredPaymentController = require('../controllers/insured.payment.controller');

    app.put('/pay', insuredPaymentController.pay);
    
}