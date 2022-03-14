// const INITIAL_STATE ={
//     counter: 0
// }
 const Reducer =(counter = 0 ,action)=>{
     if(action.type  ==="PLUS"){
        //  console.log("idrees")
     return counter = ++counter
 }
 else if(action.type  ==="MINUS"){
     return counter = --counter
 }
 else{
     return counter
 }
 }
 export {Reducer}