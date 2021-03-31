import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 12 },
                { id: 2, message: 'It is my first post', likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
                { id: 6, message: null }
            ],
            dialogs: [
                { id: 1, name: 'Dimych', link: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg' },
                { id: 2, name: 'Andrew', link: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png' },
                { id: 3, name: 'Sveta', link: 'https://i0.wp.com/www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg?resize=500%2C500&ssl=1' },
                { id: 4, name: 'Sasha', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODjJzDNZkooTebpMO2HVyVIZJs2GeHUdllA&usqp=CAU' },
                { id: 5, name: 'Viktor', link: 'https://99px.ru/cms/templates/main_top_b.png' },
                { id: 6, name: 'Valera', link: 'https://i.pinimg.com/236x/a9/e1/ca/a9e1ca26839ce8da74f4169870784f7f.jpg' }
            ],
            newMessageText: 'sample text'
        },
        sidebar: {
            friends: [
                { id: 3, name: 'Sveta', link: 'https://i0.wp.com/www.yugatech.com/wp-content/uploads/2020/09/Facebook-Avatar.jpg?resize=500%2C500&ssl=1' },
                { id: 4, name: 'Sasha', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODjJzDNZkooTebpMO2HVyVIZJs2GeHUdllA&usqp=CAU' },
                { id: 5, name: 'Viktor', link: 'https://99px.ru/cms/templates/main_top_b.png' }
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed');
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

window.state = store;


export default store;