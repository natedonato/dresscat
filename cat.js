document.addEventListener("DOMContentLoaded", ()=>{
        const hats = document.getElementsByClassName("hats");
        const faces = document.getElementsByClassName("faces");
        const outfits = document.getElementsByClassName("outfits");
        const bgs = document.getElementsByClassName("bgs");

        let hatindex = hats.length;
        let faceindex = faces.length;
        let outfitindex = outfits.length;
        let bgindex = bgs.length;

        const nextItem = (collection, index) => {
            if(index === collection.length || index === -1){
                index = 0;
                collection[0].style.display = "block";
                return index;
            }else{
                collection[index].style.display = "none";
                index += 1;
                if (collection[index]) { 
                    collection[index].style.display = "block";
                }
                return index;
            }
        };

        const prevItem = (collection, index) => {
            if(index === collection.length || index === -1){
                index = collection.length - 1;
                collection[index].style.display = "block";
                return index;
            }else{
                collection[index].style.display = "none";
                index -= 1;
                if (collection[index]) { 
                    collection[index].style.display = "block";
                }
                return index;
            }
        };

        let testbutton = document.getElementById("testbutton");
        testbutton.addEventListener("click", () => {
            bgindex = nextItem(bgs, bgindex);
        });
        testbutton2.addEventListener("click", () => {
            bgindex = prevItem(bgs, bgindex);
        });
        testbutton3.addEventListener("click", () => {
            outfitindex = nextItem(outfits, outfitindex);
        });
        testbutton4.addEventListener("click", () => {
            outfitindex = prevItem(outfits, outfitindex);
        });

        testbutton5.addEventListener("click", () => {
            faceindex = nextItem(faces, faceindex);
        });
        testbutton6.addEventListener("click", () => {
            faceindex = prevItem(faces, faceindex);
        });

        testbutton7.addEventListener("click", () => {
            hatindex = nextItem(hats, hatindex);
        });
        testbutton8.addEventListener("click", () => {
            hatindex = prevItem(hats, hatindex);
        });

        
        
});