function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Inicio
  if (
    input == "Oi" || input == "Olá" || input == "Eai" || input == "ola" || input == "olá" || input == "oi" || input == "salve"
  ) {
    return "Olá! Bem vindo a JBLIVV!";
  } else if (
    input == "Bem e você?" || input == "bem e vc?" || input == "Bem e vc" || input == "bem e vc" || input == "0" || input == "bem" || input == "tudo bem" || input == "tudo certo" || input == "Tudo bem?" || input == "tudo bem?" || input == "Tudo Bem?" || input == "Tudo bem ?" || input == "tudo bem ?" || input == "Tudo Bem ?"
  ) {
    return "Estou bem! <br>Escolha uma das opções abaixo</br><br><strong>1:</strong>Como funciona a importação ou exportação com a JBLIVV?<br/><br><strong>2:</strong> Como Funciona as taxas? <br/><br><strong>3:</strong> Prazo de entrega.<br/><br><strong>4:</strong>Fornecemos rastreo de produtos?</br><br><strong>5:</strong> Garantia.</br><br><strong>6:</strong> Mais opções...</br>";

    //importação e exportação//
  } else if (input == "1") {
    return "A JBLIVV, possui varios locais de coleta e distribuição. Se deseja exportar um produto, você precisará preencher um formulário para despachar o mesmo em um destes locais. <br> Caso você opte por importar, basta solicitar ao vendedor, comparecer a uma de nossas unidades com seu produto e despacha-lo, nos entregaremso sua mercadoria na sua residencia! </br> ";

    //taxação//
  } else if (input == "2") {
    return "Temos dois planos de taxação, o primeiro plano 'JB' você paga um valor de R$300,00 reias, caso o produto seja taxado em um valor maior, nos cobrimos! <br> O segundo plano é 'LIV' você paga a taxa real sem interferencia de nossa equipe, a taxação neste caso varia por estado!</br>";


  } else if (input == "3") {
    return "Nossa politica de entrega se baseia pela localidade, sendo que o prazo maximo para chegada de um produto até sua residencia é de 20 dias!";

  } else if (input == "4") {
    return "Sim, após o produto ser postado é gerado um código de rastreo, e você será notificado pelo seu e-mail a cada movimentação do produto !";

  } else if (input == "5") {
    return "Nós da JBLIVV garantimos a entraga de seu produto, em caso de extravio, tanto o vendedor quando o comprador serão ressarcidos de seus prejuizos!";

    //Novas opções//
  } else if (input == "6") {
    return "<strong>7:</strong>Por que do nome JBLIVV?</br><br><strong>8:</strong> Como Surgiu?</br><br><strong>9:</strong> Quem somos?</br><br><strong>10:</strong> Está com algum problema com a entrega de seu produto? Nos deixe ajudar!</br><br><strong>11:</strong> Falar com Atendente.</br>";

  } else if (input == "7") {
    return "O nome JBLIVV, se originalizou das inicias de seus FUNDADORES, Jonas, Bruna, Lucas, Igor, Vitor e Vinicius.";

  } else if (input == "8") {
    return "Cansados da demora para receber suas mercadorias e normalmente recebe-las danificadas, nossos fundadores se juntaram em 2019 para resolver estes problemas. A JBLIVV desde então vem trazendo segurança e confiabilidade com seus clientes!";

  } else if (input == "9") {
    return "Somos uma empresa de importação e entrega, visamos o bem estar do cliente. Nossa função é garantir que os produtos cheguem de forma rápida e segura (por um preço justo aos nossos clientes).";

  } else if (input == "10") {
    return "Pedimos desculpas por qualquer problema que você esteja tendo com a entrega de produtos, por favor entre em contato com nossa equipe pelo (11) 3401-1019, por favor tenha em mãos o codigo de postagem ou o CPF/CNPJ.";

  } else if (input == "11") {
    return "Para falar com um de nossos atendentes, basta preencher os campos na aba <a href='#contact'>CONTATO</a>, e logo um de nossos atendentes entrará em contato para sanar suas duvidas!";

    //finalizações//
  } else if (
    input == "Só queria te conhecer" || input == "nada não" || input == "Nada não" || input == "nada" || input == "Nada"
  ) {
    return "Foi um prazer te conhecer! 👋";
  } else if (
    input == "Tchau" || input == "Bye" || input == "Até" || input == "Até mais" || input == "falou"
  ) {
    return "Até mais tarde!";
  } else if (
    input == "obrigado" || input == "Obrigado" || input == "Ok" || input == "ok" || input == "Valew" || input == "Valeu"
  ) {
    return "Até mais tarde! Nós da JBLIVV agredecemos seu contato!";

  } else if (
    input == "Tenho várias dúvidas!"
  ) {
    return "Escolha uma das opções abaixo para podermos ajudar!</br><br><strong>1:</strong>Como funciona a importação ou exportação com a JBLIVV?<br/><br><strong>2:</strong> Como Funciona as taxas? <br/><br><strong>3:</strong> Prazo de entrega.<br/><br><strong>4:</strong>Fornecemos rastreo de produtos?</br><br><strong>5:</strong> Garantia.</br><br><strong>6:</strong> Mais opções...</br>";
 
  } else if (
    input == "❤"
  ) {
    return "😍😊";
    
  } else {
    return "Desculpe mas acho que alguma coisa está errada, podemos tentar de novo?<br>Se preferir tecle 0 para voltar do começo!<br/>";
  }
}
