import React from "react";

function PerfilUsuario(props){
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")
    const [nome, setNome] = React.useState("Catana")


function InserirImagem(){
    const ImagemNova = prompt('Insira URL da foto de perfil nova')
    setImagem(ImagemNova)
}

function InserirNome(){
    const NomeNovo = prompt('Insira o novo user')
    setNome(NomeNovo)
}

return(
    <div className="usuario">
    <img  onClick = {InserirImagem} src={imagem} />
    <div class="texto">
      <strong>{props.usuario}</strong>
      <span>
        {nome}
        <ion-icon onClick = {InserirNome} name="pencil"></ion-icon>
      </span>
    </div>
  </div> 
)
}

export default function Usuario() {
    return (
      <PerfilUsuario usuario = "Catana Comics"  />
    )
  }