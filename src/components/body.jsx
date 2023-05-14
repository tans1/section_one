import React from 'react'


function Body() {

let grey = ['In', 'Chronicle', 'everything', 'is', 'made', 'with', 'Blocks', 'that', 'come', 'with', 'pixel', 'perfect', 'design,', 'interactivity', 'and', 'motion', 'out', 'of', 'the', 'box.', 'Instead', 'of', 'designing', 
'from', 'scratch,', 'simply', 'choose', 'the', 'right', 'one', 'from', 
'our', 'library', 'of', 'blocks', 'and', 'see', 'the', 'magic', 'unfold']

let white = []

let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (prevScrollPos < scrollPos && grey.length > 0) {
            white.push(grey.shift())
            document.querySelector('.white').textContent = white.join(' ')
            document.querySelector('.grey').textContent = grey.join(' ')
    } else if (prevScrollPos > scrollPos && white.length > 0){
            grey.unshift(white.pop())
            document.querySelector('.white').textContent = white.join(' ')
            document.querySelector('.grey').textContent = grey.join(' ')
    }
    prevScrollPos = scrollPos;
    
  });

  return (
    <div class="container">
        <span class="white"></span> <span class="grey"></span>
    </div>
  )
}

export default Body
