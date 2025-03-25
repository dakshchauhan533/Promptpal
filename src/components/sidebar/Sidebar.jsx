import React  ,{useContext, useState}from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onsent,prevprompt,setRecentprompt,newchat} = useContext(Context)

    const loadprompt = async(prompt)=>{
        setRecentprompt(prompt);
        await onsent(prompt)
    }





  return (
    <div className='sidebar'>
     <div className="top">
        <img className='menu' src={assets.menu_icon} alt="" onClick={()=>{
            setExtended(prev=>!prev)
        }} />
        <div className='new-chat' onClick={()=>newchat()}>
    <img src={assets.plus_icon} alt="plusicon" />
    {extended ?<p>New Chat</p>:null} 
    
        </div>
            {extended ?  <div className="recent">
            <p className="recent-title">Recent</p>
            {prevprompt.map((item,index)=>{
                return(
                    <div className='recent-entry' onClick={()=>loadprompt(item)}>
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0,18)}</p>
            </div>
                )
            })}
           
        </div>:null} 
       
     </div>
     <div className="bottom">
        <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended ?<p>Help</p>:null}
            
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended ?<p>Activities</p>:null}
        </div>
        <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended ?<p>Setting</p>:null}
        </div>
     </div>
    </div>
  )
}

export default Sidebar
