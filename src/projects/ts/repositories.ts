import { User } from "../entities";

export class userRepo {
  userList: Array<User> = [];
  public getList() {
    return this.userList;
  }
}
