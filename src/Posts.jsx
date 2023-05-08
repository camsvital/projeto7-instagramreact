import react from "react";

function Post(props) {
  const [curtir, setCurtir] = react.useState(false);
  const [salvar, setSalvar] = react.useState(false);
  const [curtidas, setCurtidas] = react.useState(props.QtdeCurtidas);

  function CurtirPost() {
    if (curtir === false) {
      setCurtir(true);
      setCurtidas(Number(curtidas) + 1);
    } else {
      setCurtir(false)
      setCurtidas(Number(curtidas) - 1);
    }
  }

  function SalvarPost() {
    if (salvar === false) {
      setSalvar(true);
    } else {
      setSalvar(false);
    }
  }

  return (
    <div data-teste="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.UsuarioImagem} alt="imagem-Usuario"/>
          {props.UsuarioUser}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img
          data-teste="post-image"
          class={curtir === false ? "" : "colorido"}
          onClick={CurtirPost}
          name={curtir === false ? "heart-outline" : "heart"}
          src={props.imagem}
        />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              data-teste="like-post"
              class={curtir === false ? "" : "colorido"}
              onClick={CurtirPost}
              name={curtir === false ? "heart-outline" : "heart"}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
              onClick={SalvarPost}
              name={salvar === false ? "bookmark-outline" : "bookmark"}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.UsuarioCurtida} />
          <div class="texto">
            Curtido por
            <strong> {props.Usuario}</strong> e{" "}
            <strong data-test="likes-number"> outras {curtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const ListaPost = [
    <Post
      
      UsuarioImagem="assets/img/meowed.svg"
      UsuarioUser="meowed"
      imagem="assets/img/gato-telefone.svg"
      UsuarioCurtida="assets/img/respondeai.svg"
      Usuario="respondeai"
      QtdeCurtidas={150}
    />,
    <Post
      UsuarioImagem="assets/img/barked.svg"
      UsuarioUser="barked"
      imagem="assets/img/dog.svg"
      UsuarioCurtida="assets/img/adorable_animals.svg"
      Usuario="adorable_animals"
      QtdeCurtidas={35}
    />,
  ];
  return (
    <ul>
      {ListaPost.map((i) => (
        <li>{i}</li>
      ))}
    </ul>
  );
}
