import React from "react";

let projectList = [
  {
    name: "Tranquil",
    url: "https://rugged-gunnison-25361.herokuapp.com/",
    technologies: "JavaScript, HTML, CSS, Node.js, MySQL, Handlebars",
    repo: "https://github.com/lucvankerkvoort/TranquiL",
  },
  {
    name: "Locals",
    url: "https://fathomless-bastion-86766.herokuapp.com/",
    technologies: "JavaScript, React, Node.js, MySQL, Google Maps API",
    repo: "https://github.com/lucvankerkvoort/locals",
  },
  {
    name: "TicTacToe",
    url: "http://lucstictactoe.herokuapp.com/",
    technologies: "JavaScript, React, CSS",
    repo: "https://github.com/lucvankerkvoort/TicTacToe",
  },
  {
    name: "Google Search Books",
    url: "https://pure-harbor-50344.herokuapp.com/",
    technologies: "JavaScript, HTML, CSS, MongoDB, Node.js",
    repo: "https://github.com/lucvankerkvoort/GoogleSearchBooks",
  },
  {
    name: "Clicky Game",
    url: "https://react-clicky-game-luc.herokuapp.com/",
    technologies: "JavaScript, React, CSS",
    repo: "https://github.com/lucvankerkvoort/Clicky-Game",
  },
];

function Elements() {
  return projectList.map((element, i) => {
    return (
      <div className="background">
        <div className="info">
          <h2>{element.name}</h2>
          <p>Technologies: {element.technologies}</p>
          <a href={element.url}>Link</a>
          <br />
          <a href={element.repo}>Repository</a>
        </div>
      </div>
    );
  });
}

export default Elements;
