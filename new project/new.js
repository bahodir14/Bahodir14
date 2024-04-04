function tubSondanTopibBerish(raqam) {
    var tubSonlar = [];
    for (var i = 2; i <= raqam; i++) {
        if (tubSonmi(i)) {
            tubSonlar.push(i);
        }
    }
    return tubSonlar;
}

function tubSonmi(son) {
    for (var i = 2; i < son; i++) {
        if (son % i === 0) {
            return false;
        }
    }
    return son !== 1;
}

var kiritilganRaqam = 50; // O'zingiz istagan raqamni yozing
var topilganTubSonlar = tubSondanTopibBerish(kiritilganRaqam);
console.log(topilganTubSonlar);