const Slider = () =>{
   // const value = document.querySelector("#value");
   // const input = document.querySelector("#pi_input");
   // value.textContent = input.value;
   // input.addEventListener("input", (event) => {
   //   value.textContent = event.target.value;
   // });
 
    return(
      
    <div>
<form action="/action_page.php">
  <input type="range" id="vol" name="vol" min="0" max="50"/>
  <input type="submit"/>
</form>
      </div>
        
    )
}
export default Slider