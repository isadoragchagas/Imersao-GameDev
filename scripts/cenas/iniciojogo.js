class TelaInicial {
  constructor(){
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._imagemHipsta();
    this._titulo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
   _imagemHipsta() {
        image(imagemHipsta, 100, 90)
    }
  
  _titulo() {
        textFont(fonteTelaInicial);
        textSize(70);
        text('As aventuras da Bruxa Hipsta', 240, 120);   
    }

    _texto() {
        textFont(fonteTelaInicial);
        textSize(25);
         text('num reino muito distante, uma bruxa chamada Hipsta foi', 650, 180);
        text('escolhida para proteger a floresta de Fangorn.', 680, 210);
        text('Hipsta ja enfretou muitos monstros e dessa vez', 650, 240);
        text('precisara de sua ajuda para enfrentar os Trolls e as gotinhas', 650, 270);
        text('envenenadas que insistem em tirar a tranquilidade da floresta!', 680, 300);
    } 
  
  _botao(){
    botao.y = 480;
   botao.draw();
  }
}
