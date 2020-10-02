//Console side first
// An array of colors that is going to be use to change the background-color.
// Create an object that will have methods that can turn background color manually, automatically, or stop it
// It should have a run/stop toggle when automatic transitions to manual & vice versa

//create color property that will give any random color;

let changeBackground = {
  colorArray: [
    "maroon",
    "red",
    "orange",
    "yellow",
    "olive",
    "green",
    "purple",
    "fuchsia",
    "lime",
    "teal",
    "aqua",
    "blue",
    "navy",
    "black",
    "gray",
    "silver",
    "white",
    "crimson",
  ],
  randomColor: function () {
    return this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
  },
  light: undefined, //Global key-pair. Used for setInterval & clearInterval
  manualSelection: function () {
    if (typeof this.light === "number") {
      clearInterval(this.light); //When light is set to setInterval
      this.light = null; //Reset the light property back to null
      //console.log(this.randomColor());
      return this.randomColor();
    } else {
      //console.log(this.randomColor());
      return this.randomColor();
    }
  },
  automaticSelection: function () {
    if (!this.light) {
      this.light = setInterval(function () {
        let randomColor = changeBackground.randomColor(); //return randomColor for this callback in setInterval will give me undefined.
        //console.log(randomColor);
        document.body.style.backgroundColor = randomColor;
      }, 600);
    } else {
      clearInterval(this.light);
      this.light = null;
    }
  },
  stopSelection: function () {
    if (typeof this.light === "number") {
      clearInterval(this.light);
      this.light = null;
    }
  },
};

//Console side & DOM

let handler = {
  manualButton: function () {
    let manually = changeBackground.manualSelection();
    document.body.style.backgroundColor = manually;
  },
  automaticButton: function () {
    changeBackground.automaticSelection();
  },
  stopButton: function () {
    changeBackground.stopSelection();
  },
};
