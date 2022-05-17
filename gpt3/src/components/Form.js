import { useRef } from "react";
import '../css/form.css';
export  default function Form ({state,setState})
{
    var text=useRef("");
    function handleEvent(e)
      {
        e.preventDefault();
        var prompt=text.current.value;
        const data = {
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
       };
       fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {method: "POST",headers: {  "Content-Type": "application/json",
             Authorization: `Bearer ${process.env.REACT_APP_key}`,},body: JSON.stringify(data)})
             .then((response)=>{ return response.json(); })
             .then((Data)=>{
              var item={};
              item.id=Date.now().toString();
              item.prompt=prompt;
               item.res=Data['choices'][0]['text'];
               var newState=[...state];
               newState.unshift(item);
               setState(newState);
              })
             .catch((err)=>console.log(err));

       
     }
   return(
       <>
       <form className='container' >
       <p className='para'> Enter the Prompt</p>
       <textarea className="area" rows="5" cols="50" name="textArea"  ref={text}></textarea>
       <input className="button" type="submit" value="submit" onClick={handleEvent} />
       </form>
       

       </>
   )
}