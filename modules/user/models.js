module.exports = {
  "identity": "user",
  "connection": "localDisk",

  "attributes": {
    "name": {
      "type" : "string"
    },
    "password": {
      "type" : "string"
    },
    "github" : {
      "type" : "string",
      "password" : true
    }
  }
}
