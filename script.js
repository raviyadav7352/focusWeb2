(function clock() {
    let linkData = [
        {link:"https://raviyadav7352.github.io/todolist/",webName:"todolist"},
        {link:"https://raviyadav7352.github.io/wedding-app/",webName:"wedding decor"},
        {link:"https://raviyadav7352.github.io/focus-webpage/",webName:"focus-web"},
        {link:"https://raviyadav7352.github.io/losAngeles-trip/",webName:"los-anglese"},
        {link:"https://raviyadav7352.github.io/SweetStore-taste2buy/",webName:"sweet-store"},
        {link:"https://raviyadav7352.github.io/testPaperUi/",webName:"test-paper"},
        {link:"https://raviyadav7352.github.io/dreamSeven/",webName:"dream-11"},
        {link:"https://raviyadav7352.github.io/card-ui-design/",webName:"music-pay"},

    ]
    const deg = 6;
    const hr = document.querySelector("#hr")
    const mn = document.querySelector("#mn")
    const sc = document.querySelector("#sc")
    const check = document.getElementById("checking");
    const clockBody = document.getElementById("clockBody")

    document.addEventListener("click", function (e) {
        let elem = e.target
        let purpose = elem.getAttribute("purpose")
        if(purpose == "darkmode"){
        if (check.checked) {
            clockBody.classList.add("dark")
        }else{clockBody.classList.remove("dark")}
    }
    })
    let linkShow = () =>{
        let html = '';
        linkData.forEach((item)=>{
            html += `
            <li><a id="todoapp" class="linkpage" target="self"
            href=${item.link}>${item.webName}</a></li>
            `
        })
        document.getElementById("linklist").innerHTML=html;
    }
    linkShow();
    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;
        hr.style.transform = `rotate(${(hh) + (mm / 12)}deg`;
        mn.style.transform = `rotate(${mm}deg`;
        sc.style.transform = `rotate(${ss}deg`;
        let hours = document.getElementById("hours");
        let mins = document.getElementById("mins");
        let secs = document.getElementById("secs");

        let dates = document.querySelector(".dates");
        let realHour = day.getHours();
        let timeShift = realHour > 12 ? "PM" : "AM"
        hours.innerText = (realHour > 12 ? realHour - 12 : realHour) + " :";
        mins.innerText = day.getMinutes() + " : ";
        secs.innerText = day.getSeconds() +" " + timeShift;
        dates.innerText = day.toDateString();
    })
})()