const knex = require('../knex')

async function insertClient(name, email, address, phoneNumber, directionMap, valueOfServices, assignedMessages) {
  try {
    await knex('clients').insert({
      name: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      directionMap: directionMap,
      valueOfServices: valueOfServices,
      assignedMessages: assignedMessages,
    })
    return {
      message: 'Client Insert Successful'
    }
  } catch(error) {
    return {
      error: 'Client Insert Failed'
    }
  }
}

async function updateClient(params) {
  try {
    await knex('clients').update({
      ...params
    })
    return {
      message: 'Client Update Successful'
    }
  } catch(error) {
    return {
      error: 'Client Update Failed'
    }
  }
}

async function deleteClient(id) {
  try {
    await knex('Client').delete({
      id: id,
    })
    return {
      message: 'Client Delete Successful'
    }
  } catch(error) {
    return {
      error: 'Client Delete Failed'
    }
  }
}

exports.insertClient = insertClient;
exports.updateClient = updateClient;
exports.deleteClient = deleteClient;
