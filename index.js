
        // Declaring Variables
        let tb = document.getElementById('tableb')
        let itemarray = []

        //Functions

        //For setting and getting data in locaStorage and Manipulating table
        function update() {
            //Getting Values
            let titlee = document.getElementById('title').value
            let descc = document.getElementById('desc').value
            //Setting Values to localStorage
            if (titlee !== "" && descc !== "") {

                let titlee = document.getElementById('title').value
                let descc = document.getElementById('desc').value

                if (localStorage.getItem('todo') == null) {

                    itemarray = []
                    itemarray.push([titlee, descc])
                    let itemarrayStr = JSON.stringify(itemarray)
                    localStorage.setItem('todo', itemarrayStr)
                } else {
                    itemarray = JSON.parse(localStorage.getItem('todo'))
                    console.log(itemarray)
                    itemarray.push([titlee, descc])
                    let itemarrayStr = JSON.stringify(itemarray)
                    localStorage.setItem('todo', itemarrayStr)

                }

                manipulateTable()

            }
        }


        //Function for manipulating data in Table
        function manipulateTable() {
            itemarrayStr = localStorage.getItem('todo')
            itemarray = JSON.parse(itemarrayStr)
            htmlToInsert = ""


            itemarray.forEach((elements, index) => {

                htmlToInsert += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${elements[0]}</td>
                        <td>${elements[1]}</td>
                        <td><button id="delete" class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                        </tr>
                        `
                // let tb = document.getElementById('tableb')
                tb.innerHTML = htmlToInsert
            });


        }
        
        //Funtion for clearing whole data
        function clearAll() {
            localStorage.clear()
            htmlToInsert = ""
            tb.innerHTML = htmlToInsert
        }

        
        //Function for deleting whole data
        function deleted(indextodelete) {
            if (JSON.parse(localStorage.getItem('todo')) !== []) {
                
                let itemarrayStr = localStorage.getItem('todo')
                itemarray = JSON.parse(itemarrayStr)
                itemarray.splice(indextodelete, 1)
                localStorage.setItem('todo', JSON.stringify(itemarray))
                manipulateTable()
            }
            
            let againitemarray = JSON.parse(localStorage.getItem('todo'))
            if (againitemarray.length == 0) {
                clearAll()
            }
        }
        
        //Manipulating table on load
        document.addEventListener('onload', manipulateTable())
        