
   "use strict"  
   const modalFrm = {
    modal: undefined,
    title: undefined,
    inicialize: ()=>{
       this.modal = document.createElement("div")
       this.modal.classList = "modal fade"
       this.modal.id="exampleModal" 
       this.modal.setAttribute("tabindex", "-1" )
       this.modal.setAttribute("aria-labelledby", "exampleModalLabel")
       this.modal.ariaHidden="true"

       let div = modal.appendChild(document.createElement("div"))
       div.classList="modal-dialog"
       let content = div.appendChild(document.createElement("div"))
       content.classList="modal-content"
       let header = content.appendChild(document.createElement("div"))
       header.classList="modal-header"
       this.title = header.appendChild(document.createElement("h5"))
       this.title.classList= "modal-title"
       this.title.id="exampleModalLabel" 
       
             
       let h=header.appendChild(document.createElement("button"))
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
    },
    show: ()=>{

    }
 }
 modalFrm.inicialize()
 //let modal = modalFrm.modal

 //h.innerHTML ="Modal título"
 //modal.title = h
 
 //alert(modal.outerHTML)
 let b = document.body.appendChild(document.createElement("button"))
 b.type="button"
 b.classList="btn btn-primary"
 //b.setAttribute("data-bs-toggle", "modal")
 //b.setAttribute("data-bs-target", "#exampleModal")
 b.innerHTML = "modal dad"
 b.onclick = ()=>{
    //modal.title.innerHTML = "teste 2 kkk"
    var myModal = new bootstrap.Modal(modalFrm.modal, {
             keyboard: false
             })
    myModal.toggle()
    //alert("teste")
    //modal.toggle()      
 }