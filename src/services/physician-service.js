import TokenService from '../services/token-service'
import config from '../config'

const PhysicianApiService = {

  addPhysician(physician, patientId) {
    return fetch(`${config.API_ENDPOINT}/physicians/${patientId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(physician)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getPhysicianByPatientId(patientId) {
    return fetch(`${config.API_ENDPOINT}/physicians/${patientId}`, {
      method: 'GET',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },


  deletePhysician(physicianId, patientId) {
    return fetch(`${config.API_ENDPOINT}/physicians/${patientId}/${physicianId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      method: 'delete'
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}



export default PhysicianApiService;