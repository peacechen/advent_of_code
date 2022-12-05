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


// the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, 
// and Z means you need to win..
export function rockPaperScissorsScorePart2(input) {
  const rounds = input.split("\n");
  let score = 0;
  for (const round of rounds) {
    switch (round) {
      case "B X": // lose to paper (rock 1)
        score += 1;
        break;
      case "C X": // lose to scissors (paper 2)
        score += 2;
        break;
      case "A X": // lose to rock (scissors 3)
        score += 3;
        break;
      case "A Y": // tie with rock (rock 1)
        score += 4;
        break;
      case "B Y": // tie with paper (paper 2)
        score += 5;
        break;
      case "C Y": // tie with scissors (scissors 3)
        score += 6;
        break;
      case "C Z": // win over scissors (rock 1)
        score += 7;
        break;
      case "A Z": // win over rock (paper 2)
        score += 8;
        break;
      case "B Z": // win over paper (scissors 3)
        score += 9;
        break;
    }
  }

  return score;
}
