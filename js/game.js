var inventory = [];
var rugzak = document.getElementById("rugzak");
var backpack = document.getElementById("backpack");

rugzak.onclick = function () {
    if (backpack.style.display === "block") {
        backpack.style.display = "none";
    } else {
        backpack.style.display = "block";
    }
};

function level1() {
    console.log("level1");
    document.getElementById("question").innerHTML = "Look for the lost weapon.";
    document.body.style.background = "url('./img/bg2.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.getElementById('sword').style.display = "none";
    document.getElementById('button1').innerHTML = "Visit the mountain.";
    document.getElementById('button2').style.display= "block";
    document.getElementById('button2').style.visibility= "visible";
    document.getElementById('button2').innerHTML = "Show the weapon weapon.";
    document.getElementById('button1').onclick = function () { 
        mountain();
    };
    document.getElementById('button2').onclick = function() {
        if (inventory.includes("Sword")) {
            heidel();
        } else {
            alert("Missing item");
        }
    }
}

function mountain() {
    var sword = document.getElementById("sword");
    document.getElementById("question").innerHTML = "Do you see the lost weapon?";
    document.body.style.background = "url('./img/bg3.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.getElementById('sword').style.display = "block";
    document.getElementById('button2').style.display= "none";
    document.getElementById('button1').innerHTML = "return to the blacksmith.";
    document.getElementById('button1').onclick = function() {
        level1();
    };

    if(inventory.includes("Sword")) {
        sword.style.display = "none";
    }
    // document.getElementById('sword').onclick = function() {
    //     sword.style.display = "none";
    //     inventory.push("Sword");
    //
    // }

    sword.onclick = function () {
        sword.style.display = "none";
        var div = document.createElement("div");
        div.setAttribute("class", "spullen");
        var img = document.createElement("img");
        img.src="./img/sword.png";
        // var p = document.createElement("p");
        // p.setAttribute("class", "p");
        // p.innerHTML = "Verrekijker";
        div.appendChild(img);
        // div.appendChild(p);
        backpack.appendChild(div);
        inventory.push("Sword");
    };

}

function heidel() {
    document.getElementById("question").innerHTML = "Welcome to Heidel stranger!";
    document.body.style.background = "url('./img/bg5.jpg')";
    document.body.style.image = "url('./img/bg5.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.getElementById('sword').style.display = "none";
    document.getElementById('button2').innerHTML = "Find the city owner.";
    document.getElementById('button1').innerHTML = "Go to the shop.";
    document.getElementById('button1').onclick = function () {
        shop();
    };
    document.getElementById('button2').onclick = function() {
        if (inventory.includes("Tokenoftrust")) {
            heidelLeader();
        } else {
            alert("Missing token");
        }
    };
    console.log("heidel");
}

function shop() {
    document.getElementById("question").innerHTML = "Welcome to Heidel stranger!";
    document.body.style.background = "url('./img/bg6.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.getElementById('sword').style.display = "none";
    document.getElementById('button1').innerHTML = "Ask for a guest.";
    document.getElementById('button2').innerHTML = "Return to the city.";
    document.getElementById('button2').onclick = function () {
        heidel();
    };
    document.getElementById('button1').onclick = function () {
        quest();
    };
    console.log("shop");
}

function quest() {
    document.getElementById("question").innerHTML = "Quest: Defeat Kzarka!";
    document.body.style.background = "url('./img/bg7.jpg')";
    document.body.style.image = "url('./img/bg7.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.getElementById('sword').style.display = "none";
    document.getElementById('restart').style.display = "none";
    document.getElementById('button2').innerHTML = "Attack Kzarka.";
    document.getElementById('button1').innerHTML = "Try to out run Kzarka.";
    document.getElementById('button1').onclick = function () {
        gameover();
    };
    document.getElementById('button2').onclick = function () {
        if (inventory.includes("Sword")) {
            heidel();
            token();
        } else {
            alert("can't attack need a sword");
        }
    };
    console.log("heidel");
}

