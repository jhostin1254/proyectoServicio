import { getInstance } from "../../API/getInstance";
import React, {useState,useEffect} from "react";


export default function Search() {
    // crear los useState
    const[item,setItem] = useState([])
    const[search , setSearch] = useState("")

    //obtener la data
    const {data} = getInstance("https://localhost:44343/api/Pantalla")

    //obtener los valores del input
    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    //metodo de filtrado

    let results =  []

    if(!search){
        results = data
    }else{
        results = data.filter((data) =>(
            data.dpanta.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ))
    }

    console.log(results)


  return results;
}