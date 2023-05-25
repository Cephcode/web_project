// // let base_url='https://kitsu.io/api/edge';
// let base_url='https://api.jikan.moe/v4/anime/'
// let options={
//     method:'GET',
//     // headers:{
//     //     "Accept": "application/vnd.api+json",
//     //     "Content-Type": "application/vnd.api+json",}
    
// }
// let body=document.querySelector("#button")
// body.addEventListener("click",async ()=>{
//     try{
//         let data = await fetch(`${base_url}/8`,options);
//         data=await data.json();
//             console.log(data);
//     }
//     catch(err){
//         console.log(err)
//     }
    
// })
let url='https://api.jikan.moe/v4/anime';
console.log()
option={
    methods: {
        get:'GET',
    },
}
let param='/100/full'
let u='https://api.jikan.moe/v4/anime'

async function log(){
    try{
        let data = await fetch(`${u}`);
        let response=await data.json();
        console.log(response);
    }
    catch(err){
        console.log(err)
    }
}