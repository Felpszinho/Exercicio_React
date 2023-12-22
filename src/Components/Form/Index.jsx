import { useState } from "react"
import style from './From.module.css'


export default function () {
  let [Peso, setPeso] = useState('');
  let [Altura, setAltura] = useState('');

  const IMC = () => {
    let peso = Peso;
    let altura = Altura;
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
      return 'Magreza';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Normal';
    } else if (imc >= 25 && imc < 30) {
      return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
      return 'Obesidade';
    } else if (imc >= 35 && imc < 40) {
      return 'Obesidade Mórbida';
    } else {
      return '';
    }
  }

  return (
    <>
      <div className={style.container} >
        <h1 className={style.title}>Calculadora IMC</h1>
        <form className={style.form} >
          <h3>Peso</h3>
          <input type="number" placeholder="Digite seu peso" onChange={e => setPeso(e.target.value)} />
          <h3>Altura</h3>
          <input type="number" placeholder="Digite sua altura" onChange={e => setAltura(e.target.value)} />


          <span className={style.resultado}>{IMC()} </span>


        </form>


      </div>

    </>

  )

}