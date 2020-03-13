const knex = require('../knex')

async function insertMessages() {
  try {
    await knex('Messages').insert({

    })
    return {
      message: 'Messages Insert Successful'
    }
  } catch(error) {
    return {
      error: 'Messages Insert Failed'
    }
  }
}

async function updateMessages() {
  try {
    await knex('Messages').update({

    })
    return {
      message: 'Messages Update Successful'
    }
  } catch(error) {
    return {
      error: 'Messages Update Failed'
    }
  }
}

async function deleteMessages() {
  try {
    await knex('Messages').delete({

    })
    return {
      message: 'Messages Delete Successful'
    }
  } catch(error) {
    return {
      error: 'Messages Delete Failed'
    }
  }
}

exports.insertMessages = insertMessages;
exports.updateMessages = updateMessages;
exports.deleteMessages = deleteMessages;
