/**
 * Creates an instance of Client.
 *
 * @constructor
 * @param {string} id
 * @param {string} name
 * @param {string} email
 * @param {string} address
 * @param {string} phoneNumber
 * @param {string} directionMap
 * @param {string} valueOfServices
 * @param {string} assignedMessages
 */ 

module.exports = class Client {
    constructor(id, name, email, address, phoneNumber, valueOfServices, assignedMessages, directionMap) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.directionMap = directionMap;
      this.valueOfServices = valueOfServices;
      this.assignedMessages = assignedMessages;
    }
  }
  