let dragdrop = document.getElementById('dragdrop');
let createFolderBtn = document.getElementById('createFolderBtn');
const filelist = document.getElementById('fileList');
let chooseFileBtn = document.getElementById('chooseFileBtn');
const fileInput = document.getElementById('file-input');
let folderArray = [];
let newFolderLiArray = [];

createFolderBtn.addEventListener('click', function() {
    let nameFolder = prompt('enter the folder name');
    if (nameFolder) {
        let newDiv1 = document.createElement('div');
        newDiv1.className = 'newDiv1';
        let newFolderLi = document.createElement('li');
        newFolderLi.textContent = nameFolder;
        newFolderLi.classList.add('folder');
        filelist.appendChild(newDiv1);
        newDiv1.appendChild(newFolderLi);
        
        folderArray.push(nameFolder);
        newFolderLiArray.push(newFolderLi);

        let deleteFolderBtn = document.createElement('button');
        deleteFolderBtn.textContent = 'Delete folder';
        deleteFolderBtn.className = 'delFolBtn';
        newDiv1.appendChild(deleteFolderBtn);

        deleteFolderBtn.onclick = function() {
            newDiv1.remove();
        }
    }
});

dragdrop.addEventListener('dragover', (e) => {
    e.preventDefault();
    dragdrop.classList.add('dragover');
});
  
dragdrop.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dragdrop.classList.remove('dragover');
});
  
dragdrop.addEventListener('drop', (e) => {
    e.preventDefault();
    dragdrop.classList.remove('dragover');
    const files = e.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            let newDiv = document.createElement('div');
            newDiv.className = 'newDiv';
            const li = document.createElement('li');
            li.textContent = file.name;
            newDiv.appendChild(li);
            filelist.appendChild(newDiv);
    
            let pushInFolderBtn = document.createElement('button');
            pushInFolderBtn.textContent = 'Add In folder';
            pushInFolderBtn.className = 'pushBtn';
            newDiv.appendChild(pushInFolderBtn);

            let deleteElementBtn = document.createElement('button');
            deleteElementBtn.textContent = 'Delete element';
            deleteElementBtn.className = 'delElBtn';
            newDiv.appendChild(deleteElementBtn);

            deleteElementBtn.onclick = function() {
                newDiv.remove();
            }
            
    
            pushInFolderBtn.onclick = function() {
            let whatNameFolder = prompt('which folder do you want to add the file to');
            let checkFolderName = folderArray.includes(whatNameFolder);
                if (checkFolderName == true) {
                    let objectArray = [];
                    objectArray.push(file);
                    console.log(objectArray);
                    newDiv.remove();  
                    
                    for (let i = 0; i < newFolderLiArray.length; i++) { 
                        if (newFolderLiArray[i].textContent == whatNameFolder) {
                            newFolderLiArray[i].onclick = function() {
                                document.body.innerHTML = '';
                    
                                for (let i = 0; i < objectArray.length; ++i) {
                                    let listFilesInFolder = document.createElement('ul');
                                    let li = document.createElement('li');
                                    li.innerText = objectArray[i].name;
                                    listFilesInFolder.appendChild(li);
                                    document.body.appendChild(listFilesInFolder);
                                }
                            }
                        }
                    }
                }
                else {
                    alert('there is no such folder');
                }
            }
          
        }
});
chooseFileBtn.addEventListener('click', () => {
    fileInput.click();
  });
  
  fileInput.addEventListener('change', () => {
    for (const file of fileInput.files) {
        let newDiv = document.createElement('div');
        newDiv.className = 'newDiv';
        const li = document.createElement('li');
        li.textContent = file.name;
        newDiv.appendChild(li);
        filelist.appendChild(newDiv);

        let pushInFolderBtn = document.createElement('button');
        pushInFolderBtn.textContent = 'Add In folder';
        pushInFolderBtn.className = 'pushBtn';
        newDiv.appendChild(pushInFolderBtn);

        let deleteElementBtn = document.createElement('button');
        deleteElementBtn.textContent = 'Delete element';
        deleteElementBtn.className = 'delElBtn';
        newDiv.appendChild(deleteElementBtn);

        deleteElementBtn.onclick = function() {
            newDiv.remove();
        }
        

        pushInFolderBtn.onclick = function() {
        let whatNameFolder = prompt('which folder do you want to add the file to');
        let checkFolderName = folderArray.includes(whatNameFolder);
            if (checkFolderName == true) {
                let objectArray = [];
                objectArray.push(file);
                console.log(objectArray);
                newDiv.remove();  
                
                for (let i = 0; i < newFolderLiArray.length; i++) { 
                    if (newFolderLiArray[i].textContent == whatNameFolder) {
                        newFolderLiArray[i].onclick = function() {
                            document.body.innerHTML = '';
                
                            for (let i = 0; i < objectArray.length; ++i) {
                                let listFilesInFolder = document.createElement('ul');
                                let li = document.createElement('li');
                                li.innerText = objectArray[i].name;
                                listFilesInFolder.appendChild(li);
                                document.body.appendChild(listFilesInFolder);
                            }
                        }
                    }
                }
            }
            else {
                alert('there is no such folder');
            }
        }
    }
  });