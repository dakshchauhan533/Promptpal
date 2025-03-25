import { createContext } from 'react';
import { useState } from 'react';
import run from '../config/gemini';
export const Context = createContext(null)  ;

const ContextProvider = (props) => {

    const[input, setInput] = useState('')
    const[recentprompt, setRecentprompt] = useState('')
    const[prevprompt, setPrevprompt] = useState([])
    const[showresult, setShowresult] = useState(false)
    const[loading, setLoading] = useState(false)
    const[resultdata, setResultdata] = useState('')

const delaypara = (index,nextword)=>{
    setTimeout(() => {
        setResultdata((prev)=>prev+nextword);
    }, 75*index);
}


const newchat = ()=>{
    setLoading(false);
    setShowresult(false);

}

    const onsent = async(prompt)=>{
        setResultdata('');
        setLoading(true);
        setShowresult(true);
        let response;

        if(prompt !== undefined){
response = await run(prompt);
setRecentprompt(prompt);
        }else{
            setPrevprompt(prev=>[...prev,input])
            setRecentprompt(input);
            response = run(input);
        }
        // setRecentprompt(input)
        // setPrevprompt(prev=>[...prev,input])
        const resp= await run(input);  
        let resparray = resp.split("**");
        let newresponse="";
        for(let i=0; i<resparray.length; i++){
           if(i===0 || i%2===0){
               newresponse += resparray[i] ;
        }else{
            newresponse += "<b>"+resparray[i]+"</b>";
        }}


        let newresponse2 = newresponse.split("*").join("</br>");
        let newresponsearray = newresponse2.split(" ");
        for(let i=0; i<newresponsearray.length; i++){
            delaypara(i,newresponsearray[i]+" ");
        }
        setLoading(false);
        setInput('');
    }

  
    const Contextvalue = {
        prevprompt,
        setPrevprompt,
        onsent,
        setRecentprompt,
        recentprompt,
        showresult,
        loading,
        resultdata,
        input,
        setInput,
        newchat,
     
    }
    return (
        <Context.Provider value={Contextvalue}>
            {props.children}
        </Context.Provider>
    )
}


export default ContextProvider;