function token() {
        var div = document.createElement("div");
        div.setAttribute("class", "spullen");
        var img = document.createElement("img");
        img.src="./img/token.png";
        // var p = document.createElement("p");
        // p.setAttribute("class", "p");
        // p.innerHTML = "Verrekijker";
        div.appendChild(img);
        // div.appendChild(p);
        backpack.appendChild(div);
        inventory.push("Tokenoftrust");
}



function gameover() {
    document.getElementById("question").innerHTML = "You fock'd it up m8 u focking wat";
    document.body.style.background = "url('./img/gameover.jpg')";
    document.body.style.backgroundSize = "cover";
    document.getElementById("button1").style.display= "none";
    document.getElementById("button2").style.display= "none";
    document.getElementById("backpack").style.display= "none";
    document.getElementById("restart").style.display= "block";
}

function restart() {
    location.reload();
}

function heidelLeader() {
    document.getElementById("question").innerHTML = "I heard you defeated the ruler of the dark work Kzarka!";
    document.body.style.background = "url('./img/bg8.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.getElementById('sword').style.display = "none";
    document.getElementById('button1').innerHTML = "Ask for a guest.";
    document.getElementById('button2').innerHTML = "Give the lost item.";
    document.getElementById('button1').onclick = function () {
        quest2();
    };
    document.getElementById('button2').onclick = function () {
        if (inventory.includes("lostItem")) {
            commander();
            document.getElementById("necklace").style.display = "none";
        } else {
            alert("Missing item");
        }
        44

    }

}

    function quest2() {
        document.getElementById("question").innerHTML = "Take back the missing item!";
        document.body.style.background = "url('./img/bg9.jpg')";
        document.body.style.image = "url('./img/bg9.jpg')";
        document.body.style.backgroundSize = 'cover';
        document.getElementById('sword').style.display = "none";
        document.getElementById('restart').style.display = "none";
        document.getElementById('button2').innerHTML = "Attack creatures!";
        document.getElementById('button1').innerHTML = "Try asking for the item.";
        document.getElementById('button1').onclick = function () {
            gameover();
        };
        document.getElementById('button2').onclick = function () {
            if (inventory.includes("Sword")) {
                heidelLeader();
                necklace();
            } else {
                gameover();
            }
        };

    }

        function necklace() {
            var div = document.createElement("div");
            div.setAttribute("class", "spullen");
            var img = document.createElement("img");
            img.src = "./img/necklace.png";
            img.setAttribute("id", "necklace");
            // var p = document.createElement("p");
            // p.setAttribute("class", "p");
            // p.innerHTML = "Verrekijker";
            div.appendChild(img);
            // div.appendChild(p);
            backpack.appendChild(div);
            inventory.push("lostItem");
        }

    function commander() {
        document.getElementById("question").innerHTML = "Hello stranger, I have heard much about you i need you to do a favour for me a visit Valencia.";
        document.body.style.background = "url('./img/bg10.png')";
        document.body.style.image = "url('./img/bg10.png')";
        document.body.style.backgroundSize = 'cover';
        document.getElementById('sword').style.display = "none";
        document.getElementById('restart').style.display = "none";
        document.getElementById('button2').style.display = "none";
        document.getElementById('button1').innerHTML = "Visit Valencia.";
        document.getElementById('button1').onclick = function () {
            document.getElementById('button1').onclick = function () {
                valencia();
            };
        };
    }

    function valencia() {
        document.getElementById("question").innerHTML = "Hello stranger, I have heard much about you i need you to do a favour for me a visit Valencia.";
        document.body.style.background = "url('./img/bg11.jpg')";
        document.body.style.image = "url('./img/bg11.jpg')";
        document.body.style.backgroundSize = 'cover';
        document.getElementById('sword').style.display = "none";
        document.getElementById('restart').style.display = "none";
        document.getElementById('button2').style.display = "none";
        document.getElementById('button1').innerHTML = "Meet the guard.";
        document.getElementById('button1').onclick = function () {
            document.getElementById('button1').onclick = function () {
                guard();
            };
        };
    }