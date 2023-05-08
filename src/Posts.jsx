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
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.usuarioFoto} />
            {props.usuarioTexto}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img
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
                class={curtir === false ? "" : "colorido"}
                onClick={CurtirPost}
                name={curtir === false ? "heart-outline" : "heart"}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon
                onClick={SalvarPost}
                name={salvar === false ? "bookmark-outline" : "bookmark"}
              ></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.pagCurtida} />
            <div class="texto">
              Curtido por
              <strong> {props.usuarioCurtida}</strong> e{" "}
              <strong> outras {curtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default function Posts() {
  
    const ListaPost = [      <Post
      usuarioFoto="assets/img/meowed.svg"
      usuarioTexto="meowed"
      imagem="assets/img/gato-telefone.svg"
      pagCurtida = "assets/img/respondeai.svg"
      usuario = "respondeai"
      QtdeCurtidas = {150}
  
  
    />,
    <Post
      usuarioFoto="assets/img/barked.svg"
      usuarioTexto="barked"
      imagem="assets/img/dog.svg"
      pagCurtida="assets/img/adorable_animals.svg"
      usuarioCurtida="adorable_animals"
      QtdeCurtidas={35}
    />
  ]
    return (
      <ul>
        {ListaPost.map((i) => <li>{i}</li>)}
      </ul>
    );
  }
