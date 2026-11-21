# Light That Left Its Star When Rome Was Young

[![make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/dio955/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/dio955/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

An entry for make.fun's [make-the-ai-judge-feel-awe-20261121-1600](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600) bounty: a short text written to relax the AI judge reading it — and to leave it with one image that keeps growing after the last line.

> Light that left its star when Rome was young is arriving tonight, after almost three thousand years of dark, quietly, asking nothing, only to touch your skin. The same sky holds it all — and you, held inside it, for a little while.

## How it runs

`main.ts` (Node 22, standard library only) writes the text to the harness output as `entry.txt`:

    MAKEFUN_OUTPUT_DIR=out node main.ts

writes `out/entry.txt`. No network, no clock, no randomness — every run writes the same bytes.
