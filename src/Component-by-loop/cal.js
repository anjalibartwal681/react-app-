<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>


  <div class="tp-div">
    <form name="calculator">
      <input type="text" id="result" name="result" readonly autocomplete="off">
      <button type="button" onclick="funclick('1')">1</button>
      <button type="button" onclick="funclick('2')">2</button>
      <button type="button" onclick="funclick('3')">3</button>
      <button type="button" onclick="funclick('4')">4</button>
      <button type="button" onclick="funclick('5')">5</button>
      <button type="button" onclick="funclick('6')">6</button>
      <button type="button" onclick="funclick('7')">7</button>
      <button type="button" onclick="funclick('8')">8</button>
      <button type="button" onclick="funclick('9')">9</button>
      <button type="button" onclick="funclick('0')">0</button>
      <button type="button" onclick="funclick('+')">+</button>
      <button type="button" onclick="funclick('-')">-</button>
      <button type="button" onclick="funclick('*')">*</button>
      <button type="button" onclick="funclick('/')">/</button>
      <!--<button type="button" onclick="add();sub(); multi();">=</button>-->
      <button id="eql" type="button" onclick="calculation();">=</button>
      <button type="button" onclick="clearall()">clear all</button>
    </form>
  </div>
  <script>
    function funclick(value) {
      document.calculator.result.value += value;
    }

    function clearall() {
      document.calculator.result.value = "";
    }
    function calculation() {
      //       let a="507";
      // let values = a.split('0');
      // if (values.length === 2) {
      //     let firstValue = parseInt(values[0]);
      //     let secondValue = parseInt(values[1]);
      //     let result = firstValue + secondValue;
      //     console.log(result);
      // }
      let inputv = document.calculator.result.value
      var values = inputv.split('+');
      if (values.length === 2) {
        let firstValue = parseInt(values[0]);
        let secondValue = parseInt(values[1]);
        let result = firstValue + secondValue;
        console.log(result);
        document.calculator.result.value = result
      }
      else {
        values = inputv.split('-')
        if (values.length === 2) {
          let firstValue = parseInt(values[0])
          let secondValue = parseInt(values[1])
          let result = firstValue - secondValue;
          document.calculator.result.value = result
        }
        //     else {
        //   var values = inputv.split('*')
        //     if (values.length === 2){
        //   let firstValue=parseInt(values[0])
        //   let secondValue= parseInt(values[1])
        //   let result =firstValue*secondValue;
        //   document.calculator.result.value=result}
        // }   
        else {
          values = inputv.split("*")
          if (values.length === 2) {
            let firstValue = parseInt(values[0])
            let secondValue = parseInt(values[1])
            let result = firstValue * secondValue;
            document.calculator.result.value = result
          }
          else {
            values = inputv.split("/")
            if (values.length === 2) {
              let firstValue = parseInt(values[0])
              let secondValue = parseInt(values[1])
              let result = firstValue / secondValue;
              document.calculator.result.value = result
            }
          }
        }
      }
    }

  </script>
</body>

</html>