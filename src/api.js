const URL = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${URL}/assets?limit=20`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: "application/json"
    },
  })
  .then(response => response.json())
  .then(response => response.data)
}

function getAsset(coin) {
  return fetch(`${URL}/assets/${coin}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: "application/json"
    },
  })
  .then(response => response.json())
  .then(response => response.data)
}

function getAssetHistory (coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()
  
  return fetch(`${URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: "application/json"
    },
  })
    .then(response => response.json())
    .then(response => response.data)
}

function getMarkets(coin) {
  return fetch(`${URL}/assets/${coin}/markets?limit=5`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: "application/json"
    },
  })
    .then(response => response.json())
    .then(response => response.data)
}

function getExchange(id) {
  return fetch(`${URL}/exchanges/${id}`, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: "application/json"
    },
  })
    .then(response => response.json())
    .then(response => response.data)
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
}