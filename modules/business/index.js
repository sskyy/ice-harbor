var _ = require('lodash'),
  Q = require('q')


exports.info = {
  deps : ['respond'],
  respond : {
    "request.get./": function () {
      return function () {
        this.data('$$ctx').body = 'ICE FRAMEWORK'
      }
    },
    "request.get.user/:id": function handleUserGetPage() {
      return function (id) {
      }
    },
    "request.get.user/1": function justTest() {
      console.log("request should fire in dev stack")
      return function toTestRespondFunction(){
        console.log("respond should fire in dev stack")
      }
    },
    "request.put.user": function () {
      return function () {
        var bus = this
        this.data('$$models').user.find().then(function (users) {
          bus.data('$$ctx').body = users
        })
      }
    },
    "request.get.users": function () {
      return function () {
        var bus = this
        this.data('$$models').user.find().then(function (users) {
          console.log("real ctx should be replaced",JSON.stringifybus.data('$$ctx'))
          bus.data('$$ctx').body = users
        })
      }
    }
  },
  onStart : function(){
    console.log("====ICE HARBOR START====")
  }
}