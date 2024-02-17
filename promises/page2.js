// a promise is special js object, which denotes eventual completion or failure of asynchronus operation 


function doLogin(callback){


    setTimeout(()=>{
        let userProfile={name:"bhaskar"}

        console.log("matching the credentials")
        callback(userProfile)

        return userProfile
    }
    ,10000)
   
}

// let user=setTimeout(doLogin,3000)

function doShowProfile(user){
    console.log(user.name)
}

doLogin(doShowProfile)