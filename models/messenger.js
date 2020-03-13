/**
 * Creates an instance of Messenger object.
 *
 * @constructor
 * @param {string} id
 * @param {string} name
 * @param {string} closeEndDay
 * @param {string} phoneNumber
 * @param {string} courierRating
 * @param {string} dailyMoneyHandled
 * @param {string} earningsPercentage
 * @param {string} identificationCard
 */ 

module.exports = class Messenger {
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
  }
  