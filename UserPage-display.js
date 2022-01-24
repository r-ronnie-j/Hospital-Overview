document.querySelector('#link-to-hospital').addEventListener('click', (event) => {
    let hospital = document.querySelector('#link-of-hospital');
    if (hospital.classList.contains('display-none')) {
        hospital.classList.add('link-hospital');
        hospital.classList.remove('display-none');
    } else {
        hospital.classList.add('display-none')
        hospital.classList.remove('link-hospital');
    }
})
function Medicinedata(checkUpId, patientId) {
    //This function allows us to obtain a series of object containing array of medicine and the details how the medicine will be consumed
    //Please implement the fetch request here and 
    return [
        {
            medicine: "ibuprofen (30 mg)",
            time: "before breakfast, after dinner 1 pill",
            days: 7,
            daysLeft: 4
        },
        {
            medicine: "ibuprofen (30 mg)",
            time: "before breakfast, after dinner 1 pill",
            days: 7,
            daysLeft: 4
        },
        {
            medicine: "ibuprofen (30 mg)",
            time: "before breakfast, after dinner 1 pill",
            days: 7,
            daysLeft: 4
        }
    ]
}
function NoOfCheckup() {
    //This function allows us to obtain a  array of checkUpId
    return 3;
}
let N = NoOfCheckup();
let report3 = document.querySelectorAll('.report-3-medicine');
let medicine = Medicinedata();
for (let i = 0; i < N; i++) {
    console.log('hi');
    let Days = `<div class="days-container">`;
    for (let j = 0; j < medicine[i].days - medicine[i].daysLeft; j++) {
        Days = Days + `<div><div class="days days-selected"></div></div>`
    }
    for (let j = 0; j < medicine[i].daysLeft; j++) {
        Days = Days + `<div><div class="days days-unselected"></div></div>`
    }
    Days = Days + `</div>`;
    if (medicine[i]) {
        report3[i].parentElement.classList.remove('none');
        report3[i].parentElement.classList.add('report-3');
        let div = document.createElement('div');
        div.classList.add('report-3-medicine');
        div.innerHTML = ` <div>${medicine[i].medicine}</div>
        <div class="medicine-manage">
            <div>${medicine[i].time}</div>
            ${Days}
        </div>`
        report3[i].parentElement.append(div);
    }
}