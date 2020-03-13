const knex = require('../knex')

async function insertClient() {
  try {
    await knex('Client').insert({

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

async function updateClient() {
  try {
    await knex('Client').update({

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

async function deleteClient() {
  try {
    await knex('Client').delete({

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
