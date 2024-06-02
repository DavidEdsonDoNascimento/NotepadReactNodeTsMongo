import mongoose from "mongoose";
const DB_CONFIG = 'mongodb+srv://usuario:usuario@notepadsample.lwk6sib.mongodb.net/notepad?retryWrites=true&w=majority&appName=NotepadSample';
class ConnectionService {
  static connect(): void {
    mongoose.connect(DB_CONFIG);
  }
}

export { ConnectionService }