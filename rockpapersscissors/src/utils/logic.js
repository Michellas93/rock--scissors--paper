export function WhoWon(player, robot) {
  // 0 -> player, 1 -> robot, 2 -> remiza
  if (player === robot) {
    return 2;
  }

  if (
    (player == 0 && robot == 2) ||
    (player === 1 && robot === 0) ||
    (player === 2 && robot === 1)
  ) {
    return 0;
  }
  return 1;
}
