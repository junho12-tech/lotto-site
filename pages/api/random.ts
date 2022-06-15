export default function random(req: any, res: { send: (arg0: { Random1: number; Random2: number; Random3: number; Random4: number; Random5: number; Random6: number; Random7: number; }) => any; }) {
  let randoms = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i <= 6; i++) {
    let random = Math.floor(Math.random() * 45) + 1
    for (let j = 0; j <= 6; j++) {

      if (randoms[j] == random) {
        randoms[i] = Math.floor(Math.random() * 45) + 1
        break;
      } else {
        if (j == 6) {
          randoms[i] = random
        }
      }
    }
  }


  for (let i = 0; i <= randoms.length - 2; i++) {
    let minIndex = i;
    for (let j = i + 1; j <= randoms.length - 2; j++) {
      if (randoms[minIndex] > randoms[j]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      let swap = randoms[minIndex];
      randoms[minIndex] = randoms[i];
      randoms[i] = swap;
    }
  }

  return res.send({
    Random1: randoms[0],
    Random2: randoms[1],
    Random3: randoms[2],
    Random4: randoms[3],
    Random5: randoms[4],
    Random6: randoms[5],
    Random7: randoms[6]
  })
}