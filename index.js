route.addEventListener('change', function () {
    let route = document.getElementById("route");
    let time = document.getElementById("time");
    let selection = route.options[route.selectedIndex].value;
    let obratnos = document.querySelectorAll('.obratno');
    let tudas = document.querySelectorAll('.tuda');
    let returnTimes = document.querySelectorAll('.ret');
    let timeLabel = document.querySelector('#timeLabel');
    let returnTimeLabel = document.querySelector('#returnTimeLabel');


    if (selection === "из A в B и обратно в А") {
        time.addEventListener('change', function () {
            let selection2 = time.options[time.selectedIndex].value;
            let timeDate = new Date();
            timeDate.setHours(selection2.slice(0, 2));
            timeDate.setMinutes(selection2.slice(3));
            let returnTimeDate = new Date();
            for (returnTime of returnTimes) {
                returnTimeDate.setHours(returnTime.value.slice(0, 2));
                returnTimeDate.setMinutes(returnTime.value.slice(3));
                returnTimeDate.setMinutes(returnTimeDate.getMinutes() - 50);
                if(timeDate > returnTimeDate){
                    returnTime.classList.add("hidden");
                }else{
                    returnTime.classList.remove("hidden");
                }
            }
        })
    }

    if (selection === "из A в B") {
        for (obratno of obratnos) {
            obratno.classList.add("hidden");
        }
        for (tuda of tudas) {
            tuda.classList.remove("hidden");
        }
        timeLabel.classList.remove("hidden");
        returnTimeLabel.classList.add("hidden");
    } else if (selection === "из B в A") {
        for (tuda of tudas) {
            tuda.classList.add("hidden");
        }
        for (obratno of obratnos) {
            obratno.classList.remove("hidden");
        }
        timeLabel.classList.remove("hidden");
        returnTimeLabel.classList.add("hidden");
    } else {
        for (obratno of obratnos) {
            obratno.classList.add("hidden");
        }
        for (tuda of tudas) {
            tuda.classList.remove("hidden");
        }
        timeLabel.classList.remove("hidden");
        returnTimeLabel.classList.remove("hidden");
    }


})


document.querySelector('#button').onclick = function () {
    let route = document.querySelector('#route').value;
    let count = document.querySelector('#count').value;
    let textarea = document.querySelector('#text');
    let end;
    let price = 0;
    let alltime;
    if ((route === "из A в B") || (route === "из B в A")) {
        price = 700 * count;
    } else {
        price = 1200 * count;
    }


    end = "";
    if ((count.slice(-1) < 2) && (count.slice(-1) > 0)) {
        if ((count < 11) || (count > 20)) {
            end = "";
        }
    } else if ((count.slice(-1) < 5) && (count.slice(-1) > 1)) {
        if ((count < 11) || (count > 20)) {
            end = "а";
        }
    } else if ((count.slice(-1) > 4) && (count.slice(-1) < 11)) {
        if ((count < 11) || (count > 20)) {
            end = "ов";
        }
    } else {
        end = "ов";
    }

    if (route === "из A в B и обратно в А") {
        alltime = "100";
    }else{
        alltime = "50";
    }

    let lastTime = document.getElementById("returnTime");
    let lastTimeResult = lastTime.options[lastTime.selectedIndex].value;
    let lastDate = new Date();
    lastDate.setHours(lastTimeResult.slice(0, 2));
    lastDate.setMinutes(lastTimeResult.slice(3));
    lastDate.setMinutes(lastDate.getMinutes()+50);
    lastDateText = (lastDate.getHours()+ ":" + lastDate.getMinutes());

    textarea.textContent = "";
    text1 = document.createTextNode("Вы выбрали " + count + " билет" + end + " по маршруту " + route + " стоимостью " + price + " рублей ");
    text2 = document.createTextNode("Это путешествие займет у вас " + alltime + " минут. ");
    text3 = document.createTextNode("Теплоход отправляется в " + time.value + " ,а прибывает в " + lastDateText);
    textarea.appendChild(text1);
    textarea.appendChild(text2);
    textarea.appendChild(text3);
}


