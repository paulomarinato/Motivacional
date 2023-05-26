const versiculosBiblicos = [
    "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. - João 3:16",
    "No mundo tereis aflições, mas tende bom ânimo; eu venci o mundo. - João 16:33",
    "Porque o Senhor, teu Deus, é contigo por onde quer que andares. - Josué 1:9",
    "O Senhor é o meu pastor, nada me faltará. - Salmo 23:1",
    "O Senhor é o meu rochedo, e o meu lugar forte, e o meu libertador; o meu Deus, a minha fortaleza, em quem confio; o meu escudo, a força da minha salvação, e o meu alto refúgio. - Salmo 18:2",
    "Deixo-vos a paz, a minha paz vos dou; eu não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize. - João 14:27",
    "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti; o Senhor sobre ti levante o seu rosto e te dê a paz. - Números 6:24-26",
    "Porque para Deus nada é impossível. - Lucas 1:37",
    "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará. - Salmo 37:5",
    "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas. - Provérbios 3:5-6",
    "Tu me cercaste em volta e puseste sobre mim a tua mão. Tal conhecimento é maravilhoso demais para mim; é sobremodo elevado, não o posso atingir. - Salmo 139:5-6",
    "O Senhor está perto de todos os que o invocam, de todos os que o invocam em verdade. - Salmo 145:18",
    "Tudo posso naquele que me fortalece. - Filipenses 4:13",
    "Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus. Eu o fortalecerei e o ajudarei; eu o segurarei com a minha mão direita vitoriosa. - Isaías 41:10",
    "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. - Jeremias 29:11",
    "Porque a palavra de Deus é viva, e eficaz, e mais cortante do que qualquer espada de dois gumes, e penetra até à divisão da alma, e do espírito, e das juntas e medulas, e é apta para discernir os pensamentos e intenções do coração. - Hebreus 4:12",
    "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a minha destra fiel. - Isaías 41:10",
    "Vinde a mim, todos os que estai cansados e oprimidos, e eu vos aliviarei. - Mateus 11:28",
    "Honra a teu pai e a tua mãe, para que se prolonguem os teus dias na terra que o Senhor teu Deus te dá. - Êxodo 20:12",
    "Pois onde estiver o seu tesouro, aí também estará o seu coração. - Mateus 6:21",
    "Então conheçamos, e prossigamos em conhecer ao Senhor; a sua saída, como a alva, é certa; e ele a nós virá como a chuva, como chuva serôdia que rega a terra. - Oséias 6:3",
    "Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos. - Provérbios 16:3",
    "Porque sou eu que conheço os planos que tenho para vocês', diz o Senhor, 'planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. - Jeremias 29:11",
    "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus. - Romanos 8:1",
    "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas. - Provérbios 3:5-6",
    "Vigiai, estai firmes na fé, portai-vos varonilmente e fortalecei-vos. - 1 Coríntios 16:13",
    "Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra. - Jó 19:25",
    "E conhecereis a verdade, e a verdade vos libertará. - João 8:32",
    "Por isso, quer comais quer bebais, ou façais outra qualquer coisa, fazei tudo para glória de Deus. - 1 Coríntios 10:31",
    "Todavia, o Senhor esperará para ter misericórdia de vós; e, por isso, será exalçado para se compadecer de vós, porque o Senhor é um Deus de equidade. Bem-aventurados todos os que nele esperam. - Isaías 30:18",
    "A graça do Senhor Jesus Cristo, e o amor de Deus, e a comunhão do Espírito Santo sejam com todos vós. - 2 Coríntios 13:14",
    "Dai graças ao Senhor, porque ele é bom; porque a sua benignidade dura para sempre. - Salmos 136:1",
    "Mas os que esperam no Senhor renovam as suas forças; sobem com asas como águias; correm, e não se cansam; andam, e não se fatigam. - Isaías 40:31",
    "Antes, crescei na graça e no conhecimento de nosso Senhor e Salvador Jesus Cristo. A ele seja dada a glória, assim agora como no dia da eternidade. Amém. - 2 Pedro 3:18",
    "Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna em Cristo Jesus, nosso Senhor. - Romanos 6:23",
    "E aqueles que bem usarem do ministério alcançam para si uma boa posição e muita confiança na fé que há em Cristo Jesus. - 1 Timóteo 3:13",
    "Eu sou o Alfa e o Ômega, o princípio e o fim, diz o Senhor, que é, e que era, e que há de vir, o Todo-Poderoso. - Apocalipse 1:8",
    "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei. - Mateus 11:28",
    "E esta é a confiança que temos nele, que, se pedirmos alguma coisa, segundo a sua vontade, ele nos ouve. - 1 João 5:14",
    "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas. - Provérbios 3:5-6",
    "E conhecereis a verdade, e a verdade vos libertará. - João 8:32",
    "Pois onde estiver o seu tesouro, aí também estará o seu coração. - Mateus 6:21",
    "Antes, buscai o reino de Deus, e todas estas coisas vos serão acrescentadas. - Lucas 12:31",
    "O Senhor é o meu pastor; nada me faltará. - Salmos 23:1",
    "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti; o Senhor sobre ti levante o seu rosto e te dê a paz. - Números 6:24-26",
    "Em Deus, cuja palavra eu louvo, em Deus eu confio e não temerei. Que poderá fazer-me o simples mortal? - Salmos 56:4",
    "Porque para Deus nada será impossível. - Lucas 1:37",
    "Eu é que sei que pensamentos tenho a vosso respeito, diz o SENHOR; pensamentos de paz e não de mal, para vos dar o fim que desejais. - Jeremias 29:11",
    "Deem graças ao Senhor, porque ele é bom; o seu amor dura para sempre. - Salmos 118:1",
    "Quando passares pelas águas, eu serei contigo; quando pelos rios, eles não te submergirão; quando passares pelo fogo, não te queimarás, nem a chama ar
];
  
console.log(versiculosBiblicos[0]);  