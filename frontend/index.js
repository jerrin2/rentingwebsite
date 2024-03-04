let data = [];
document.addEventListener('DOMContentLoaded', dataFetcher);

async function dataFetcher(url){
    // const res = await fetch("http://localhost:8000/api/properties");
    // const propertyData = res.json();
    // data  = propertyData;
    // return propertyData;
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error fetching data:', error));
}

function displayData(data) {
    console.log(data)
    const dataList = document.getElementById('data-container');

    // Clear existing list items
    // dataList.innerHTML = '';

    // Loop through the data and create list items
    // data.forEach(item)
    data.forEach(item => {
      const listItem = document.createElement('li');
      // listItem.textContent = `${item.Property_id} - ${item.Property_name} - ${item.Property_type}`;
      textval = ``
      const unorderList = document.createElement('ul')
      dataList.append(listItem)
      for(key in item){
        // textval = textval+` - ` +`${item[`${key}`]}`
        const ulItem = document.createElement('li')
        ulItem.textContent = `${key} - ${item[`${key}`]}`
        unorderList.appendChild(ulItem)
      }
      // listItem.textContent = unorderList;
      dataList.appendChild(unorderList);
    });
}

window.addEventListener("load", async (event) => {
  console.log("page is fully loaded");
  data = await dataFetcher("http://localhost:8000/api/properties")
  const data1 = await dataFetcher("http://localhost:8000/api/amenities")
  // const data2 = await dataFetcher("http://localhost:8000/api/")
  displayData(data)
  displayData(data1)
// displayData(data2)
});

// document.onloadstart(async ()=>{
  
// })

// const container = document.getElementById(".data-container")
// async function addData(propData){
//     data = await dataFetcher()
//     propData.forEach(element => {
//         const node = document.createElement("li")
//         const textNode = document.createTextNode(element["Property_name"]);
//         node.appendChild(textNode);
//         container.appendChild(node)
//     });
//     rfunceturn newnode;
// }

// data = Promise.all(dataFetcher())

// const textNode = document.createTextNode()
// container.appendChild(node1)