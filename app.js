console.log("hooked up fine")
let doggo = {
  name: "Sophia",
  moods: ["sad", "alert", "excited", "body-slam"],
  pets: 0,
  moodIndex: 0,
  tolerance: 2,
  images: ['/assets/saddoggo.jpg', '/assets/alertdoggo.jpg', '/assets/exciteddoggo.jpg', 'bodyslamdoggo.png']
}

function pet() {
  doggo.pets++
  if (doggo.pets % doggo.tolerance == 0) {
    doggo.moodIndex++;
  }
  drawDoggo()
}

function drawDoggo() {
  document.getElementById("pets").innerText = doggo.pets
  document.getElementById("doggo-image").setAttribute("src", doggo.images[doggo.moodIndex])
  document.getElementById("mood").innerText = doggo.moods[doggo.moodIndex]
  if (doggo.moodIndex == doggo.moods.length - 1) {
    document.getElementById('pet-button').disabled = true;
  } else {
    document.getElementById('pet-button').disabled = false;
  }
}

function treats() {
  doggo.moodIndex = 0
  doggo.pets = 0
  drawDoggo()
}