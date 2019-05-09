let activeDoggo = 0

let doggos = [{
  name: "Sophia",
  moods: ["sad", "alert", "excited", "body-slam"],
  pets: 0,
  moodIndex: 0,
  tolerance: 2,
  images: ['/assets/saddoggo.jpg', '/assets/alertdog2.jpeg', '/assets/exciteddog2.jpg', '/assets/bodyslamdoggo.png']
}, {
  name: "Poppy",
  moods: ["sad", "alert", "excited", "body-slam"],
  pets: 0,
  moodIndex: 0,
  tolerance: 6,
  images: ['/assets/smallfat.jpg', '/assets/alertdog2.jpeg', '/assets/exciteddog2.jpg', '/assets/bodyslamdoggo.png']
}, {
  name: "Jaxon",
  moods: ["sad", "alert", "excited", "body-slam"],
  pets: 0,
  moodIndex: 0,
  tolerance: 4,
  images: ['/assets/black-lab-300x400.jpg', '/assets/alertdog2.jpeg', '/assets/exciteddog2.jpg', '/assets/bodyslamdoggo.png']
}]

function pet() {
  doggos[activeDoggo].pets++
  if (doggos[activeDoggo].pets % doggos[activeDoggo].tolerance == 0) {
    doggos[activeDoggo].moodIndex++;
  }
  drawDoggo()
}

function drawDoggo() {
  document.getElementById("pets").innerText = doggos[activeDoggo].pets
  document.getElementById("doggo-image").setAttribute("src", doggos[activeDoggo].images[doggos[activeDoggo].moodIndex])
  document.getElementById("mood").innerText = doggos[activeDoggo].mood[doggos[activeDoggo].moodIndex]
  if (doggos[activeDoggo].moodIndex == doggos[activeDoggo].moods.length - 1) {
    document.getElementById('pet-button').disabled = true;
  }
  else {
    document.getElementById('pet-button').disabled = false;
  }
}

function treats() {
  doggos[activeDoggo].moodIndex = 0
  doggos[activeDoggo].pets = 0
  drawDoggo()
}

function setActiveDoggo(index) {
  activeDoggo = index
  drawDoggo()
}

function drawButtons() {
  let template = ''
  for (let i = 0; i < doggos.length; i++) {
    let doggo = doggos[i];
    template += `
    <button class="btn btn-primary" onclick="setActiveDoggo(${i})">${doggo.name}</button>
      `
  }
  document.getElementById('doggo-buttons').innerHTML = template
}

drawButtons()