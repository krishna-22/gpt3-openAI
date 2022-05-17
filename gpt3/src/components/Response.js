import '../css/response.css';
export default function Response({state})
{
    return(
        <>
        <ul className='list'>
           {state.map((item)=> <li className='item' key={item.id}><p> <span>Prompt :</span> {item.prompt}</p><p><span>Response  :</span>{item.res}</p></li>)}
        </ul>
        </>
    )
}