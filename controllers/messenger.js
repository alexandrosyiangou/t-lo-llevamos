const knex = require('../knex')

async function insertMessages(name, address, closeEndDay, phoneNumber, courierRating, dailyMoneyHandled, earningsPercentage, identificationCard) {
  try {
    await knex('messengers').insert({
      name: name,
      address: address,
      closeEndDay: closeEndDay,
      phoneNumber: phoneNumber,
      courierRating: courierRating,
      dailyMoneyHandled: dailyMoneyHandled,
      earningsPercentage: earningsPercentage,
      identificationCard: identificationCard,
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

async function updateMessages(params) {
  try {
    await knex('messengers').update({
      ...params
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

async function deleteMessages(id) {
  try {
    await knex('messengers').delete({
      id: id,
    })
    return {
      message: 'Messages Delete Successful'
    }
  } catch(error) {
    return {
      error : 'Messages Delete Failed'
    }
  }
}

exports.insertMessages = insertMessages;
exports.updateMessages = updateMessages;
exports.deleteMessages = deleteMessages;
