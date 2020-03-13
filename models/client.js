/**
 * Creates an instance of Brand.
 *
 * @constructor
 * @param {string} id Th e unique identifier for the [Brand] object.
 * @param {string} name The name of the [Brand].
 * @param {string} email
 * @param {string} address
 * @param {string} DirectionMap
 * @param {string} valueOfServices
 * @param {string} assignedMessages
 */ 
module.exports = class Client {
    constructor(id, name, email, address, valueOfServices, assignedMessages, DirectionMap) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.address = address;
      this.phonenumber = phonenumber;
      this.DirectionMap = DirectionMap;
      this.valueOfServices = valueOfServices;
      this.assignedMessages = assignedMessages;
    }
  
    getId() {
      return this.id;
    }
  }
  