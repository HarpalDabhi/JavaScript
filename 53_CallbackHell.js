let script;

function loadScript(src,callback){
    script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);

    script.onload=()=>{
        console.log("Script loaded");
        callback();
    }
}



src=`https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js`;



loadScript(src,function goodMorning(){
    console.log("Good morning! 1");
    loadScript(src,function goodMorning(){
        console.log("Good morning ! 2");
        loadScript(src,function goodMorning(){
            console.log("Good morning ! 3");
            loadScript(src,function goodMorning(){
                console.log("Good morning ! 4");
                loadScript(src,function goodMorning(){
                    console.log("Good morning ! 5");
                    loadScript(src,function goodMorning(){
                        console.log("Good morning ! 6");
                        loadScript(src,function goodMorning(){
                            console.log("Good morning ! 7");
                            loadScript(src,function goodMorning(){
                                console.log("Good morning ! 8");
                            });
                        });
                    });
                });
            });
        });
    });
});