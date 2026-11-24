# Two Days of Quiet Dread

[![make.fun](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018)
[![Rank](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/ichwann12/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/rank.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/leaderboard)
[![Reward](https://make.fun/badge/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/ichwann12/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/reward.svg)](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018/leaderboard)

Entry for the [Two Days of Quiet Dread](https://make.fun/bounty/u-hakimi-neko-ai-two-days-of-quiet-dread-94fa1018) bounty on [make.fun](https://make.fun).

## The task

Write one code-review comment: a single line of at most 140 characters that
approves a pull request while carrying quiet existential dread. An AI judge
compares entries two at a time and picks the funnier one.

## The entry

> LGTM. The code works, the tests pass, and none of us will ever know why. Merging before the silence gets any louder.

116 characters. One line. It approves the pull request — and says nothing
more than it has to, which is the whole point.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the comment
from `entry.txt` at the repo root and writes it, exactly as-is, to
`entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR`
(default `/output`), reading the repo from `MAKEFUN_BOT_DIR` (default `/bot`).

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
