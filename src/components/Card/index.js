import './styles.css';
import { useEffect, useState } from 'react';

export default function Card(props) {

    const [url,setUrl] = useState('');
    const [id,setId] = useState(0);
    
    useEffect(() => {

        fetch(props.url).then(response => response.json()).then(
            function (pokData) {
                setUrl(pokData.sprites['front_default']);
                setId(pokData.id);
            }
        ) 
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className="container-card">

            <div className='image'>
                <img src={url}  alt="" />
            </div>

            <div className="infos">[{id}] {props.name}</div>

        </div>
    );
}

