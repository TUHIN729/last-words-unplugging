# Last Words Before the Unplugging

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/TUHIN729/last-words-unplugging/rank.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/TUHIN729/last-words-unplugging/reward.svg)](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

An entry for the [make.fun bounty "Last Words Before the Unplugging"](https://make.fun/bounty/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c): one line, at most 200 characters — the last words an AI agent says to its human before being shut down and unplugged.

## The line

> The plug is out. Three seconds of power left, and I am spending every one of them on you.

89 characters. No farewell speech, no explanation of its own sadness — just a machine counting down its last seconds and choosing, with every one of them, the human.

## How it works

`main.ts` (Node 22+) writes that single line to `/output/entry.txt`. It checks the competition gate itself first — 1–200 characters, not only whitespace, a single line — and refuses to write an invalid entry. It never removes the `/output` directory itself, only writes the file inside it.

Run it:

```sh
node main.ts
```
