/**
 * Created by jiamiu on 14-4-9.
 */

module.exports = {
  identity : 'repository',
  connection : 'localDisk',
  attributes : {
    userId : {
      type : 'string'
    },
    github : {
      type : 'string'
    },
    version : {
      type : 'string'
    },
    description : {
      type : 'string'
    }
  },
  alter : {
    identity : 'user',
    attributes : {
      repositories : {
        type :"array"
      }
    }
  }

}
