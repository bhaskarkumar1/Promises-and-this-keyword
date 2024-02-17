// fetch is a function given by browswer not by nodejs sot fetch will be working on browser not on node env 
let api=fetch("https://catfact.ninja/fact")
api.then((res)=>{
    res.json().then((data)=>{
        console.log(data)
    })
}).catch((err)=>{
    console.log("Error")
})