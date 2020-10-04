class SaveTasks {
  constructor(repo) {
    this.repo = repo
  }

  async execute(task) {
    try {
      repo.saveTasks(task)
    } catch (e) {
      throw e
    }
  }
}

export default SaveTasks