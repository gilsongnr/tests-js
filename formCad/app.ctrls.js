const class12 = "col-12"
const class9 = "col-12 col-md-9 col-xl-6"
const class6 = "col-12 col-sm-8 col-md-6"
const class4 = "col-12 col-sm-6 col-md-4 col-xl-3"
const class3 = "col-12 col-sm-4 col-md-3 col-xl-2"
const ctrlSmall = "col-12 col-sm-4 col-md-3 col-xl-2"
const ctrlSmallA = "col-md-3 col-sm-6"
const class9x = "col-md-9 col-sm-8"
const class3x = "col-md-3 col-sm-4"
const class4s = "col-lg-4 col-md-4 col-sm-4"
//const class2x = "col-lg-3 col-md-6 col-lg-4 col-sm-6"

function arrayBufferToBase64( buffer ) {
   var binary = '';
   var bytes = new Uint8Array( buffer );
   var len = bytes.byteLength;
   for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
   }
   return window.btoa( binary );
}
function createDivGroup(classList, input, title){
   if (title == undefined){
      title = input.placeholder
   } 
   let div = document.createElement("div");
   div.classList = classList
   let label = document.createElement("label");
   div.appendChild(label)
   label.classList.add("form-label")
   label.setAttribute("for", input.id)
   label.innerHTML = title
   div.appendChild(input)           
   return div
}

function numberOnlyEvent(event){
    return event.charCode >= 48 && event.charCode <= 57
}
function createDivGroup(classList, input, title){
    if (title == undefined){
       title = input.placeholder
    } 
    let div = document.createElement("div");
    div.classList = classList
    let label = document.createElement("label");
    div.appendChild(label)
    label.classList = "form-label"
    label.setAttribute("for", input.id)
    label.innerHTML = title
    div.appendChild(input)           
    return div
}
function createInput(name, placeholder, required){            
   let input = document.createElement("input");
   input.classList.add("form-control")
   input.placeholder = placeholder
   input.name = name
   input.id="i" + name
   input.type = "text"
   if (required!=undefined){
      input.required = required
   }
   return input
} 
function createGroup(classList, nameEdit, placeholder, title){
   return createDivGroup(classList, createInput(nameEdit, placeholder), title);
}
function createInputDate(name, required){            
   let input = createInput(name, undefined, required)
   input.type = "date"
   return input
}
function createSelect(name, options, values){            
   let input = document.createElement("select");
   input.classList.add("form-select")
   input.name = name
   input.id="i" + name
   if (options){
      let option = document.createElement("option");
      option.text = "Escolha...";
      option.selected = true
      //option.disabled = true
      option.hidden = true
      //option.value = "none"
      input.add(option);               
      for (let i in options) {
         option = document.createElement("option");
         option.text = options[i];
         input.add(option);
         if (values && values.lengh < i){
            option.value = values[i]
         }
      }
   }            
   return input
} 