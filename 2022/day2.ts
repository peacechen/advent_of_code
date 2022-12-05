// The score for a single round is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) 
// plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
export function rockPaperScissorsScore(input) {
  const rounds = input.split("\n");
  let score = 0;
  for (const round of rounds) {
    switch (round) {
      case "B X": // rock(1) loses
        score += 1;
        break;
      case "C Y": // paper(2) loses
        score += 2;
        break;
      case "A Z": // scissors(3) loses
        score += 3;
        break;
      case "A X": // rock(1) rock tie
        score += 4;
        break;
      case "B Y": // paper(2) paper tie
        score += 5;
        break;
      case "C Z": // scissors(3) scissors tie
        score += 6;
        break;
      case "C X": // rock(1) wins
        score += 7;
        break;
      case "A Y": // paper(2) wins
        score += 8;
        break;
      case "B Z": // scissors(3) wins
        score += 9;
        break;
    }
  }

  return score;
}
