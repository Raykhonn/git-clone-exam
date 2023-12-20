export class User {
  id: string;
  constructor(userName: string) {}

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}

export class Repo {
  id: string;
  constructor(repoName: string) {}

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}

export class Branch {
  id: string;
  constructor(branchName: string) {}

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
