(function clock() {
    const deg = 6;
    const hr = document.querySelector("#hr")
    const mn = document.querySelector("#mn")
    const sc = document.querySelector("#sc")
    const check = document.getElementById("checking");
    const clockScreen = document.querySelector(".clock")
    const linkbtn = Array.from(document.querySelectorAll("#todoapp"))
    const dates = document.querySelector(".dates")
    const digitaltime = document.querySelector(".digital")

    console.log(check.checked)
    document.addEventListener("click", function (e) {
        let elem = e.target
        let elemid = elem.getAttribute("class")
        if (check.checked) {
            linkbtn.forEach((link=>{
                link.classList.toggle("lightmode")
                console.log(link)
            }))
            clockScreen.classList.toggle("lightmode")
            dates.classList.toggle("lightmode")
            digitaltime.classList.toggle("lightmode")
        }

        console.log(elemid)
    })
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
        hours.innerText = day.getHours() + " :"
        mins.innerText = day.getMinutes() + " :"
        secs.innerText = day.getSeconds()
        dates.innerText = day.toDateString()
    })
})()