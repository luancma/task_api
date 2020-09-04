import mongoose from "mongoose";

class Mongoose {
  private password: string;
  private user: string;
  private dbname: string;

  constructor(password: string, dbname: string, user: string) {
    this.password = password;
    this.dbname = dbname;
    this.user = user;
  }

  async connect(): Promise<void | TypeErrorConstructor> {
    await mongoose.connect(
      `mongodb+srv://${this.user}:${this.password}@cluster-test.imbnp.mongodb.net/${this.dbname}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    ).catch(error => {
      throw new Error(error)
    })
  }
}
export default Mongoose;
