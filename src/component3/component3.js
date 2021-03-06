import './component3.css';

const Component3=()=>{
    const el3 = document.querySelector(".resizable3");
  
const resizers = document.querySelectorAll(".resizer");
let currentResizer3;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer3 = e.target;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      const rect = el3.getBoundingClientRect();

      if (currentResizer3.classList.contains("resizer-r")) {
        el3.style.width = rect.width - (prevX - e.clientX) + "px";
      }
       else if (currentResizer3.classList.contains("resizer-b")) {
        el3.style.height = rect.height - (prevY - e.clientY) + "px"; 
      }
       else if (currentResizer3.classList.contains("resizer-t")) {
        el3.style.height = rect.height + (prevY - e.clientY) + "px";
        el3.style.top = rect.top - (prevY - e.clientY) + "px";
      }
      else {
        el3.style.width = rect.width + (prevX - e.clientX) + "px";
        el3.style.left = rect.left - (prevX - e.clientX) + "px";
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
      <div id='resizeMe' className='resizable3'>
        
        <div className='resizer resizer-r'>
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
export default Component3;