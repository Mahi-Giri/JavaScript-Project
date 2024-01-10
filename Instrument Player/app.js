// const drum = document.querySelectorAll(`.drum`);

// drum[0].addEventListener(`click`, () => {
//     const w = new Audio('./Songs/tom-1-28537.mp3');
//     w.play();
// });
// drum[1].addEventListener(`click`, () => {
//     const a = new Audio('./Songs/tom-2-28541.mp3');
//     a.play();
// });
// drum[2].addEventListener(`click`, () => {
//     const s = new Audio('./Songs/tom-3-28542.mp3');
//     s.play();
// });
// drum[3].addEventListener(`click`, () => {
//     const d = new Audio('./Songs/tom-4-28543.mp3');
//     d.play();
// });
// drum[4].addEventListener(`click`, () => {
//     const j = new Audio('./Songs/snare-28545.mp3');
//     j.play();
// });
// drum[5].addEventListener(`click`, () => {
//     const k = new Audio('./Songs/crash-28546.mp3');
//     k.play();
// });
// drum[6].addEventListener(`click`, () => {
//     const l = new Audio('./Songs/kick-bass-28547.mp3');
//     l.play();
// });

const drumSounds = [
    './Songs/tom-1-28537.mp3',
    './Songs/tom-2-28541.mp3',
    './Songs/tom-3-28542.mp3',
    './Songs/tom-4-28543.mp3',
    './Songs/snare-28545.mp3',
    './Songs/crash-28546.mp3',
    './Songs/kick-bass-28547.mp3'
];

const drum = document.querySelectorAll('.drum');

function playSound(index) {
    const audio = new Audio(drumSounds[index]);
    audio.play();
}

for (let i = 0; i < drum.length; i++) {
    drum[i].addEventListener('click', () => {
        playSound(i);
    });
}