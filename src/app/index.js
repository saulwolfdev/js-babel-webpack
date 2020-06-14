import Photos from "./photos";
import "../css/styles.css";

const photos=new Photos();
async function main() {
const listPhotos=await photos.getPhotos();
console.log("=>",listPhotos)
}main();

