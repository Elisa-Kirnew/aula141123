import  React, { useState } from 'react'

function CalculadoraDeSoma () {
    const [numero1, setNumereo1] = useState('')
    const [numero2, setNumereo2] = useState('')
    const [soma, setSoma] = useState(null);

    const calcualarSoma = () => {
        const resultado = Number (numero1) + Number (numero2);
        setSoma(resultado)
    }


    return(
        <div className='Calculadora'>
            <input type='number' value={numero1} onChange={(e) => setNumereo1(e.target.value)}
            placeholder='Digite o primeiro número'
            />

            <input type='number' value={numero2} onChange={(e) => setNumereo2(e.target.value)}
            placeholder='Digite o segundo número'
            />

            <button onClick={calcualarSoma}>Calcular soma</button>
            {soma !== null && <p> Resultado:{soma} </p>}

        </div>
    )
}


export default CalculadoraDeSoma;