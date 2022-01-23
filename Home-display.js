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
let carosal = document.querySelector('#carosal-inner')
let carosalIndicator = document.querySelector('#carosal-indicator');
let data = NewsData();
if (carosal) {
    document.addEventListener('DOMContentLoaded', addCorosal);
    window.addEventListener('resize', addCorosal)
}
function addCorosal(event) {
    if (data) {
        let n;
        if(window.innerWidth>1598)  n=10;
        else if(window.innerWidth>1330) n= 8;
        else if (window.innerWidth > 1080) n = 6;
        else if (window.innerWidth > 780) n = 4;
        else n = 1
        if(n===1){
            for(let i=0;i<data.length;i++){
                let bttn = document.createElement('button');
                bttn.dataset.bsTarget = "#carouselExampleIndicators";
                bttn.dataset.bsSlideTo= i ;
                let t3= document.createElement('div');
                t3.classList.add('carousel-item');
                let t2=document.createElement('div');
                t2.classList.add('carosal')
                t3.append(t2);
                if(i===0){
                    carosal.innerHTML='';
                    carosalIndicator.innerHTML='';
                    bttn.classList.add('active');
                    t3.classList.add('active');
                }
                let t1=document.createElement('div');
                t1.classList.add('palmplate')
                t1.innerHTML= data[i]
                t2.append(t1);
                carosalIndicator.append(bttn);
                carosal.append(t3);
            }
        }
        else{
            for (let i = 0; i < data.length; i++) {
                let bttn = document.createElement('button');
                bttn.dataset.bsTarget = "#carouselExampleIndicators";
                bttn.dataset.bsSlideTo=Math.floor(i/n);
                let t3= document.createElement('div');
                t3.classList.add('carousel-item');
                let t2=document.createElement('div');
                t2.classList.add('carosal')
                t3.append(t2);
                if(i===0){
                    carosal.innerHTML='';
                    carosalIndicator.innerHTML='';
                    bttn.classList.add('active');
                    t3.classList.add('active');
                }
                for(let j=0;j<n;j++){
                    let t1=document.createElement('div');
                    t1.classList.add('palmplate')
                    t1.innerHTML= data[i]
                    t2.append(t1);
                    i++;
                }
                carosalIndicator.append(bttn);
                carosal.append(t3);
            }
        }
        
    }
}
function NewsData() {
    //Hi guys please implement a fetch here that will give array of string as return value that will be the content of the carosal.
    return [
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
        'The data property sets or returns the value of the data attribute of an <object> element. The data attribute specifies the URL of the resource to be used by ..',
    ]
}