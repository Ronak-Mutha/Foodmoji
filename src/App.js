import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍒": "Cherries",
  "🍓": "Strawberry"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");

  const [meaning, setMeaning] = useState(
    "emoji translation will appear here!!!"
  );

  const emojiInputHandler = (event) => {
    var userInput = event.target.value;
    setEmoji(userInput);
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning =
        "We currently don't have translation for this emoji in our database.";
    }
    setMeaning(meaning);
  };

  const emojiClickHandler = (emoji) => setMeaning(emojiDictionary[emoji]);

  return (
    <div className="App">
      <h1> Foodmoji </h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"Search your food emoji"}
      />
      <div className="Display"> {emoji} </div>
      <div className="Display"> {meaning} </div>

      {emojis.map((emoji, index) => {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={index}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
