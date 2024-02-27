let interval = false;
let removeEListener = false;

export function gameClear() {
  interval && clearInterval(interval);
  removeEListener && removeEListener();
}

export function getInterval(int, rel) {
  interval = int;
  removeEListener = rel;
}
