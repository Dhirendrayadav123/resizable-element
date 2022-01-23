
import './App.css';

function App() {
  const el = document.querySelector(".item");
  
const resizers = document.querySelectorAll(".resizer");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer = e.target;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      const rect = el.getBoundingClientRect();

      if (currentResizer.classList.contains("resizer-t")) {
        
        el.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains("resizer-r")) {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (currentResizer.classList.contains("resizer-l")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        
        el.style.top = rect.top - (prevY - e.clientY) + "px";
      } else {
        
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
        
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
     
    }
  }
}


  return (  
      <div id='resizeMe' className='resizable'>
        <div className='resizer resize-r'>
        </div>
        <div className='resizer resizer-b'>
        </div>
        <div className='resizer resizer-l'>
        </div>
        <div className='resizer resizer-t'>
        </div>
      </div> 
  );
}

export default App;
