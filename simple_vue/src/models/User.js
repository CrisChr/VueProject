import Vue from 'vue'
import bus from '../bus/EventBus.js'

export default {
  name: {
    type: String
  },
  passWord: {
    type: String
  },
  create: function(name, pass){
    this.name = name
    this.passWord = pass
    return this
  }
}