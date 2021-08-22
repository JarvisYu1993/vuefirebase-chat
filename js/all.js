import firebase from '../js/firebase.js';

const app = Vue.createApp({
    data() {
      return {
        chatroom: [],
        tempUsername: '',
        username: '我是誰',
        message: '',
      }
    },
    methods: {
      addUsername() {
        if (this.tempUsername.trim()) {
          this.username = this.tempUsername;
        } else {
          alert('請輸入正確姓名')
        }
      },
      addMessage() {
        if (!this.message.trim()) {
          return
        }
        const key = chatroomRef.push().key;
        console.log(key);
        chatroomRef.child(key).set({
          username: this.username,
          message: this.message,
          time: new Date().getTime(),
          key,
        });
        this.message = '';
      }
    },
    mounted() {
      chatroomRef.on('value', (snapshot) => {
        const data = snapshot.val();
        this.chatroom = data;
        console.log(data);
      })
    }
  }).mount('#app')