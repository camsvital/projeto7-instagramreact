
function story(props){
  return(
    <div className="story">
      <div className="imagem">
        <img src="{props.imagem}"/>
      </div>
      <div className="usuario">{props.texto}
      </div>
    </div>
  )
}

export default function Stories(){

  let ListaStories=[
    <story imagem="assets/img/9gag.svg" texto="9gag"/>
    <story imagem="assets/img/meowed.svg" texto="meowed"/>
    <story imagem="assets/img/barked.svg" texto="barked"/>
    <story imagem="assets/img/nathanwpylestrangeplanet.svg" texto="nathanwpylestrangeplanet"/>
    <story imagem="assets/img/wawawicomics.svg" texto="wawawicomics"/>
    <story imagem="assets/img/respondeai.svg" texto="respondeai"/>
    <story imagem="assets/img/filomoderna.svg" texto="filomoderna"/>
    <story imagem="assets/img/memeriagourmet.svg" texto="memeriagourmet"/>
  ]
  return (
    <ul class="stories">
    {ListaStories.map ((indice) => <li>{indice}</li>)}

    </ul>
  );
}
