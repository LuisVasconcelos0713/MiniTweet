document.addEventListener("DOMContentLoaded", function () {
  let tweets = [];
  let nomesaleatorios = [];

  function adicionarTweet(tweet) {
    tweets.push(tweet);
    const nomes = ["Cerola", "Gu", "Lu", "Gustavo", "Luisa", "Luihsah"];
    const randomnum = Math.floor(Math.random() * nomes.length);
    nomesaleatorios.push(nomes[randomnum]);
    exibirTweets();
  }

  function editarTweeet(index) {
    const novoTweet = prompt("escreva seu novo tweet");
    tweets[index] = novoTweet;
    exibirTweets();
  }

  function exibirTweets() {
    const container = document.getElementById("containertweets");
    container.innerHTML = "";

    tweets.forEach((tweet, index) => {
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      const p = document.createElement("p");
      const nome = document.createElement("h1");
      nome.innerHTML = nomesaleatorios[0];
      p.innerHTML = tweet;
      container.appendChild(div);
      div2.appendChild(nome);
      div2.appendChild(p);
      div.appendChild(div2);
      const editButton = document.createElement("button");
      editButton.innerText = "editar";
      editButton.addEventListener("click", () => {
        editarTweeet(index);
      });
      div.appendChild(editButton);
    });
  }

  document.getElementById("tweetButton").addEventListener("click", () => {
    const tweetInput = document.getElementById("tweetInput");
    const tweet = tweetInput.value.trim();
    if (tweet != "") {
      adicionarTweet(tweet);
      tweetInput.focus();
      tweetInput.value = "";
    } else {
      alert("por favor, insira um tweet");
    }

    document.getElementById("cleantweets").addEventListener("click", () => {
      tweets = [];
      exibirTweets();
    });

    exibirTweets();
  });
});
