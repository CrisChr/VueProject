export default {
  username: {
    type: String
  },
  title: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: Date  
  },
  comments: {
    type: Object
  },
  likes: {
    type: Number,
    default: 0
  },
  create(name, title, content) {
    this.name = name
    this.title = title
    this.content = content
    return this
  },
  update(name, title) {

  },
  delete(name, title) {

  }
}