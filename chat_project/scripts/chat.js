// adding new chat documents
class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        //remember this variable connect to the firestore collection 'chats'
        this.chats = db.collection('chats');
    }
    async addChat(message) {
        // format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document
        const response = await this.chats.add(chat);
    }
}

const chatroom = new Chatroom('gaming', 'shaun');
console.log(chatroom);
// setting up a real-time listener to get new chats
// updating the username
// updating the room