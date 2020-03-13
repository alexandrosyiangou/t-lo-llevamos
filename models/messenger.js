/**
 * Creates an instance of Brand.
 *
 * @constructor
 * @param {string} id Th e unique identifier for the [Brand] object.
 * @param {string} name The name of the [Brand].
 * @param {string} closeEndDay
 * @param {string} phoneNumber
 * @param {string} courierRating
 * @param {string} dailyMoneyHandled
 * @param {string} earningsPercentage
 * @param {string} identificationCard
 */ 
module.exports = class Messenager {
    constructor(id, name, phoneNumber, closeEndDay, courierRating, dailyMoneyHandled, earningsPercentage, identificationCard) {
      this.id = id;
      this.name = name;
      this.closeEndDay = closeEndDay;
      this.phoneNumber = phoneNumber;
      this.courierRating = courierRating;
      this.earningsPercentage = earningsPercentage;
      this.identificationCard = identificationCard;
      this.dailyMoneyHandled = dailyMoneyHandled;
      
      
      
    }
  
    getId() {
      return this.id;
    }
  }
  