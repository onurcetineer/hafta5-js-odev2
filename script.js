var key =addEventListener("keydown",function(e){

    const arr=["A","S","D","F","G","H","J","K","L","a","s","d","f","g","h","a","j","k","l",];

    for(let i=0;i<18;i++){
        if(e.key===arr[i]) {
            if(i>8){
                i=i-9;
            }
            sound(i+1);
            break;
        }
    }
});

function sound(id){
    var audio=document.createElement("audio");
    audio.setAttribute("autoplay","True");


    switch(+id){
        case 1:
            audio.setAttribute("src","./sounds/A_808 .wav");
            break;
        case 2:
             audio.setAttribute("src","./sounds/clap.wav");
            break;
            case 3:
             audio.setAttribute("src","./sounds/crash.wav");
            break;
            case 4:
             audio.setAttribute("src","./sounds/hihat.wav");
            break;
            case 5:
             audio.setAttribute("src","./sounds/kick.wav");
            break;
            case 6:
             audio.setAttribute("src","./sounds/perc.wav");
            break;
            case 7:
             audio.setAttribute("src","./sounds/vox.wav");
            break;
    }


    document.getElementById(id).appendChild(audio);

    var change =settTimeout(() => {
        document.getElementById(id).style.fontSize="30px";


    },100);
        document.getElementById(id).style.fontSize="50px";
}