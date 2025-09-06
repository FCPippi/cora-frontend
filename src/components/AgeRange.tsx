import "../styles/AgeRangeStyle.css";

function AgeRange(){
    return(
        <div className="FaixaEtaria">
            
            
            <div className="filtro">
            <label className="texto" htmlFor= "filtro1">
                9 - 12 anos
                <input className="checkbox" type="checkbox" id="filtro1"/>
            </label>
            </div>
           
           
           <div className="filtro">
            <label className="texto" htmlFor="filtro2">
                13 - 15 anos
                <input className="checkbox" type="checkbox" id="filtro2"/>
            </label>
            </div>

            
        </div>
    )
    }

export default AgeRange