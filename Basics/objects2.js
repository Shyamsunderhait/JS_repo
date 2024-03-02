const instaUser = {};

instaUser.id = 223;
instaUser.name  = 'sammyjonesig'
instaUser.isLoggedIn= false;

console.log(instaUser);

const regUser = {
    email:"sammyjoensig@gmail.com",
    fullName:{
        username:{
            firstname:'shyam',
            lastname :'Hait'
        }
    }
}
console.log(regUser.fullName.username.firstname);

const linkedInuser = {
    job:'cleaning Enginneer',
    salary:34444,
    period:'2 months'
}

let obtotal = Object.assign({},instaUser,linkedInuser);// concatinate two objects// target and source


console.log(obtotal);