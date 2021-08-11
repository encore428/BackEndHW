let auth_user = null

const Authuser = {
    letin(i) { auth_user = i; return i;},
    letout() { auth_user = null;},
    whosit() { return auth_user;}
}

module.exports = Authuser;
