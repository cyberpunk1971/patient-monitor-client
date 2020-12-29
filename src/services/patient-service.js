import TokenService from '../services/token-service'
import config from '../config'

const PatientApiService = {
  getPatients() {
    return fetch(`${config.API_ENDPOINT}/patients`, {
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
  getPatient(patientId) {
    return fetch(`${config.API_ENDPOINT}/patients/${patientId}`, {
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
  deletePatient(patientId) {
    return fetch(`${config.API_ENDPOINT}/patients/${patientId}`, {
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

  addPatient(patient) {
    return fetch(`${config.API_ENDPOINT}/patients`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(patient)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  editPatient(patient) {
    return fetch(`${config.API_ENDPOINT}/patients/${patient.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(patient)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
          
      )
  }
}

export default PatientApiService