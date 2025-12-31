---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*), Bash(git diff:*), Bash(git log:*), Bash(curl:*)
description: Create a git commit following the gitmoji convention
argument-hint: [optional commit message hint]
---

# Gitmoji Conventional Commits

Generate commit messages following the gitmoji convention by onRuntime Studio.

## Git Context

- Current git status: !`git status`
- Staged changes: !`git diff --staged`
- Unstaged changes: !`git diff`
- Current branch: !`git branch --show-current`
- Recent commits for style reference: !`git log --oneline -5`

## Available Gitmojis

!`curl -s https://raw.githubusercontent.com/carloscuesta/gitmoji/master/packages/gitmojis/src/gitmojis.json | jq -r '.gitmojis[] | "\(.emoji) | \(.description)"'`

## Commit Structure

```
<gitmoji> <type> <description> [(#<issue number>)]

[optional body]

[optional footer(s)]
```

## Rules

1. Write in **lowercase**
2. Use **imperative mood** ("add" not "added")
3. One logical change per commit
4. Keep description concise

## Types

| Type | Description |
| --- | --- |
| `add` | Add a new feature |
| `fix` | Fix a bug |
| `improve` | Improve something |
| `update` | Update something |
| `remove` | Remove something |
| `refactor` | Refactor something |
| `rename` | Rename something |
| `move` | Move a file or folder |
| `upgrade` | Upgrade dependencies |
| `downgrade` | Downgrade dependencies |

## Your Task

Based on the git status and diff above, create commits following the gitmoji convention.

If the user provided a hint: $ARGUMENTS

**Important**:
- Use the gitmoji list above to select the correct emoji.
- Look at the recent commits for style reference.
- Split changes into multiple commits if needed. One commit = one logical change.
- Do NOT sign commits. No "Generated with Claude Code", no "Co-Authored-By", no footer.

1. Analyze the changes and group them by logical units
2. For each group:
   - Stage only the relevant files
   - Choose the correct gitmoji from the list above based on the type of change
   - Write a concise commit message
   - Create the commit
3. Repeat for each logical group of changes
