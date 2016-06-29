# git-training

Resources:
* [Git Cheat Sheet](http://rogerdudler.github.io/git-guide/files/git_cheat_sheet.pdf)
* [Simple Guild](http://rogerdudler.github.io/git-guide/)
* [Interactive LearnGitBranching](http://pcottle.github.io/learnGitBranching/)
* [GitHub Extension for Chrome](https://chrome.google.com/webstore/detail/notifier-for-github/lmjdlojahmbbcodnpecnjnmlddbkjhnn)

Tools: 
* [SourceTree](https://www.sourcetreeapp.com/) - Git GUI
* [Oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) - Shell tool that shows current branch when in a dir with a repo

Other Useful git commands:
* `git reset --hard` - Resets everything, handy if you need to abort and revert to fresh commit state
* Rebasing
  * `git rebase master -i` - Start a rebase of current branch against master
  * `git rebase --continue` - Continue if there
* `git bisect` - Binary search for which commit a bug was introduced
* More at [git-tips](https://github.com/git-tips/tips)
