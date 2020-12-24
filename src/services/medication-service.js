import TokenService from '../services/token-service'
import config from '../config'

const MedicationApiService = {

  addMedication(medication, patientId) {
    return fetch(`${config.API_ENDPOINT}/medications/${patientId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(medication)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getMedicationByPatientId(patientId) {
    return fetch(`${config.API_ENDPOINT}/medications/${patientId}`, {
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


  deleteMedication(medication, patientId) {
    return fetch(`${config.API_ENDPOINT}/medications/${patientId}/${medication}`, {
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



export default MedicationApiService;