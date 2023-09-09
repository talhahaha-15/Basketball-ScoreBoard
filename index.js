let scoreH = document.getElementById("score-h")
let scoreG =  document.getElementById("score-g")
countH = 0
countG = 0
function incScoreH1(){
    countH += 1
    scoreH.textContent = countH
}
function incScoreH2(){
    countH += 2
    scoreH.textContent = countH
}
function incScoreH3(){
    countH += 3
    scoreH.textContent = countH
}
function incScoreG1(){
    countG += 1
    scoreG.textContent = countG
}
function incScoreG2(){
    countG += 2
    scoreG.textContent = countG
}
function incScoreG3(){
    countG += 3
    scoreG.textContent = countG
}
function resetBtnH (){
    countH = 0
    scoreH.textContent = countH
}
function resetBtnG(){
    countG = 0
    scoreG.textContent = countG
}