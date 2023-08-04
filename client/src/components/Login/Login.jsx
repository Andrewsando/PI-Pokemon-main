
const login = ({access}) =>{

    const handlesubmit = (event) =>{
        event.preventDefault();
        access()
    }
    return(
        <div>
            <button onClick={handlesubmit}> Ingreso </button>
            
        </div>
    )
}

export default login