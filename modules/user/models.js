module.exports = {
  "identity": "user",
  "connection": "localDisk",

  "attributes": {
    "name": {
      "type" : "string"
    },
    "password": {
      "type" : "string",
      "password" : true
    },
    "github" : {
      "type" : "string",
      "password" : true
    }
  }
}
