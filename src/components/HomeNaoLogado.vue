<template>
  <div class="naoLogado">
    <article>
      <h2 tabindex="1">Procure por sua aventura</h2>
      <div>
        <form>
          <input tabindex="2" type="text" />
          <input tabindex="3" type="submit" value="Proucurar" />
        </form>
      </div>
      <div>
        <p tabindex="4">Aqui voce conseguira encontrar novas mesas de jogos, editores e jopgadores.</p>
      </div>
    </article>
    <article>
      <h2 tabindex="5">Sobre nós</h2>
      <div class="imgText">
        <div class="img">
          <img
          tabindex="6"
            src="https://miro.medium.com/max/2000/1*N2iZbvzP7v-fTtXxAPdKvQ.jpeg"
            alt="loja de bordgames com um vasto acervo de jogos encaixotados"
          />
        </div>
        <div class="text">
          <p tabindex="7">
            O nosso objectivo aqui é de facilitar o encontro de jogadores com novos jogos tabletop, mesas de RPGs,
            eventos e locais de encotro directamente com os lojistas
          </p>
        </div>
      </div>
    </article>
    <article>
      <h2 tabindex="8">Sobre o criador</h2>
      <div class="imgText">
        <div class="img">
          <img
          tabindex="9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUYKLul0Ke5oAAmj6j3dtXqo52adPNlh6moNPv9zrrWYfdhDum"
            alt="foto de henrique samii, o barba"
          />
        </div>
        <div class="text" tabindex="10">
          <p>Cara mais bonito da façe da faculdade. Sua modestidade não encontra oposição nesta dimensão ou outras e sua barba da um +1 em Carisma.</p>
          <p>
            Pode o encontrar no seu coração ou neste link:
            <a tabindex="11" href="https://br.linkedin.com/in/henrique-samii-6ba969ab">Samii the Tech-priest</a>
          </p>
        </div>
      </div>
    </article>
    <article>
      <h2 tabindex="12">Contato</h2>
      <div id="formDiv">
        <form>
          <div class="contatoFormLine">
            <div class="labelDiv">
              <label tabindex="13" for="nome">Nome:</label>
            </div>
            <div class="inputDiv">
              <input tabindex="14" type="text" name="name" class="campos" id="contatoNome" />
            </div>
          </div>
          <div class="contatoFormLine">
            <div class="labelDiv">
              <label tabindex="15" for="telefone">Telefone:</label>
            </div>
            <div class="inputDiv">
              <input tabindex="16" type="tel" name="telefone" class="campos" id="contatoTelefone" />
            </div>
          </div>
          <div class="contatoFormLine">
            <div class="labelDiv">
              <label tabindex="17" for="email">E-mail:</label>
            </div>
            <div class="inputDiv">
              <input tabindex="18" type="email" name="email" class="campos" id="contatoEmail" />
            </div>
          </div>
          <div class="contatoFormLine">
            <div class="labelDiv">
              <label tabindex="19" for="mensagem">Mensagem:</label>
            </div>
            <div class="inputDiv">
              <textarea tabindex="20" name="textoContato" id="contatoTexto" class="campos" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div class="submitDiv">
            <input tabindex="21" type="submit" name="submit" id="contatoSubmit" />
          </div>
        </form>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "HomeNaoLogado"
};
</script>

<style>
.naoLogado div{
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
}

.naoLogado article{
	height: 500px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
}

.naoLogado div.imgText{
    flex-flow: row nowrap;
    overflow: auto;	
}

.naoLogado div.img img{
    width: 25em;
    align-items: start;
}

.naoLogado div.text{
	padding: 20px;
	align-items: start;
	width: 60%;
}
</style>
