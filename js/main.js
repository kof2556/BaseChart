let state={};
function doFetch() {
      fetch("https://api.exchangeratesapi.io/latest")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                
                for (let [key, value] of Object.entries(data.rates)) {
                    console.log('key:', key, 'and the value:', value);
                  
                    let chart = document.querySelector("#chart-location");
                    let height = 100 / value;
                    let bar = document.createElement("div");
                    bar.classList.add("BarChart-bar");
                    bar.style.height = height + "%";
                    bar.textContent = key;
                    chart.appendChild(bar);
                    
                    
                  
                  
                }
                state.data = data;
            });
    }
doFetch();



