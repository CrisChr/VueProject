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
    type: String  
  },
  comments: {
    type: Object
  },
  likes: {
    type: Number,
    default: 0
  },
  create(name, title, content, date, comments, likes) {
    this.name = name
    this.title = title
    this.content = content
    this.date = date
    this.comments = comments
    this.likes = likes
    return this
  },
  update(name, title) {

  },
  delete(name, title) {

  }
}