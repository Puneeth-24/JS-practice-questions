function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const user = {
                id:1,
                name:"Puneeth",
                email:"pjs@gmail.com"
            };
            resolve(user);
        },2000);
    });
}

async function getUser() {
    const data = await fetchUserData();
    console.log(data);
}

getUser();