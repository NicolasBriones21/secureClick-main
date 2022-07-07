export class UI {
  constructor() {}

  /**
   *
   * @param {sting} text
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text;
  }

  /**
   *
   * @param {string[]} choices
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }



  showScores(score) {
    const gameOverHTML = `
      <h1>Resultado</h1>
      <h2 id="score">Tu resultado es: ${score}</h2>
      <br>
            
                                <div class="col-md-6 col-sm-12 wow fadeInLeft">
                                    <div class="media">
                                        <a href="#" class="pull-left">
                                            
                                        </a>
                                        <div class="media-body">
                                            <h1>Si el resultado es menor de 5</h1>
                                            <p style="color:#000000";>Felicidades!, eres muy cuidadoso con lo que haces, sigue así</p>
                                        </div>
                                    </div>
            
                                </div>

                                        </a>
                                        <div class="media-body">
                                            <h1>Si el resultado es mayor de 5</h1>
                                            <p style="color:#000000";>Cuidado!, debes tener mas precacución al navegar en la web</p>
                                        </div>
                                    </div>
                                    
                                </div> 
 </div>
        </section>
      `;


    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}



