class GetTasks {
  constructor(repo) {
    this.repo = repo
  }

  async execute() {
    try {
      return repo.getTasks()
    } catch (e) {
      throw e
    }
  }
}

export default GetTasks