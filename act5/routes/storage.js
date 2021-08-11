let ws_auth_user = null;
let ws_auth_name = null;

const Storage = {
    letin(username, user_id) { ws_auth_name = username; ws_auth_user = user_id; console.log(`${ws_auth_user} logged in`); return user_id;},
    letout() { ws_auth_user = null;},
    whosit() { return ws_auth_user;},
    auname() { return ws_auth_name;},
}

module.exports = Storage;

