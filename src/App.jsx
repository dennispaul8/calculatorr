   
   
   const App = () => {

      const show = (value) => {
         console.log(value)
      }

      //    const calc = () => {

      //       let inp1 = document.getElementById('inp1')
      //       let inp2 = document.getElementById('inp2')
      //       let inp3 = document.getElementById('inp3')
      //       let result = document.getElementById('result')

      //       if (inp2.value == '+') {  
      //          result.innerHTML = parseInt(inp1.value) + parseInt(inp3.value)
      //       }
    
    
      //       else if (inp2.value  == '-') { 
      //            result.innerHTML = parseInt(inp1.value) - parseInt(inp3.value)
      //       }
    
      //       else if (inp2.value  == '*') { 
      //           result.innerHTML = parseInt(inp1.value) * parseInt(inp3.value)
      //       }
         
      // }

      let h2;
      let h1;
      let operator;

      const press = (params) => {
              h1 = document.getElementById('h1');
          h1.innerHTML += params   
  }

     const del = () => {
                  h1.innerHTML = h1.innerHTML.slice(0, -1)    
      }

      const clearr= () => {
          h1.innerHTML= " "
          h2.innerHTML= " "
      }

      const operatorr = (params) => {
         h1 = document.getElementById('h1');
         h2 = document.getElementById('h2');

          h2.innerHTML = h1.innerHTML += params
          h1.innerHTML = ""
          operator = params
      }

      const equals = () =>{
         h1 = document.getElementById('h1');
         h2 = document.getElementById('h2');
         
          if (operator == '+') {
              h2.innerHTML += h1.innerHTML + '='
              h1.innerHTML = parseInt(h2.innerHTML) + parseInt(h1.innerHTML)
          
          }

          else if (operator == '-'){
              h2.innerHTML += h1.innerHTML + '='
              h1.innerHTML = parseInt(h2.innerHTML) - parseInt(h1.innerHTML)
            
          } 

          else if (operator == '/'){
              h2.innerHTML += h1.innerHTML + '='
              h1.innerHTML = parseInt(h2.innerHTML) / parseInt(h1.innerHTML)
          } 

          else if (operator == '*'){
              h2.innerHTML += h1.innerHTML + '='
              h1.innerHTML = parseInt(h2.innerHTML) * parseInt(h1.innerHTML)
          } 

          else if (operator == '**'){
              h2.innerHTML += h1.innerHTML + '='
              h1.innerHTML = parseInt(h2.innerHTML) ** parseInt(h1.innerHTML)
          } 
      }


         return (
            <main>
                      {/* <h1>This is home page</h1>
                      <p>i see the moon</p>
                      <button onClick={()=> show('He')} className={'btn btn-danger'}>show</button>
                      <br /> <br />

                      <input type="number" placeholder="value1" id="inp1" />
                      <input type="text" placeholder="operator" id="inp2"/>
                      <input type="number" placeholder="value2"  id="inp3"/>
                      <button onClick={()=> calc()} className={'btn btn-success'}>Calculate</button>
                      <div>Ans: <span id="result"></span></div> <br /><br /><br /> */}


                      <div className={"body"}>                     
                        <h1 id="h1"></h1>
                        <h2 id="h2"></h2>
                        <button className={"buttons"}>MC</button>
                        <button className={"buttons"}>MR</button>
                        <button className={"buttons"}>M+</button>
                        <button className={"buttons"}>M5</button>
                        <button className={"buttons"}>M-</button>
                        <button className={"buttons"}>M</button> 

                        <button className={"buttons1"} >%</button>
                        <button className={"buttons1"} onClick={clearr}>CE</button>
                        <button className={"buttons1"}>C</button>
                        <button className={"buttons1"} onClick={del}>DEL</button>

                        <button className={"buttons1"}>⅟</button>
                        <button className={"buttons2"} onClick={()=>operatorr('**')}>x²</button>
                        <button className={"buttons1"}>√</button>
                        <button className={"buttons1"} onClick={()=>operatorr('/')}>÷</button>

                        <button className={"buttons1"} onClick={()=> press(7)}>7</button>
                        <button className={"buttons1"} onClick={()=> press(8)}>8</button>
                        <button className={"buttons1"} onClick={()=> press(9)}>9</button>
                        <button className={"buttons1"} onClick={()=>operatorr('*')}>×</button>

                        <button  className={"buttons1"} onClick={()=> press(4)}>4</button>
                        <button  className={"buttons1"} onClick={()=> press(5)}>5</button>
                        <button  className={"buttons1"} onClick={()=> press(6)}>6</button>
                        <button className={"buttons1"} onClick={()=>operatorr('-')}>-</button>

                        <button  className={"buttons1"} onClick={()=> press(1)}>1</button>
                        <button  className={"buttons1"} onClick={()=> press(2)}>2</button>
                        <button  className={"buttons1"} onClick={()=> press(3)}>3</button>
                        <button className={"buttons1"} onClick={()=>operatorr('+')}>+</button>

                        <button  className={"buttons1"}>±</button>
                        <button  className={"buttons1"} onClick={()=> press(0)}>0</button>
                        <button  className={"buttons1"}>.</button>
                        <button className={"buttons1"} onClick={()=>equals('=')}>=</button>
                    
            
                </div>
            </main>
           
         )
   }
   
   export default App;