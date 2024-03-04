let data = [];
document.addEventListener('DOMContentLoaded', dataFetcher);

async function dataFetcher(url){
    fetch(url)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error fetching data:', error));
}

function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Get the query from the URL
// const query = getQueryParameter('query');

// Example: display the query on the page
// document.getElementById('results').innerText = 'Search query: ' + query;

function displayData(data) {
    console.log(data)
    const ListRow = document.getElementById('row');
    data.forEach(item => {
      const divItem = document.createElement('div');
      divItem.className = "col-lg-6 col-md-6 col-sm-3 centerkarega card prop";
      divItem.id = "electricity-card";
      divItem.innerHTML = `
      <img src=${item.Property_image} alt="house1" style="margin-top:5%;">
      <h4 class="headerofcards">${item.Property_name}</h4>
      <span class="descriptionofcards">Price: $${item.Property_price}</span>
      <span class="descriptionofcards">Type: $${item.Property_type}</span>
      <p class="descriptionofcards">Address: ${item.Property_address}</p>
      `;
      divItem.onclick = ()=>{
        window.location.href = item.property_link;
      }
      ListRow.appendChild(divItem);
    });
}

window.addEventListener("load", async (event) => {
  console.log("page is fully loaded");
  const reqquery = getQueryParameter('location');
  console.log(reqquery)
  if(reqquery!=undefined || reqquery!=null){
    data = await dataFetcher(`http://localhost:8000/api/properties?location=${reqquery}`);
  } else{
    data = await dataFetcher(`http://localhost:8000/api/properties`);
  }
  displayData(data)
});