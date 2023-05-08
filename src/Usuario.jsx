import React from "react";

function PerfilUsuario(props) {
  const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg");
  const [nome, setNome] = React.useState("Catana");

  function InserirImagem() {
    const ImagemNova = prompt("Insira URL da foto de perfil nova");
    if (ImagemNova != "") {
      setImagem(ImagemNova);
    }
  }

  function InserirNome() {
    const NomeNovo = prompt("Insira o novo user");
    if (NomeNovo != "") {
      setNome(NomeNovo);
    }
  }

  return (
    <div class="usuario">
      <img data-test="profile-image" onClick={InserirImagem} src={imagem} />
      <div class="texto">
        <strong>{props.usuario}</strong>
        <span data-test="name">
          {nome}
          <ion-icon data-test="edit-name" onClick={InserirNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default function Usuario() {
  return <PerfilUsuario usuario="Catana Comics" />;
}
