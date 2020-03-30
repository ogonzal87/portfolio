const faceFilterImg = "./images/code/face-filter.gif";
const dsImg = "./images/code/oskrds.gif";
const emotionImg = "./images/code/emotion-recognition.gif";
const pokemonImg = "./images/code/pokemon.gif";
const designCalImg = "./images/code/design-cal.gif";

const codeProjects = [
  {
    title: "Instagram Face Filter",
    description: "thi9s is a description that is so cool",
    codeImg: require(faceFilterImg),
    buttonName: "Play with the filter",
    linkTo: "https://instagram.com/a/r/?effect_id=1077625679243023"
  },
  {
    title: "This a  another titile from json asdg dsggsdf",
    description:
      "OSKRHQ.DS is a themable and accessible Styleguide AND also a Component Library written in React for responsive web interfaces. I created the system for myself to showcase my personal Brand. The magic is in the architecture and the expression of design in code. With this system, I can compose products faster with the same brand identity and anatomy.",
    codeImg: require(dsImg),
    buttonName: "Examine the system",
    linkTo: ""
  },
  {
    title: "Emotion Recognition",
    description: "this is a description that is so cool",
    codeImg: require(emotionImg),
    buttonName: "See play with it",
    linkTo: "https://emotion-recognition.surge.sh/"
  },
  {
    title: "Pokemon Game",
    description:
      "A Pokemon game app I created using Vanilla Javascript and CSS Custom Properties. I wanted to develop an app with Vanilla JS without relying on a Framework/Library like React.",
    codeImg: require(pokemonImg),
    buttonName: "See play with it",
    linkTo: "https://pokemon-game.surge.sh/"
  },
  {
    title: "Money Time",
    description:
      "Find out how much does a design meeting in the Bay Area costs... I created it to be mindful of a meeting's purpose and other people’s time. ⏰ = 💵 and the users we design for end up paying for it one way or another.",
    codeImg: require(designCalImg),
    buttonName: "See play with it",
    linkTo: "https://money-time.surge.sh/"
  }
];

export default codeProjects;
