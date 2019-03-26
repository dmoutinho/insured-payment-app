function Payment(payment) {
	if(payment) {
		this.cardNumber = payment.cardNumber; 
		this.valid = payment.valid
 	} 
}

const STATUS_ENUM = Object.freeze({
	PAID : 1,
	NOT_PAID : 2, 
});
Payment.prototype.STATUS_ENUM = STATUS_ENUM;

Payment.prototype.pay = function() {
    return { status : STATUS_ENUM.PAID };
};

module.exports = Payment;

module.exports.STATUS_ENUM = STATUS_ENUM;