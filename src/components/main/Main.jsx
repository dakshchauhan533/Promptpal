import React from 'react'
import './Main.css' // Import the main.css file
import {assets} from '../../assets/assets' // Import the assets file
import { Context } from '../../context/Context' // Import the Context file
import { useContext } from 'react' // Import the useContext hook
const Main = () => {

  const { prevprompt,
    setPrevprompt,
    onsent,
    setRecentprompt,
    recentprompt,
    showresult,
    loading,
    resultdata,
    input,
    setInput
    } = useContext(Context)




  return (
    <div className='main'>
      <div className="nav">
        <p>Promptpal</p>
        <img src={assets.user_icon} alt="icon" />
      </div>
      <div className="main-container">

    {!showresult? <>
      <div className="greet">
          <p> <span>Hello Sam .</span></p>
          <p>How Can I Help You  Today?</p>
        </div>
        <div className="cards">
        <div className="card">
          <p>Suggest some beautiful places to go in india.</p>
          <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
          <p>Briefly summarize this concept: urban planning.</p>
          <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
          <p>Brainstorming team bonding activities for our work retreat.</p>
          <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
          <p>improve the readibility of the following code.</p>
          <img src={assets.code_icon} alt="" />
        </div>
        </div>
    </>: <div className='result'>
     <div className="result-title">
      <img src={assets.user_icon} alt="usericon" />
      <p>{recentprompt}</p>



     </div>
     <div className="result-data">
      <img src={assets.gemini_icon} alt="" />
      {loading? <div className='loader'>
        <hr />
        <hr />
        <hr />
      </div>:<p dangerouslySetInnerHTML={{__html:resultdata}}></p>}
      
     </div>
      </div>}






      
        <div className="main-bottom">
          <div className="search-box">
            <input  onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>{
                onsent();
              }} src={assets.send_icon} alt="" />:null}
              
            </div>
          </div>
          <p className='bottom-info'>
            Gemini may display search results from the web. Please use caution and verify the information provided.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
