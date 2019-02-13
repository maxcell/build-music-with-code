
// This is the audio file
var cNote = document.getElementById('cNote')
var dNote = document.getElementById('dNote')
var eNote = document.getElementById('eNote')
var fNote = document.getElementById('fNote')
var gNote = document.getElementById('gNote')
var aNote = document.getElementById('aNote')
var bNote = document.getElementById('bNote')


document.addEventListener('keypress', (event) => {
  // Callback

  // 97 is 'a'
  if(event.keyCode === 97){
     cNote.currentTime = 0
      // Then play
     cNote.play()
  }

  // 115 's'
  if(event.keyCode === 115) {
    dNote.currentTime = 0
    dNote.play()
  }

  // 'd'
    if(event.keyCode === 100) {
    eNote.currentTime = 0
    eNote.play()
  }

  // 'f' -> 102
  if(event.keyCode === 102) {
    fNote.currentTime = 0
    fNote.play()
  }

  // 'g' --> 103
  if(event.keyCode === 103) {
    gNote.currentTime = 0
    gNote.play()
  }
  // 'h' -> 104
  if(event.keyCode === 104) {
    aNote.currentTime = 0
    aNote.play()
  }

  // 'j' -> 106
  if(event.keyCode === 106) {
    bNote.currentTime = 0
    bNote.play()
  }

  console.log(event.keyCode)
  // Tell my audio note to start at 0

})



// This is grabbing the box
document.getElementById('c').addEventListener('click', () => {
  // Callback

  // Tell my audio note to start at 0
  cNote.currentTime = 0
  // Then play
  cNote.play()
})

document.getElementById('d').addEventListener('click', () => {
  // Callback

  // Tell my audio note to start at 0
  dNote.currentTime = 0
  // Then play
  dNote.play()
})

document.getElementById('e').addEventListener('click', () => {
  // Callback

  // Tell my audio note to start at 0
  eNote.currentTime = 0
  // Then play
  eNote.play()
})

document.getElementById('e').addEventListener('click', () => {
  // Callback

  // Tell my audio note to start at 0
  eNote.currentTime = 0
  // Then play
  eNote.play()
})

document.getElementById('f').addEventListener('click', () => {
  // Callback

  // Tell my audio note to start at 0
  fNote.currentTime = 0
  // Then play
  fNote.play()
})

document.getElementById('g').addEventListener('click', () => {
  // Callback

  // Tell my audio note to start at 0
  gNote.currentTime = 0
  // Then play
  gNote.play()
})

document.getElementById('a').addEventListener('click', () => {
  // Callback

  // Tell my audio note to start at 0
  aNote.currentTime = 0
  // Then play
  aNote.play()
})

document.getElementById('b').addEventListener('click', () => {
  // Callback

  // Tell my audio note to start at 0
  bNote.currentTime = 0
  // Then play
  bNote.play()
})
