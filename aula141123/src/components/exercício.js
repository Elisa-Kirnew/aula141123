import React,{useState} from 'react'

function CalculadoraDeSubtracao(){
    const[numero1,setNumero1]=useState('')
    const[numero2,setNumero2]=useState('')
    const[sub,setSub]=useState(null)

    const calcularSub=()=>{
        const resultado=Number(numero1)-Number(numero2);
        setSub(resultado)
    }

    return(
        <div className='Calculadora'>
            <h1>Minha primeira calculadora</h1>
            <input type='number' value={numero1} onChange={(e)=>setNumero1(e.target.value)} placeholder='Digite o primeiro número'></input>
            <input type='number' value={numero2} onChange={(e)=>setNumero2(e.target.value)} placeholder='Digite o segundo número'></input>

            <button onClick={calcularSub}>Calcular subtração</button>
            {sub!==null&&<p>Resultado:{sub}</p>}

        </div>
    )

}



export default CalculadoraDeSubtracao;