// // variables


// const menuItems = document.querySelectorAll('.menu-item');
// const messagesNotification = document.querySelector('#messages-notification'); 
// const messages = document.querySelector('.messages ')
// const message = messages.querySelectorAll('.message')
// const messageSearch = document.querySelector('#message-search')





// //removes active class from all menu items on click 
// const changeActiveItem = () => {
//     menuItems.forEach(item => {
//         item.classList.remove('active')
//     })
// }

// menuItems.forEach(item => {
//     item.addEventListener('click', ()=> {
//         changeActiveItem();
//         item.classList.add('active'); 
//         if(item.id != 'notifications'){
//             document.querySelector('.notifications-popup').style.display = 
//             'none';
//          }
//          else{
//             document.querySelector('notifications-popup').style.display = 'block';
//             document.querySelector('#notifications . notification-count').style.display = 'none';

//         }
//     })
// })

// // MESSAGES

// const searchMessage = () =>{
//     const val =  messageSearch.value.tolowerCase(); 
// }
// messageSearch.addEventListener('keyup', searchMessage)



// messagesNotification.addEventListener('click', ()=> {
//     messages.style.boxShadow = '0 0 1rem var(--color-primary)';
//     messagesNotification.querySelector('.notification-count').style.display = 
//     'none'
//     setTimeout(() => {
//         messages.style.boxShadow = 'none'
//     }, 600);
// })





const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notification'); 
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const notificationsBtn = document.getElementById('notifications');
const notificationsPopup = document.querySelector('.notifications-popup');
const notificationCount = document.querySelector('#notifications .notification-count');

// Removes active class from all menu items on click
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        // Hide notifications popup if any other menu item is clicked
        if (item.id !== 'notifications') {
            notificationsPopup.classList.remove('active');
        }
    });
});

// Toggle notifications popup on icon click
notificationsBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling up
    notificationsPopup.classList.toggle('active'); // Toggle visibility
    notificationCount.style.display = 'none'; // Hide notification count on click
});

// Close notifications popup when clicking outside
document.addEventListener('click', (e) => {
    if (notificationsPopup.classList.contains('active') && !notificationsPopup.contains(e.target) && e.target !== notificationsBtn) {
        notificationsPopup.classList.remove('active');
    }
});

// MESSAGES: Highlight messages section when notifications are clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => { 
        messages.style.boxShadow = 'none';
    }, 2000);
});

// Message search functionality
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
};
messageSearch.addEventListener('keyup', searchMessage);











// ---------------------- THEME CUSTOMIZATION -------------
