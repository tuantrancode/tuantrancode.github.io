import React from "react";
import CodeBlock from "@/components/shared/CodeBlock";

export const metadata = {
    title: "Git Tools",
    description: "Notes on using Git tools",
};

export default function Git() {

    return (
        <>
            {/* GIT OVERVIEW */}
            <section>
                <h3 className="section-header" id='gitOverview'>Git Overview</h3>
                <p>Git main site: <a href="https://git-scm.com/">git-scm.com/</a></p>
                <p>Git GUI: Visual Studio Code and various others</p>
                <h4 className="sub-section-header">Purpose</h4>
                <ul>
                    <li>To save snapshot/ commit</li>
                    <li>Version control</li>
                    <li>Collaborating on same file/project at the same time</li>
                    <li>Splitting production and development code</li>
                    <ul>
                        <li>For example: having the main branch be the production code</li>
                        <li>The side branch will be for current development where testing and changes can be done without affecting production build</li>
                        <li>Once changes are done, then the side branch can be merge with the main one (through pull requests) and then delete the side branch</li>
                    </ul>
                </ul>
                <hr />
            </section>


            {/* GIT CONCEPT */}
            <section>
                <h3 className="section-header" id='gitConcept'>Git Concepts</h3>
                <h4 className="sub-section-header">The 4 Levels of Git</h4>
                <ul>
                    <li>Remote repo level: the central location of the repo</li>
                    <ul>
                        <li>Git Providers: GitHub, GitLab, GitBucket</li>
                    </ul>
                    <li>Local repo level: a copy of the repo on the local computer including any local changes made to it</li>
                    <ul>
                        <li>Local repo use push/pull to synch changes with remote repo</li>
                    </ul>
                    <li>Stage area level: the area where changes to the files/folders are made before being commited to the local repo</li>
                    <li>Local folder level: the development code on the computer</li>
                </ul>
                <h4 className="sub-section-header">Branches</h4>
                <p>Create a copy of same code in main repo to work on without affecting the main branch</p>
                <ul>
                    <li>Use to make changes without affecting the production code (i.e. main branch)</li>
                    <li>Example: create a branch to fix a bug/ add feature, and once it's done, commit and push it to the remote repo branch, and do a pull request to have it merged with the main one</li>
                </ul>
                <p>You can only have one copy of the repo locally; if the repo have multiple branches, switching branches will change the local folders to match that branch</p>
                <ul>
                    <li>i.e. Only one branch of a repo can exist in the local folder at a time</li>
                </ul>
                 <h4 className="sub-section-header">HEAD</h4>
                <p>The HEAD is the pointer to the commit you're currently working on.</p>
                <ul>
                    <li>When switching branch, it will move to the last commit in that branch</li>
                    <li>When switching branch and the branch is new, it's just a copy of the previous branch, but it's pointing to the lastest commit of the new branch</li>
                </ul>
                <hr />
            </section>


            {/* KEY FILES */}
            <section>
                <h3 className="section-header" id='gitKeyFiles'>Key Files</h3>
                <ul>
                    <li><code>git/</code> : folder that has local git settings</li>
                    <li><code>.gitconfig</code> file</li>
                    <ul>
                        <li><code>.gitconfig</code> : global git setting file, usually in the User folder</li>
                        <li><code>.git/config</code> : local git setting file, in the local repo location</li>
                    </ul>
                    <li><code>.gitignore</code> file : file in repo root that tells git what to ignore by listing out the files/folders in it, like log files</li>
                    <ul>
                        <li><code>logs/</code> will ignore everything in logs folder</li>
                        <li><code>log.txt</code> will ignore the file log.txt</li>
                        <li><code>logs/*.txt</code> will ignore all .txt files inside the log folder</li>
                    </ul>
                    <li><code>.gitkeep</code> file : git ignores empty folder, so dev use this to make git recognize an empty folder by putting a <code>.gitkeep</code> file in there</li>
                </ul>
                <hr />
            </section>


            {/* COMMON GIT COMMAND */}
            <section>
                <h3 className="section-header" id='gitCmd'>Common Git Commands</h3>
                <ul>
                    <li><code>git add .|filename</code> : add all/filename changes to the staging area</li>
                    <li><code>git commit -m message</code> : commit changes in staging area to local repo and tag the commit with the message </li>
                    <ul>
                        <li>Message standard: describe changes, be in present tense, and max of 50 characters</li>
                    </ul>
                    <li><code>git push/pull</code> : sync changes between local and remote repo</li>
                    <li><code>git status</code> : view overview of changes</li>
                    <li><code>git log</code> : give history of repo</li>
                    <ul>
                        <li><code>git log --grep searchTerm</code> : search through log</li>
                        <li><code>git log --oneline</code> : display concise log format with only commit id and message on one line</li>
                    </ul>
                    <li><code>git restore .|filename</code> : undo changes in staging area</li>
                    <li><code>git revert commitId</code> : revert the changes to the commit with the id</li>
                    <ul>
                        <li>git does not delete history, but will add on to it by stating the changes that reverted the repo</li>
                    </ul>
                </ul>
                <h4 className="sub-section-header" >Good Commands for Debugging</h4>
                <ul>
                    <li><code>git stash</code> : save any uncommited changes in the staging area</li>
                    <ul>
                        <li><code>git stash pop</code> : load the uncommited changes you saved back to the staging area</li>
                    </ul>
                    <li><code>git switch branchName</code> : switch to another branch, branchName, and move the current HEAD to point to the branch's last commit</li>
                    <ul>
                        <li><code>git switch -c newBranch</code> : create and switch to new branch, but since it's a new branch, it copies the main branch and all the commits you've done so far</li>
                    </ul>
                    <li><code>git merge sourceBranch</code> : merge current branch with source branch</li>
                    <li><code>git branch newBranch</code> : create new branch without switching to it</li>
                    <li><code>git reset --hard HEAD~x|Head~commitHash</code> : revert the current branch by 'x' commits or to the commitHash</li>
                    <ul>
                        <li><code>git log --oneline</code> : display concise log format with only commit id and message on one line</li>
                    </ul>
                    <li><code>git revert commitHash</code> : revert the changes to the commit with the id</li>
                    <li><code>git cherry-pick commitHash</code> : copies the commit changes from commitHash to the current branch, but does not revert it in the old branch</li>

                </ul>
                <hr />
            </section>


            {/* TAGGING */}
            <section>
                <h3 className="section-header" id='tagging'>Tagging</h3>
                <p>Tagging is used to mark the commits in a repo history, usually to mark releases (v1.0, v1.1, v2.0)</p>
                <ul>
                    <li><code>git tag tagName commitHash</code> : create a lightweight tag with the name tagName for the commitHash</li>
                    <li><code>git tag -a tagName -m "message" commitHash</code> : create an annotated tag that allow us to add a message to the tag (more commonly use)</li>
                    <li><code>git tag -ln</code> : list tag with their annotations</li>
                    <li><code>git tag -ln "v1.*"</code> : filter tag so only version 1 tags are shown</li>
                    <li><code>git tag --delete tagName</code> : delete the tag with the name tagName</li>
                    <li><code>git push origin tagName</code> : push a tag to the remote repo because tags are not pushed by default</li>
                    <li><code>git push origin --tags</code> : push all tags to the remote repo</li>
                    <li><code>git fetch</code> : fetch commits and tags</li>
                </ul>
                <hr />
            </section>


            {/* MERGE CONFLICTS */}
            <section>
                <h3 className="section-header" id='mergeConflicts'>Merge Conflicts</h3>
                <p>GitHub docs: <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line">link</a></p>
                <p>GitLab docs: <a href="https://docs.gitlab.com/user/project/merge_requests/conflicts/#in-the-inline-editor">link</a></p>
                <hr />
            </section>


            {/* WRONG BRANCH */}
            <section>
                <h3 className="section-header" id='wrongBranch'>Wrong Branch</h3>
                <ol>
                    <li>If working on the wrong branch and did NOT commit the changes yet:</li>
                    <ul>
                        <li>Do the following and continue working on the correct branch</li>
                        <CodeBlock language='jsx'>{`
git stash
git switch correct-branch
git stash apply                
                `}</CodeBlock>
                        <li>If the correct branch doesn't exist yet then replace the second line with <code>git switch -c correctBranch</code></li>
                    </ul>

                    <li>If working on the wrong branch and commited the changes 1 time, but did NOT push the changes:</li>
                    <ul>
                        <li>Do the following and continue working on the correct branch</li>
                        <CodeBlock language='jsx'>{`
git reset --soft HEAD^
git switch correct-branch
git commit -c ORIG_HEAD               
                `}</CodeBlock>
                        <li>reset --soft Head^ will reverse the commit and put the changes back into the staging area</li>
                    </ul>

                    <li>If working on the wrong branch and commited many changes, but did NOT push the changes:</li>
                    <ul>
                        <li>Do the following and continue working on the correct branch</li>
                        <CodeBlock language='jsx'>{`
git stash                       # skip if all changes are committed
git branch new-branch       # create the new branch but does not switch to it
git reset --hard origin/main    # reset current (wrong) branch to match the remote main
git switch new-branch       # switch to correct branch         
git stash pop                   # skip if all changes were committed      
                `}</CodeBlock>
                        <li>Now the commits are on the new branch, and you can merge it with the correct branch if it exist already</li>
                    </ul>

                    <li>If working on the wrong branch and you already pushed the changes:</li>
                    <ul>
                        <li>Switch to the wrong branch, view the <code>git log</code>, <code>git reverse</code> the commits; then switch to the correct branch and <code>git cherry-pick the right commits</code></li>
                        <CodeBlock language='jsx'>{`
git switch wrong_branch
git revert commitHash1
git switch right_branch
git cherry-pick commitHash1
                `}</CodeBlock>
                        <li>Now the commits are on the correct branch, and you can continue with your code</li>
                    </ul>
                </ol>
                <hr />
            </section>

            {/* GIT COMMANDS TABLE */}
            <h3 className="section-header" id='cmdTables'>Git Commands Table</h3>
            <section>
                <h3>Editing files / folders</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>git status</code></td>
                            <td>Show changed files, staged changes, and branch info.</td>
                        </tr>
                        <tr>
                            <td><code>git add &lt;file&gt;</code></td>
                            <td>Stage a file's changes for the next commit.</td>
                        </tr>
                        <tr>
                            <td><code>git add -p</code></td>
                            <td>Interactively stage hunks from files.</td>
                        </tr>
                        <tr>
                            <td><code>git restore &lt;file&gt;</code></td>
                            <td>Discard unstaged changes in a file (restore from last commit).</td>
                        </tr>
                        <tr>
                            <td><code>git restore --staged &lt;file&gt;</code></td>
                            <td>Unstage a file (remove from index but keep working changes).</td>
                        </tr>
                        <tr>
                            <td><code>git checkout -- &lt;file&gt;</code></td>
                            <td>Old form to discard changes in a file (use <code>git restore</code> now).</td>
                        </tr>
                        <tr>
                            <td><code>git mv &lt;old&gt; &lt;new&gt;</code></td>
                            <td>Rename or move a file (stages the change).</td>
                        </tr>
                        <tr>
                            <td><code>git rm &lt;file&gt;</code></td>
                            <td>Remove a file and stage its deletion.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Branches</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>git branch &lt;name&gt;</code></td>
                            <td>Create a new branch pointing at the current commit (does not switch).</td>
                        </tr>
                        <tr>
                            <td><code>git switch &lt;name&gt;</code></td>
                            <td>Switch to an existing branch.</td>
                        </tr>
                        <tr>
                            <td><code>git switch -c &lt;name&gt;</code></td>
                            <td>Create a new branch and switch to it (shortcut for create+switch).</td>
                        </tr>
                        <tr>
                            <td><code>git merge &lt;branch&gt;</code></td>
                            <td>Merge another branch into the current branch (creates a merge commit unless fast-forward).</td>
                        </tr>
                        <tr>
                            <td><code>git rebase &lt;base&gt;</code></td>
                            <td>Reapply commits on top of &lt;base&gt; (rewrites history of the current branch).</td>
                        </tr>
                        <tr>
                            <td><code>git branch -d &lt;name&gt;</code></td>
                            <td>Delete a branch (safe: only deletes if merged).</td>
                        </tr>
                        <tr>
                            <td><code>git branch -D &lt;name&gt;</code></td>
                            <td>Force-delete a branch even if unmerged (dangerous).</td>
                        </tr>
                        <tr>
                            <td><code>git push origin --delete &lt;name&gt;</code></td>
                            <td>Delete a remote branch.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Staging area & commits</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>git add &lt;file&gt;</code></td>
                            <td>Stage file changes (put changes into the index for the next commit).</td>
                        </tr>
                        <tr>
                            <td><code>git restore --staged &lt;file&gt;</code></td>
                            <td>Unstage a file (remove it from the index).</td>
                        </tr>
                        <tr>
                            <td><code>git commit -m "msg"</code></td>
                            <td>Create a commit from staged changes with message "msg".</td>
                        </tr>
                        <tr>
                            <td><code>git commit --amend</code></td>
                            <td>Amend the most recent commit (modify message or add new staged changes).</td>
                        </tr>
                        <tr>
                            <td><code>git reset --soft &lt;commit&gt;</code></td>
                            <td>Move HEAD to &lt;commit&gt; but keep staged and working changes.</td>
                        </tr>
                        <tr>
                            <td><code>git reset --mixed &lt;commit&gt;</code></td>
                            <td>Move HEAD to &lt;commit&gt; and reset the index (unstage changes) but keep working files.</td>
                        </tr>
                        <tr>
                            <td><code>git reset --hard &lt;commit&gt;</code></td>
                            <td>Move HEAD to &lt;commit&gt; and reset index + working tree (discard changes).</td>
                        </tr>
                        <tr>
                            <td><code>git stash</code></td>
                            <td>Save uncommitted changes to the stash stack and clean the working directory.</td>
                        </tr>
                        <tr>
                            <td><code>git stash pop</code></td>
                            <td>Apply the latest stash and remove it from the stash list.</td>
                        </tr>
                        <tr>
                            <td><code>git stash apply</code></td>
                            <td>Apply a stash but keep it in the stash list.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Repository management (remote & history)</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Command</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>git init</code></td>
                            <td>Create a local repo in the current directory</td>
                        </tr>
                        <tr>
                            <td><code>git clone &lt;url&gt;</code></td>
                            <td>Clone a remote repository to your local machine.</td>
                        </tr>
                        <tr>
                            <td><code>git remote add origin &lt;url&gt;</code></td>
                            <td>Add a new remote repo and give it the alias origin.</td>
                        </tr>
                        <tr>
                            <td><code>git remote add &lt;name&gt; &lt;url&gt;</code></td>
                            <td>Add a new remote reference. &lt;name&gt; is an alias (origin is commonly used), not the name of the repo</td>
                        </tr>
                        <tr>
                            <td><code>git remote -v</code></td>
                            <td>List remotes and their URLs.</td>
                        </tr>
                        <tr>
                            <td><code>git fetch</code></td>
                            <td>Download commits, refs, and objects from remote without merging.</td>
                        </tr>
                        <tr>
                            <td><code>git pull</code></td>
                            <td><code>git fetch</code> then merge (or rebase) remote changes into current branch.</td>
                        </tr>
                        <tr>
                            <td><code>git push</code></td>
                            <td>Upload local branch commits to the remote.</td>
                        </tr>
                        <tr>
                            <td><code>git log</code></td>
                            <td>Show commit history for the current branch.</td>
                        </tr>
                        <tr>
                            <td><code>git reflog</code></td>
                            <td>Show local history of HEAD movements (useful to recover lost commits).</td>
                        </tr>
                        <tr>
                            <td><code>git tag &lt;name&gt;</code></td>
                            <td>Create a lightweight tag pointing at current commit.</td>
                        </tr>
                        <tr>
                            <td><code>git push --tags</code></td>
                            <td>Push local tags to the remote.</td>
                        </tr>
                        <tr>
                            <td><code>git gc</code></td>
                            <td>Run garbage collection to optimize repository storage (housekeeping).</td>
                        </tr>
                    </tbody>
                </table>
            </section>


        </>
    );
}