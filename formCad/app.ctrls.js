"use strict"   

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
function createDataList(id, values){ 
   let list = document.createElement("datalist")
   list.id = id
   for (let i in values) {
      list.appendChild(document.createElement("option")).value = values[i];;
   }  
   return list 
} 

function createModal(){   
   let modal = document.createElement("div")
   modal.classList = "modal fade"
   modal.id="exampleModal" 
   modal.setAttribute("tabindex", "-1" )
   modal.setAttribute("aria-labelledby", "exampleModalLabel")
   modal.ariaHidden="true"
   let div = modal.appendChild(document.createElement("div"))
   div.classList="modal-dialog"
   let content = div.appendChild(document.createElement("div"))
   content.classList="modal-content"
   let header = content.appendChild(document.createElement("div"))
   header.classList="modal-header"
   let h =header.appendChild(document.createElement("h5"))
   h.classList= "modal-title"
   h.id="exampleModalLabel"
   h.innerHTML ="Modal título"
   
   h=header.appendChild(document.createElement("button"))
   h.type="button"
   h.classList="btn-close";
   h.setAttribute('data-bs-dismiss', "modal")
   h.setAttribute('aria-label', "Close")
   
   h = content.appendChild(document.createElement("div"))
   h.classList = "modal-body"
   h.innerHTML = "teste ... teste"
   document.body.appendChild(modal)
   h = content.appendChild(document.createElement("div"))
   h.classList = "modal-footer"
   let b = h.appendChild(document.createElement("button"))
   b.type="button"
   b.classList="btn btn-secondary"
   b.setAttribute('data-bs-dismiss', 'modal')
   b.innerHTML = "Close"
   b = h.appendChild(document.createElement("button"))
   b.type="button"
   b.classList="btn btn-primary"
   //b.setAttribute('data-bs-dismiss', 'modal')
   b.innerHTML = "Salvar alterações"
   //alert(modal.outerHTML)
   b = document.body.appendChild(document.createElement("button"))
   b.type="button"
   b.classList="btn btn-primary"
   //b.setAttribute("data-bs-toggle", "modal")
   //b.setAttribute("data-bs-target", "#exampleModal")
   b.innerHTML = "modal dad"
   b.onclick = ()=>{
      var myModal = new bootstrap.Modal(modal, {
               keyboard: false
               })
      myModal.toggle()
      //alert("teste")
      //modal.toggle()
   }
}