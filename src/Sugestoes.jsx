function Sugestao(props){
  return (
    <div class="sugestao">
        <div class="usuario">
            <img src={props.imagem}/>
        
            <div class="texto">
                <div class="user">{props.user}</div>
                <div class="razao">{props.razao}</div>
            </div>
        </div>

    </div>
  )
    
}
export default function Sugestoes(){
    const ListaSugestoes = [  
    <Sugestao imagem = "assets/img/bad.vibes.memes.svg" user = "bad.vibes.memes" razao = "Segue você" />,
    <Sugestao imagem = "assets/img/chibirdart.svg" user = "chibirdart" razao = "Segue você" />,
    <Sugestao imagem = "assets/img/razoesparaacreditar.svg" user = "razoesparaacreditar" razao = "Novo no Instagram" />,
    <Sugestao imagem = "assets/img/adorable_animals.svg" user = "adorable_animals" razao = "Segue você" />,
    <Sugestao imagem = "assets/img/smallcutecats.svg" user = "smallcutecats" razao = "Segue você" />
    ];

    return (
        <div class="sidebar">
        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
          {ListaSugestoes.map((indice) => <div>{indice}</div>)}
        </div>

        <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    )
}