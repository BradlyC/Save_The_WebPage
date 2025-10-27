let arrayStore = []
//let oldArray = []
let saveBtn = document.getElementById("submitBtn")
let userList = document.getElementById("ul-list")
let userInput = document.getElementById("userInput")
let outPutList = document.getElementById("ul-list")
let deletBtn = document.getElementById("deleteAllBtn")
let saveTab = document.getElementById("saveTab-Btn")


const fromStorage = JSON.parse(localStorage.getItem("arrayStore"))


//so now lets ge to keep our leads within the, extension aslong as is not removed.
if(fromStorage){
    arrayStore = fromStorage
       DataManipulation(arrayStore)
}



saveTab.addEventListener("click", function(){
       
chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    
     arrayStore.push(tabs[0].url)
    localStorage.setItem("arrayStore", JSON.stringify(arrayStore))
    DataManipulation(arrayStore)

    })
})



function DataManipulation(leads){
 let listInformation = ""
for(let i = 0 ; i < leads.length ; i++ ){
    listInformation += `<li>
     <a target="_blank" href=${leads[i]}>${leads[i]}
        </a>
    </li>`
}

outPutList.innerHTML = listInformation
}

deletBtn.addEventListener("dblclick", function(){
     localStorage.clear()
       arrayStore = []
          DataManipulation(arrayStore)
         
})

saveBtn.addEventListener("click", function(){

    
    arrayStore.push(userInput.value)
     userInput.value = ""
            
       localStorage.setItem("arrayStore", JSON.stringify(arrayStore))

    DataManipulation(arrayStore)
          
    let inputing = localStorage.getItem("arrayStore")
         console.log(inputing)
})

