"use strict"   
//const dados = {};   
const dados = {"Name":"República Federativa do Brasil","Address":"RUA DE LUANDA",
"CodPost":"2830-180","Local":"QUINTA DA LOMBA","DtNac":"1822-09-07",
"Sexo":"M","Telemovel":"(+351) 999886677",
"bIdent":"88B777C66","Contrib":"111111111","Func":"Teste",
"Congrega":"ALHOS VEDROS","Email":"brasil@brasil.com","Bat":"S",
"AnoBat":"2022","Profiss":"Nação","EstCivil":"SOLTEIRO",
"NomeConj":"","NomePai":"Deus",
"NomeMae":"Democracia","textarea":""};
         
function createCtrlFoto(container){
   const foto = document.createElement("input");
   foto.name = "foto"
   foto.type = "hidden"
   const img = document.createElement("img");
   const imgDlg = createInput()
   imgDlg.type = "file"
   imgDlg.accept = "image/png, image/gif, image/jpeg"
   imgDlg.onchange = function(event) {
      let files = event.target.files;
      if (files.length != 1) {
         alert('Selecione um arquivo');
         return;
      }
      let file = files[0];
      if (file.size > 3 * 1024 * 1024) {
         alert('Arquivo muito grande');
         return
      }
      img.src = URL.createObjectURL(file)
      var reader = new FileReader();
      reader.onload = function(e) {
         let s = arrayBufferToBase64(reader.result)
         foto.value = s 
      }
      reader.readAsArrayBuffer(file);
   }
   
   //img.src="176574768_144756944543896_4655796294908807056_n.jpg"
   img.classList = "img-thumbnail rounded-circle"
   img.style.Height = "100%!important"
   img.alt = "Alterar imagem"
   //img.style.maxWidth = "8.8rem"

   container.onclick = (event) =>{
      imgDlg.click()
   }
   container.appendChild(img)
   container.style.cursor = "pointer"
   //img.imgDlg = imgDlg
   //return img   
}
function createHeader(frm){
    //<input type="hidden" value="{key}" name=""/>
   let div = document.createElement("div")
   frm.appendChild(div)
   div.classList =  "col-12 p-2"
   let h = div.appendChild(document.createElement("h3"))
   h.innerHTML = "FICHA DE MEMBRO"
   h.style.backgroundColor = "lightblue"
   h.style.textAlign = "center"
   
   h = div.appendChild(document.createElement("h5"))
   h.style.textAlign = "center"
   h.innerHTML = "("+ dados.name +")"
   const panel = document.createElement("div")
   panel.classList = "row gx-3"
   //panel.style.marginLeft = 0
   //panel.style.padding = 0
   panel.style.width =  "calc(100% - 9rem)"
   panel.style.margin = 0
   panel.style.padding = 0

   panel.appendChild(createDivGroup(class12, createInput("Name", "Nome Completo", true)))
   panel.appendChild(createGroup(class9x, "Morada", "Rua", "Morada"))
   panel.appendChild(createGroup(class3x, "Porta", "Num,Lt,Andar","Porta"))            
   frm.appendChild(panel)

   div = document.createElement("div")
   frm.appendChild(div)
   div.style.width =  "9rem"
   div.style.margin = 0
   //div.style.padding = 0

   div = div.appendChild(document.createElement("div"))  
   //div.style.backgroundColor = "red"
   div.style.height = "100%" 
   let label = div.appendChild(document.createElement("label"))
   label.innerHTML = "Foto" 
   label.classList = "form-label"
   div = div.appendChild(document.createElement("div"))
   createCtrlFoto(div) 
   div.classList = "img-thumbnail"
   div.style.height = "calc(100% - var(--bs-gutter-y)*2)"
   //img.onclick           
}        
function CreateButtom(title){
   let div = document.createElement("div");
   div.classList = class12
   let btn = document.createElement("button");
   div.appendChild(btn)
   btn.type = "submit"
   btn.classList = "btn btn-primary"
   btn.innerHTML = title
   return div
}
function createComponents(frm){
   let edit   = frm.appendChild(document.createElement("input"))
   edit.type  = "hidden"
   edit.name  = "key"
   edit.value = "{key}"
   createHeader(frm)
   const eCodPost = createInput("CodPost", "0000-000")
   eCodPost.maxLength = 8
   frm.appendChild(createDivGroup(class3x, eCodPost, "C. Postal"))
   eCodPost.onkeypress = () => {
      let i = eCodPost.value.length
      if (i == 4) {
         eCodPost.value += '-'
      }
      return true;
   }
   frm.appendChild(createGroup(class9x, "Local", "Localidade"))

   //////
   frm.appendChild(createDivGroup(ctrlSmallA, createInputDate("DtNac", true), "Data Nascimento"))

   edit = createSelect("Sexo", ["Masculino", "Feminino"], ["M", "F"])
   frm.appendChild(createDivGroup(ctrlSmallA, edit, "Sexo"))
   
   edit = createInput("Telemovel", "Telemóvel")
   edit.maxLength = 9
   edit.onkeypress = numberOnlyEvent
   frm.appendChild(createDivGroup(ctrlSmallA, edit))

   /*edit = createInput("Telefone", "Telefone")
   edit.maxLength = 9
   edit.onkeypress = numberOnlyEvent
   frm.appendChild(createDivGroup(class4, edit)) */
   //\\\\

   frm.appendChild(createGroup(ctrlSmallA, "bIdent", "B. Identidade"))
   frm.appendChild(createGroup(ctrlSmallA, "Contrib", "Contribuinte"))
   frm.appendChild(createGroup(ctrlSmallA, "Func", "Membro,Secretario,Levita", "Funcão"))
   frm.appendChild(createGroup(ctrlSmallA, "Congrega", "Congregação"))
   frm.appendChild(createGroup(ctrlSmallA, "Nacional", "Nacionalidade"))

   //////

   edit = createSelect("SitReligiosa", ["EM COMUNHÃO", "NOVO CONVERTIDO"])
   frm.appendChild(createDivGroup(class4s, edit, "Situação Religiosa"))
   
   //////
   frm.appendChild(createDivGroup(class4s, createInputDate("Recebido"), "Recebido em"))

   edit = createSelect("Status", ["ATIVO", "INATIVO"])
   frm.appendChild(createDivGroup(class4s, edit, "Status"))

   edit = createInput("Email", "@email.com")
   edit.type =  "email"
   frm.appendChild(createDivGroup(class12, edit, "Email"))
   
   edit = createSelect("Bat", ["SIM", "NÃO"])
   frm.appendChild(createDivGroup(ctrlSmallA, edit, "Batizado"))

   edit = createInput("AnoBat", "(ex:2000)")
   edit.maxLength = 4
   edit.onkeypress = numberOnlyEvent
   frm.appendChild(createDivGroup(ctrlSmallA, edit, "Ano Batismo"))
   frm.appendChild(createGroup(ctrlSmallA, "Profiss", "Profissão"))

   edit = createSelect("EstCivil",["CASADO(A)", "DIVORCIADO(A)", "SOLTEIRO(A)", "VIUVO(A)"])
   frm.appendChild(createDivGroup(ctrlSmallA,edit,"Estado Civil"))

   //frm.appendChild(createGroup(ctrlSmallA, "EstCivil", "Estado Civil"))
   frm.appendChild(createGroup(class12, "NomeConj", "Nome Conjuge"))
   frm.appendChild(createGroup(class12, "NomePai", "Nome Pai"))
   frm.appendChild(createGroup(class12, "NomeMae", "Nome Mãe"))
              
   edit = document.createElement("textarea");
   edit.classList.add("form-control")
   edit.rows = "2"
   edit.placeholder = "Observações"
   edit.name = "textarea"
   edit.id="i" + edit.name
   frm.appendChild(createDivGroup(class12, edit))
   frm.appendChild(CreateButtom("Enviar"))
}
let frm = document.createElement("form")
document.body.appendChild(frm)
frm.classList = "row g-3" 
frm.style.maxWidth = "70rem" 
frm.style.margin = "auto"

createComponents(frm)

function reset(){
         Object.keys(dados).forEach(function(key) {
            if (key != "key"){
               let a = document.getElementsByName(key)
               let value = dados[key]
                  if (a.length>0){
                  a[0].value = value
               }
            }
         })
}
reset()
