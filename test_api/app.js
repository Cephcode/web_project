

// function   descendingOrder(n) {
//     let b=n.toString().split("");
//     let sum=0;
//         b.map((el)=>{
//             sum+=Number.parseInt(el,10);
//             return sum
//         });
//         let old = b.sort().reverse();
//         let result=old.map((el)=>{
//             return Number.parseInt(el,10);
//         });
//         return Number.parseInt(result.join(""),10);
//     }
//     descendingOrder(0)
//     descendingOrder(1)
//     descendingOrder(111)
//     descendingOrder(15)
//     descendingOrder(1021)
    // digitalOrder(123456789);
    // var isSquare = function(n){
    //     if(Math.sqrt(n)===Math.round(Math.sqrt(n))){
    //         console.log(Math.round(Math.sqrt(n)))
    //       return true
    //     }
    //     console.log('false')

    //     return false; }
    //     isSquare(0)
    let options={
      "Accept":" application/vnd.api+json",
      'Content-Type': "application/vnd.api+json"
      
    }
    let base_url='https://kitsu.io/api/edge/anime?filter[categories]=adventure';
    async function log(){
      let data=await fetch(base_url,options);
      let response=await data.json();
      console.log(response)
    }