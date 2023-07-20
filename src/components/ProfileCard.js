import {useState} from "react";


function ProfileCard({ titulo , handle , img}){


    const [ contador , setContador ] = useState(0);


    
    function handleClickSuma(){
        setContador(contador + 1);
    }

    function handleClickResta(){
        if(contador > 0){
            setContador(contador - 1);
        }
       
    }

     
    return (
        <div className="card">
            <div className="card-img ">
                <figure className="image is-192x192">
                    <img src={img} alt="logo"/>
                </figure>
            </div>         
            <div className="card-content">
                <div className="media-content">
                    <h3 className="title is-4">{titulo}</h3>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="columns">
                    <div className="column is-4">
                        <button onClick={handleClickSuma} className="button is-danger is-fullwidth">
                            <p>+</p>
                        </button>
                    </div>
                    <div className="column is-4">
                        <span><p>Likes {contador}</p></span>
                    </div>
                    <div className="column is-4">
                        <button onClick={handleClickResta} className="button is-danger is-fullwidth">
                            <p>-</p>
                        </button>
                    </div>


                </div>
                

            </div>            
        </div>
        
    )
}

export default ProfileCard;