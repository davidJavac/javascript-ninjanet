//dom queries
const chatlist = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-mssg');
const updateRoomForm = document.querySelector('.chat-rooms');

//check localstorage for a name
const username = localStorage.username ? localStorage.username: 'anonymous';

//class instances
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', username);

//get the chat and render
chatroom.getChats(data =>chatUI.render(data));

//add new chat
newChat.addEventListener('submit', e =>{

    e.preventDefault();
    
    const message = newChat.message.value.trim();

    chatroom.addChat(message)
    .then(() => newChat.reset())
    .catch(err => {console.log(err)});
});

//update username

newNameForm.addEventListener('submit', e=>{

    e.preventDefault();

    //update name
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);

    //reset the form
    newNameForm.reset();
    //show then hide the update message
    updateMessage.innerText = `Your name was updated to ${newName}`;

    setTimeout(() =>updateMessage.innerText = '', 3000);
});

//update room
updateRoomForm.addEventListener('click', e =>{

    if(e.target.tagName === 'BUTTON'){

        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));

        chatroom.getChats(chat => chatUI.render(chat));
    }
});

