import { useEffect } from "react";

function App() {
  useEffect(() => {
    const colorPicker = document.getElementById("text-color-picker");
    const canvasColor = document.getElementById("background-color-picker");
    const fontPicker = document.getElementById("font-size-select");
    const clearButton = document.getElementById("clearButton");
    const saveButton = document.getElementById("saveButton");

    const canvas = document.getElementById("myCanvas");
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    const ctx = canvas.getContext("2d");

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    colorPicker.addEventListener("change", (e) => {
      ctx.strokeStyle = e.target.value;
      ctx.fillStyle = e.target.value;
    });

    canvasColor.addEventListener("change", (e) => {
      ctx.fillStyle = e.target.value;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });

    fontPicker.addEventListener("change",(e)=>{
      ctx.lineWidth = e.target.value;
    })

    canvas.addEventListener("mousedown", (e) => {
      const rect = canvas.getBoundingClientRect();
      isDrawing = true;
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
    });

    canvas.addEventListener("mousemove", (e) => {
      if (isDrawing) {
        const rect = canvas.getBoundingClientRect();
        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;


        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        lastX = currentX;
        lastY = currentY;
      }
    });

    canvas.addEventListener("mouseup", (e) => {
      isDrawing = false;
    });


    clearButton.addEventListener("click",()=>{
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

    saveButton.addEventListener("click",(e)=>{
      e.preventDefault()
      localStorage.setItem("canvasContents", canvas.toDataURL())
      let link = document.createElement("a")
      link.download = "my_sign.png"
      link.href = canvas.toDataURL()
      link.click()
    })

  }, []);

  return (
    <>
      <div className="parent box-border min-h-screen max-w-full flex flex-col justify-center ">
        <div className="flex flex-col justify-center items-center  w-auto lg:mx-20 md:mx-20 min-h-auto lg:my-20 md:my-20 my-10">
          <h1 className="text-5xl items-center lg:my-5 md:my-5 my-10">Quick Sign</h1>
        
          <div className="flex justify-evenly w-full flex-wrap">
            <div className="flex flex-col p-2 items-center">
              <label htmlFor="text-color-picker">Text Color Picker</label>
              <input
                type="color"
                className="w-60 h-12 bg-transparent border border-black px-5 py-2 my-2 cursor-pointer"
                id="text-color-picker"
                defaultValue="#000000"
              />
            </div>

            <div className="flex flex-col p-2 items-center">
              <label htmlFor="background-color-picker">Background</label>
              <input
                type="color"
                className="w-60 h-12 bg-transparent border border-black px-5 py-2 my-2 cursor-pointer"
                id="background-color-picker"
                defaultValue="#ffffff"
              />
            </div>

            <div className="flex flex-col p-2 items-center">
              <label htmlFor="font-size-select">Select Font Size</label>
              <select
                name="font-size"
                id="font-size-select"
                className="w-60 h-12 bg-transparent border border-black px-5 py-2 my-2 cursor-pointer"
              >
                defaultValue="10"
                <option value="5">5px</option>
                <option value="10" defaultValue={true}>
                  10px
                </option>
                <option value="20">20px</option>
                <option value="30">30px</option>
                <option value="40">40px</option>
                <option value="50">50px</option>
              </select>
            </div>
          </div>

          <canvas
            id="myCanvas"
            className="w-[80%] h-96 my-20 border-2 border-black"
          ></canvas>

          <div className="flex justify-evenly w-full my-10 flex-wrap lg:gap-0 md:gap-0 gap-5 ">
            <button
              id="clearButton"
              className="w-60 h-12 bg-red-500 px-5 py-2  rounded-md hover:bg-red-600 active:bg-red-700"
            >
              Clear
            </button>
            <button
              id="saveButton"
              className="w-60 h-12 bg-green-500 px-5 py-2 rounded-md hover:bg-green-600 active:bg-green-700"
            >
              Save & Download
            </button>
            <button className="w-60 h-12 bg-yellow-500 px-5 py-2 rounded-md hover:bg-yellow-600 active:bg-yellow-700">
              Retrieve Saved Signatures
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
