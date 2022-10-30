import {useState,useEffect} from 'react'
function User(props){
     const [counter, Setcounter]=useState(0);

useEffect(()=>{
    // Setcounter(cou)
    console.log("useEffect" , counter)
},[counter])

useEffect(()=>{
    console.log("useEffect" , counter)
},[])
    //axios.get(ddd).then(x=>{
    //     setD(x.data)
    // })
    // console.log(props)
    return <button onClick={()=>Setcounter(counter+1)}>{counter}</button>
}
export default User