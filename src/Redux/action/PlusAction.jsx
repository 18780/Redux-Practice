const Plus =(value)=>{
   
// console.log(value)

return(dispatch)=>{
    dispatch(
        {
            type : "PLUS",
            payload :value
        }
    )
    
}    
}
const Minus =value=>{
return(dispatch)=>{
    dispatch({
        type : "MINUS",
        payload : value
    })
}
}
export {Plus ,Minus}