
export default {
  name: {
    type: String
  },
  passWord: {
    type: String
  },
  create(name, pass) {
    this.name = name
    this.passWord = pass
    return this
  },
  get(){
    return this
  }
}