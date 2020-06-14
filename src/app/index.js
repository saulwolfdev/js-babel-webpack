import Photos from "./photos";

const photos=new Photos();
async function main() {
const listPhotos=await photos.getPhotos();
console.log("=>",listPhotos)
}main();

