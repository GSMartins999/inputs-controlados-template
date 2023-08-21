import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
 //Passo 1 declrar o estado para salvar o valor

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [estadoCivil, setEstadoCivil] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  //passo 3 criar a função do onChange
  const alterarNome =(event)=>{
    setNome(event.target.value)
  }

  const alterarIdade =(event)=>{
    setIdade(event.target.value)
  }

  const alterarEmail = (event) =>{
    setEmail(event.target.value)
  }

  const alterarSenha = (event) => {
    setSenha(event.target.value)
  }

  const limparInputs =(event) => {
    event.preventDefault()
    setNome("")
    setIdade("")
    setEmail("")
    setSenha("")
    setEstadoCivil("Selecione um estado:")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          {/* passo 2 adicionar a variável de estado no value do input*/}
           <Input value={nome} onChange={alterarNome} />  {/*onChange serve para chamar a função quando o input for alterado */}
        </label>
        <label>
          Idade:
          <Input type="number" value={idade} onChange={alterarIdade}/>
        </label>
        <label>
          Email:
          <br/>
          <Input type="email"  value={email} onChange={alterarEmail}/>
        </label>
        <label>
          Senha:
          <br/>
          <Input type="password"  value={senha} onChange={alterarSenha}/>
        </label>
        <label>
          Estado civil
          <br/>
          <select value={estadoCivil} onChange={(e) =>{setEstadoCivil(e.target.value)}}>
            {/* também podemos declarar o onChange dessa forma.
            Também podemos adicionar o value apenas com o e*/}
            <option>
             Selecione um estado:
            </option>
            <option>
              Casado(a)
            </option>
            <option>
              Solteiro(a)
            </option>
            <option>
              Viúvo(a)
            </option>
            <option>
              Divorciado(a)
            </option>
            <option>
              Namorando(a)
            </option>
          </select>
        </label>
        <button onClick={limparInputs}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
