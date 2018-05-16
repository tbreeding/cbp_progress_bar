let ProgressBar = function (width, height, start, stop, step) {
    this.width = width;
    this.height = height;
    this.btnHeight = height;
    this.btnWidth = height;
    this.btnBgColor = 'dodgerblue';
    this.bgColor = 'blanchedalmond';
    this.statusColor = 'red';
    this.currentStatus = start;
    this.totalStatus = stop;
    this.step = step;

    this.totalWidth = width + (height * 2) * 1.15;

    this.createBar = () => {
        
        let newBar =  document.createElement("div");
        newBar.classList.add("progressBar");

        let statusBar = document.createElement("div");
        statusBar.classList.add("statusBar");

        let statusProgress = document.createElement("div");
        statusProgress.classList.add("statusProgress");

        let statusNum = document.createElement("p");
        statusNum.innerText = this.currentStatus + '/' + this.totalStatus;
        statusNum.style.position = 'absolute';
        statusNum.style.right = "10px";
        statusNum.style.top = this.height / 2 - (this.height * .4) + "px";
        statusNum.style.fontSize = this.height * .8 + "px";
        statusNum.style.margin = "0";
        statusNum.style.fontFamily = "sans-serif"
        statusNum.style.color = "#076"

        statusBar.appendChild(statusProgress);
        statusBar.appendChild(statusNum);

        let plusBtn = document.createElement("div");
        plusBtn.classList.add("btn");
        plusBtn.classList.add("plusBtn");
        plusBtn.innerText = '+';
        plusBtn.addEventListener("click", () => {
            this.currentStatus = this.currentStatus + this.step > this.totalStatus ? this.currentStatus : this.currentStatus + this.step;
            statusNum.innerText = this.currentStatus + '/' + this.totalStatus;
            statusProgress.style.width = (this.currentStatus * this.width) / this.totalStatus + 'px';
        });

        let minusBtn = document.createElement("div");
        minusBtn.classList.add("plusBtn");
        minusBtn.classList.add("btn");
        minusBtn.innerText = "-";
        minusBtn.addEventListener("click", () => {
            this.currentStatus = this.currentStatus - this.step < 0 ? this.currentStatus : this.currentStatus - this.step;
            statusNum.innerText = this.currentStatus + '/' + this.totalStatus;
            statusProgress.style.width = (this.currentStatus * this.width) / this.totalStatus + 'px';
        });

        newBar.appendChild(plusBtn);
        newBar.appendChild(statusBar);
        newBar.appendChild(minusBtn);

       
        newBar.style.width = this.totalWidth + 'px';
        newBar.style.display = "flex";
        newBar.style.justifyContent = 'space-between';
        newBar.style.userSelect = "none";
        newBar.style.margin = "10px"
        
        plusBtn.style.height = this.btnHeight + 'px';
        plusBtn.style.width = this.btnWidth + 'px';
        plusBtn.style.backgroundColor = this.btnBgColor;
        plusBtn.style.cursor = "pointer";
        plusBtn.style.display = "flex";
        plusBtn.style.justifyContent = "center";
        plusBtn.style.alignItems = 'center';
        plusBtn.style.color = "white";
        plusBtn.style.fontSize = "2rem";
        plusBtn.style.borderRadius = "10px";

        minusBtn.style.height = this.btnHeight + 'px';
        minusBtn.style.width = this.btnWidth + 'px';
        minusBtn.style.backgroundColor = this.btnBgColor;
        minusBtn.style.cursor = "pointer";
        minusBtn.style.display = "flex";
        minusBtn.style.justifyContent = "center";
        minusBtn.style.alignItems = 'center';
        minusBtn.style.color = "white";
        minusBtn.style.fontSize = "2rem";
        minusBtn.style.borderRadius = "10px";


        statusBar.style.height = this.height + 'px';
        statusBar.style.width = this.width + 'px';
        statusBar.style.backgroundColor = this.bgColor;
        statusBar.style.position = 'relative';
        statusBar.style.display = 'flex';
        statusBar.style.borderRadius = "10px";
        statusBar.style.overflow = "hidden";

        statusProgress.style.width = this.width / this.currentStatus + "px";
        statusProgress.style.backgroundColor = this.statusColor;
        document.querySelector("body").prepend(newBar);
        
    }


}

