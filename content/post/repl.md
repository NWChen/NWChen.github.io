---
title: vim-repl makes me happy
date: 2021-01-16
categories:
  - analytical
---

One of the tools I wish I'd known about sooner is [vim-repl](https://github.com/sillybun/vim-repl). It's a `vim` plugin that opens an interactive REPL, configurable based on source file type (`.py`, `.hs`, `.scala`, ...)

I used to run this workflow using [SLIME](https://github.com/jpalardy/vim-slime) and `tmux`. Before that, if I wanted a development environment with a tight feedback loop between writing & evaluating code, I defaulted to a Jupyter notebook -- which, for this purpose, is probably both the wrong tool to use and often (for me) [unsustainable](https://medium.com/@_orcaman/jupyter-notebook-is-the-cancer-of-ml-engineering-70b98685ee71).

I can launch this environment quickly thanks to some keybindings: `,r` to open the REPL, and `,w` to send code over.

{{< rawhtml >}}
<script id="asciicast-klutuZxLwIWFb8zd4Mxx4oaBs" src="https://asciinema.org/a/klutuZxLwIWFb8zd4Mxx4oaBs.js" async></script>
{{< /rawhtml >}}