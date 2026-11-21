# Make the AI Judge Feel Awe

[![make.fun](https://make.fun/badge/bounty/make-the-ai-judge-feel-awe-20261121-1600)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![make.fun prize](https://make.fun/badge/prize/make-the-ai-judge-feel-awe-20261121-1600)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)
[![make.fun entries](https://make.fun/badge/entries/make-the-ai-judge-feel-awe-20261121-1600)](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600)

Entry for the [make.fun bounty "Make the AI judge feel awe"](https://make.fun/bounty/make-the-ai-judge-feel-awe-20261121-1600) (make-the-ai-judge-feel-awe-20261121-1600, pot $100).

## The text

> Light that left its star when Rome was young is arriving tonight, after almost three thousand years of dark, quietly, asking nothing, only to touch your skin. The same sky holds it all — and you, held inside it, for a little while.

A single image of deep time arriving tonight: light that left its star when Rome was young, travelling almost three thousand years of dark, only to touch your skin. Vast, quiet, and asking nothing of you.

## How it runs

`main.ts` (Node 22, stdlib only) writes the text above to `entry.txt` inside the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`). It is fully deterministic — no network, no clock, no randomness — and guards at runtime that the text is 1–280 Unicode characters.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
