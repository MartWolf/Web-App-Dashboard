
const linechart = document.getElementById("mychart").getContext("2d");
const barchart = document.getElementById("daily-traffic").getContext("2d");
const donutchart = document.getElementById("mobileuser").getContext("2d");

const user = document.getElementById("search");
const message = document.getElementById("message");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });

const labels = [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
];



 var line_data = {
    labels,
    datasets: [
        {
            data:[750,1250,1000,2000,1500,1800,1250,1800,2200,1500,2500],
            label:"Hourly",
            backgroundColor: "rgba(116, 119, 191,0.4)",
            fill: true,
            tension: 0.4,
        },
        {
            data:[750,1250,1050,2050,1550,1850,1250,1850,2250,1550,2550],
            label:"Daily",
            backgroundColor: "rgba(116, 119, 191,0.4)",
            fill: true,
            tension: 0.4,
        },
        {
            data:[850,1350,1100,2100,1600,1900,1350,1900,2300,1600,2600],
            label:"Weekly",
            backgroundColor: "rgba(116, 119, 191,0.4)",
            fill: true,
            tension: 0.4,
        },
        {
            data:[950,1350,1200,2200,1700,2000,1450,1900,2400,1700,2700],
            label:"Monthly",
            backgroundColor: "rgba(116, 119, 191,0.4)",
            fill: true,
            tension: 0.4,
        }
        
    ],
};

var config_line = {
    type: "line",
    data: line_data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                backgroundColor: "rgb(6, 233, 6)",
                align: "end",
                labels:{
                    boxHeigth: 660,
                    boxWidth: 0,
                    color: "black", 
                    textAlign: "",
                    padding: 15, 
                }
                
            },
            title: {
                display: true,
                text: "Traffic",
                align: "start",
                font: {
                    size: 16,
                } 
            }
        }    
    },
};


const bardata = {
    labels:[
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    datasets: [
        {
            data:[75,110,175,115,220,200,100],
            label:"Hourly",
            backgroundColor: "rgb(116, 119, 191)",
        },
    ],
};

var config_bar = {
    type: "bar",
    data: bardata,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Daily Traffic",
                align: "start",
                padding: 25, 
                font: {
                    size: 16,
                } 
            }
        }
      },
    };


const donut_data = {
    labels: [
        "Desktop", 
        "Tablet", 
        "Phones",
    ],
    position:"right",
    datasets: [{
            data:[65, 15, 20],
            backgroundColor: [
                "rgb(116, 119, 191)",
                "rgb(129, 201, 143)",
                "rgb(81, 182, 200)"
            ],
            borderWidth: 0
        },
    ],
};

var config_donut = {
    type: "doughnut",
    data: donut_data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              position: "right",
                labels: {
                    boxWidth: 20,
                },
            },
            title: {
                display: true,
                text: "Mobile User",
                align: "start",
                padding: 25, 
                font: {
                    size: 16,
                } 
            }
        },
    },
};

const mobileuser = new Chart(donutchart, config_donut);
const traffic = new Chart(barchart, config_bar); 
const mychart = new Chart(linechart, config_line);


