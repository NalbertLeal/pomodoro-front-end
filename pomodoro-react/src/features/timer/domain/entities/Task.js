import uuid from '../../../../core/utils/uuid'

class Task {
  constructor(user, title, tags, id = uuid(), createdAt = new Date()) {
    this.id = id
    this.user = user
    this.title = title
    this.tags = tags
    this.createdAt = createdAt
  }
}

export default Task