import React from 'react';
import SearchContainer from '@/components/shared/SearchContainer';

export const metadata = {
  title: "CMD and Terminal",
  description: "Notes on various terminal tools",
};

export default function CmdTools() {

  return (
    <>
    {/* <!-- QUICK REFERENCE --> */}
    <h3 className="section-header" id="quick">Quick Reference</h3>
    <ul>
      <li>Setup:</li>
      <ul>
      <li><code>ssh -i [private key] [user]@[host]</code>: connect to a remote host using SSH</li>
      <li>Reading logs live:</li>
      <ul>
        <li><code>sudo tail -f /var/log/nginx/access.log</code></li>
        <li><code>sudo tail -f /var/log/nginx/error.log</code></li>
      </ul>
      <li><code>q / exit</code>: quit the current session</li>
      <li><code>Ctrl + L</code>: clear the terminal screen</li>
      <li><code>sudo apt update && sudo apt upgrade -y</code>: update and upgrade packages</li>
      <li><code>sudo apt install wget curl unzip git -y</code>: install common utilities</li>
      <ul>
        <li>wget: download files from the web through HTTP/HTTPS/FTP</li>
        <ul>
          <li><code>wget [URL]</code> - download a file from the specified URL</li>
        </ul>
        <li>curl: testing REST APIs, sending POST/PUT requests</li>
        <li>unzip: extract <code>.zip</code> files since Linux only handle <code>.tar.gz</code> files</li>
        <li>git: version control system</li>
      </ul>
      <li><code>sudo useradd -m [username]</code>: add a new user and make a home directory</li>
      <li><code>sudo passwd [username]</code>: set password for a user</li>
      <li><code>sudo usermod [username] sudo</code>: add a user to the sudo group</li>
      <li><code>VARIABLE=value</code>: set an environment variable</li>
      <li><code>export VARIABLE=value</code>: export an environment variable to make it available to child processes/subshells</li>
      <li><code>sudo apt install nginx -y</code>: install Nginx web server</li>
      <ul>
        <li>setup reverse proxy and rate limiting rules, also ssh limit</li>
      </ul>
      </ul>
      <hr/>

      <li>Navigation:</li>
      <ul>
      <li><code>pwd</code>: print current directory</li>
      <li><code>cd [directory]</code>: change directory</li>
      <li><code>mkdir [directory]</code>: create a new directory</li>
      <li><code>cp [source] [destination]</code>: copy files or directories</li>
      <li><code>scp [source] [user]@[host]:[destination]</code>: securely copy files between local and remote hosts</li>
      <ul>
        <li><code>scp -r [source] [user]@[host]:[destination]</code>: securely copy directories recursively</li>
      </ul>
      <li><code>rsync -avz [source] [user]@[host]:[destination]</code>: copying large files and synchronizing directories</li>
      <li><code>mv [source] [destination]</code>: move or rename files or directories</li>
      <li><code>rm [file]</code>: remove a file</li>
      <ul>
        <li><code>rm -r [directory]</code>: remove a directory and its contents recursively</li>
      </ul>
      <li><code>printenv | grep [variable]</code>: search for environment variables</li>
      <li><code>ls</code>: list directory contents</li>
      <ul>
        <li><code>ls -a -1f</code>: list all files, one per line, with file type indicators</li>
        <li><code>ls [directory]</code>: list contents of a specific directory</li>
      </ul>
      <li><code>tree -a -L 2</code>: display all files and directory structure up to 2 levels deep</li>
      <li><code>which [command]</code>: display the path of the executable for a command</li>
      <li><code>find [directory] -name [filename]</code>: search for a file in a directory and its subdirectories</li>
      <ul>
        <li><code>find [directory/to/search] -type d -name [directory]</code>: search for a folder in a directory and its subdirectories</li>
      </ul>
      </ul>
      <hr/>

      <li>File Edit, Extract/Compress, and Firewall:</li>
      <li><code>cat -n [file]</code>: display the contents of a file with line numbers</li>
      <ul>
        <li><code>cat [file] | grep [pattern]</code>: search for a pattern in a file</li>
        <li><code>{`cat [file1] [file2]> [combined file]`}</code>: concatentate file1 and file2 into a combined file</li>
      </ul>
      <li><code>nano -l [file]</code>: edit file with line numbers on left</li>
      <ul>
        <li><code>Ctrl + O</code>: save the current file</li>
        <li><code>Ctrl + X</code>: exit the editor</li>
        <li><code>Ctrl + W</code>: search within the file</li>
        <li><code>Ctrl + _</code>: jump to specific line #</li>
      </ul>
      <li><code>tar</code>: compress and extract <code>.tar.gz</code> files</li>
      <ul>
        <li><code>tar -czf [archive.tar.gz] [/path/to/directory]</code>: create a compressed archive of a directory</li>
        <li><code>tar -xf [archive.tar.gz]</code> - extract a compressed archive</li>
      </ul>
      <li><code>ufw</code>: Uncomplicated Firewall</li>
      <ul>
        <li><code>ufw status</code> - display the current status of the firewall</li>
        <li><code>sudo ufw allow from [hostname] to [remoteAddress/any] app [appname]</code> - allow traffic from a specific host to all the ports listed by the app profile</li>
        <ul>
          <li><code>sudo ufw allow from [home] to any app OpenSSH</code></li>
        </ul>
        <li><code>ufw app list</code> - list available applications</li>
        <ul>
          <li><code>ufw app info [appname]</code> - display network information about a specific application</li>
        </ul>
        <li><code>ufw delete [rule]</code> - delete a specific rule</li>
        <li><code>sudo ufw allow [port #]/[tcp/udp]</code> - allow traffic on a specific port</li>
        <li><code>sudo ufw deny [port #]/[tcp/udp]</code> - deny traffic on a specific port</li>
        <ul>
          <li>Port 22: SSH</li>
          <li>Port 80: HTTP/Nginx</li>
          <li>Port 443: HTTPS/Nginx</li>
        </ul>
      </ul>
    </ul>
    <hr/>

      {/* <!-- LINUX COMMANDS --> */}
    <h3 className="section-header" id="linux">Linux Commands</h3>

    <ul>
      <li>Basics:</li>
      <ul>
        <li>Format: <code>command -option /argument</code></li>
        <li>Help Commands:</li>
        <ul>
          <li><code>{`{command} --help`}</code> - display help information for a command</li>
          <li><code>{`man {command}`}</code> - display the manual page for a command</li>
          <li><code>{`info {command}`}</code> - display detailed information about a command</li>
          <li>Shortcuts:</li>
          <ul>
            <li>U: return to parent menu</li>
            <li>B: goes back to beginning of node</li>
            <li>Q: quit</li>
            <li>PageUp / PageDown: scroll through the manual</li>
          </ul>
        </ul>
        <li>Piping <code>command1 | command2</code>: sends the output of command1 as input to command2</li>
        <li>Protecting:</li>
        <ul>
          <li>Single Quote: protect everything from being shell expansion</li>
          <li>Double Quote: allow variable expansion but protect spaces</li>
          <ul>
            <li>Good for protecting variables from being expanded into multiple variables because of spaces</li>
          </ul>
          <li>Backslash: escape the single following character and also used to split long commands to a separate line</li>
        </ul>
        <li>File Globbing</li>
        <ul>
          <li>* - matches any number of characters</li>
          <li>? - matches a single character</li>
          <li>[abc] - matches any one of the characters a, b, or c</li>
          <li>[a-z] - matches any one character in the range a to z</li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <li><code>Ctrl + L</code> - clear the terminal</li>
        <li><code>Ctrl + D</code> - exit terminal</li>
        </ul>
        <li>Directories:</li>
        <ul>
          <li><code>pwd</code> - print current directory</li>
          <li><code>cd /path/to/directory</code> - change directory</li>
          <ul>
            <li><code>cd -</code> - change to the previous directory</li>
            <li><code>cd .</code> - stay in the current directory</li>
            <li><code>cd ..</code> - change to the parent directory</li>
            <li><code>cd ~</code> - change to the home directory</li>
          </ul>
          <li><code>ls</code> - list files in the current directory</li>
          <li><code>ls -l filename</code> - list detailed information about a specific file</li>
          <li><code>getfacl filename</code> - display the access control list (ACL) of a file</li>
          <li><code>find /directory</code> - list out whole hierarchy of directory</li>
          <li><code>find /path/to/directory -name "d*""</code> - find a file matching a pattern in a directory</li>
          <li><code>find /course -perm 755</code> - find files with specific permissions</li>
        </ul>
         <li>Aliases:</li>
         <ul>
          <li><code>alias cp='cp -i'</code> - create an alias for a command; useful to change default command options</li>
          <li><code>ln -s /path/to/original /path/to/link</code> - create a symbolic link or alias for directory</li>
          <ul>
            <li>Example: <code>ln -s /projects/android</code> and then <code>cd android</code></li>
         </ul>
        </ul>
        <li>Copy, Move/Rename, Create, Delete, Redirecting/Appending:</li>
        <ul>
          <li><code>cp source destination</code> - copy a file or directory</li>
          <ul>
            <li><code>cp -r source destination</code> - copy a directory and its contents recursively</li>
          </ul>
          <li><code>mv source destination</code> - move/rename a file or directory</li>
          <li><code>mkdir directory</code> - create a new directory</li>
          <ul>
            <li><code>mkdir -p /path/to/directory</code> - create a directory and any necessary parent directories</li>
          </ul>
          <li><code>rm file</code> - delete a file</li>
          <ul>
            <li><code>rm file[12]</code> - delete multiple files matching a pattern</li>
            <li><code>rm -r directory</code> - delete a directory and its contents recursively</li>
          </ul>
          <li><code>{`>`}</code> - redirect output to a file</li>
          <li><code>{`>>`}</code> - append output to a file</li>
        </ul>
        <li>Variable:</li>
        <ul>
          <li><code>$variableName</code> - define a variable</li>
          <li><code>PATH=$PATH:</code> - create/add to the PATH variable (separated by colons)</li>
        </ul>
        <li>History:</li>
        <ul>
          <li><code>history</code> - list past commands</li>
          <li><code>!# or !88</code> - rerun 88th command in history</li>
          <li><code>!e</code> - rerun last command that starts with e</li>
          <li><code>Ctrl + R</code> - search command history</li>
        </ul>
        <li>Converting Case</li>
        <ul>
          <li><code>tr '[:lower:]' '[:upper:]'</code> - convert lowercase to uppercase</li>
          <li><code>tr '[:upper:]' '[:lower:]'</code> - convert uppercase to lowercase</li>
          <li><code>{'${variableName^^}'}</code> - convert variable value to uppercase</li>
          <li><code>{'${variableName^}'}</code> - convert first character of variable to uppercase</li>
          <li><code>{'${variableName,,}'}</code> - convert variable value to lowercase</li>
          <li><code>{'${variableName,}'}</code> - convert first character of variable to lowercase</li>
          <ul>
            <li>Command does not replace the value stored in the variable</li>
          </ul>
        </ul>
        <li>Hardware Management:</li>
        <ul>
          <li><code>uptime</code>: gives info about how busy the system is (number of users and load average)</li>
          <li><code>top</code>: gives detailed info about how busy the system is, including load average and memories usage</li>
            <ul>
              <li>Load average should be below number of CPU cores or else there is a queue in returning requests</li>
            </ul>
          <li><code>uname</code>: display system information</li>
          <li><code>lscpu</code>: display detailed info about the CPU architecture</li>
          <li><code>lspci</code>: display detailed info about the motherboard, PCI buses, and devices</li>
          <li><code>lsusb</code>: display detailed info about USB buses and devices</li>
          <li><code>lsmod</code>: display loaded kernel modules</li>
          <li><code>lsblk</code>: display information about disks and partitions</li>
        </ul>
        <li>Writing Scripts:</li>
        <ul>
          <li>Shebang: specifify the shell interpreter and what is used to run script</li>
          <ul>
            <li>Debug Tip: use <code>bash -x script.sh</code> - run the script with debugging enabled to see the command and output together</li>
            <li><code>#!/bin/bash</code> - example of a shebang for a Bash script</li>
            <li><code>chmod u+x script.sh</code> - make a script executable</li>
            <li><code>./script.sh</code> - run the script in a separate fork process</li>
            <li><code>source script.sh</code> - run the script in the current shell process</li>
            <li><code>$1</code> - first positional parameter passed to the script</li>
            <li><code>$?</code> - exit status of the last command executed; anything beside 0 means failure/warning</li>
            <li>Conditionals:</li>
            <ul>
              <li><code>test -z "$variable"</code> - check if a variable is empty</li>
              <li><code>test -z "$variable" && echo "Variable is empty"</code> - check if a variable is empty and print a message</li>
              <li><code>test -n "$variable"</code> - check if a variable is not empty</li>
              <li><code>test "$variable" = "value"</code> - check if a variable equals a value</li>
              <ul>
                <li>test can be replaced with brackets: <code>[ -z "$variable" ]</code></li>
              </ul>
              <li><code>{`if [ -z "$variable" ]; then 
  echo "Variable is empty"; 
fi`}</code> - if statement block to check if a variable is empty and print a message</li>
            </ul>
            <li>Loops:</li>
            <ul>
              <li><code>{`for i in {1..5}; do
  echo "Iteration $i"
done`}</code> - for loop example</li>
              <li><code>{`while [ condition ]; do
  # commands to execute
done`}</code> - while loop template</li>
            </ul>
            <li>Prompts:</li>
            <ul>
              <li><code>{`NAME="$1" # create a variable and assign it the value of the first positional parameter
  read -p "Enter your name: " NAME`
}</code> - prompt user for input and store in variable</li>
            </ul>
          </ul>
        </ul>
        <li>Administration:</li>
        <ul>
          <li><code>sudo command</code>: run a command with superuser privileges</li>
          <ul>
            <li><code>sudo -i</code>: start a root shell</li>
          </ul>
          <li><code>su username</code>: switch to another user account</li>
          <li><code>getent passwd</code>: display all local users</li>
          <li><code>getent group</code>: display all local groups</li>
          <li><code>newgrp groupname</code>: switch to a new group</li>
          <li><code>chgrp groupname file/directory</code>: change the group ownership of a file/directory</li>
          <li><code>sudo chown username:groupname file/directory</code>: change the owner and group of a file/directory</li>
          <li><code>sudo useradd -m username</code>: add a new user with a home directory in a private group</li>
          <li><code>sudo useradd -m -N username</code>: add a new user with a home directory in the default group</li>
          <li><code>sudo useradd -m -r username</code>: add a new system user with a home directory</li>
          <li><code>sudo usermod username</code>: modify a user account</li>
          <ul>
            <li><code>usermod username -a -G groupname</code>: add a user to a group</li>
            <li><code>useradd -d</code>: shows the default options for creating a user account, including the default shell and home directory location</li>
          </ul>
          <li><code>sudo groupadd groupname</code>: add a new group</li>
          <li><code>sudo groupmod groupname</code>: modify a group</li>
          <li><code>sudo groupdel groupname</code>: delete a group</li>
          <li><code>sudo gpasswd -a username groupname</code>: add a user to a group</li>
          <li><code>id</code>: display user identity information</li>
          <ul>
            <li><code>id -Gn</code>: display the name of the current user's primary group</li>
          </ul>
          <li><code>who</code> or <code>w</code>: display who is logged in</li>
          <li><code>lastlog</code>: display the last login of all users</li>
        </ul>
        <li>Permissions:</li>
          <ul>
          <li><code>ls -l file/directory</code>: display detailed info about a file including permissions</li>
          <ul>
            <li>Linux system will match the file permissions to the userID first, and if no match was found, then the groupID, and finally others</li>
            <li>Linux permissions are not cumulative so permission from one group does not affect the others</li>
            <li>Deleting a files has to do with the directory permissions and not the file permissions</li>
            <li>Symbolic Permissions</li>
            <ul>
              <li>r: read permission</li>
              <li>w: write permission</li>
              <li>x: execute permission</li>
            </ul>
            <li>Octal Permissions</li>
            <ul>
              <li>7: read + write + execute</li>
              <li>6: read + write</li>
              <li>5: read + execute</li>
              <li>4: read</li>
              <li>2: write</li>
              <li>1: execute</li>
            </ul>
          <li><code>chmod permissions file/directory</code>: change the permissions of a file or directory</li>
          <ul>
            <li><code>chmod u=r,g=rw,o=rwx file/directory</code>: change permissions symbolically for user, group, and others</li>
            <li><code>chmod u-w file/directory</code>: remove write permission for the user</li>
            <li><code>chmod u+w file/directory</code>: add write permission for the user</li>
            <li><code>chmod 755 file/directory</code>: change permissions using octal notation</li>
          </ul>
          </ul>
          </ul>
          <li>Networking:</li>
          <ul>
            <li><code>ip a</code>: display all network interfaces and their IP addresses</li>
            <ul>
               <li><code>ifconfig/ipconfig</code>:(deprecated) display all network interfaces and their IP addresses </li>
              <li>For ipv4 address 127.0.0.1/8 address, the 127 is the network while 0.0.0.1 is the host with a mask of 8</li>
              <li>For ipv4 address 192.168.0.21/24 address, the 192.168.0 is the network while 21 is the host with a mask of 24</li>
              <li>For ipv6 address 2001:db8:abcd:0012::0/64 address, the 2001:db8:abcd:0012 is the network while 0 is the host with a mask of 64</li>
            </ul>
             <li><code>arp -a</code>: list all systems on the local network, ie the ARP cache</li>
            <li><code>ping hostname</code>: send ICMP ECHO_REQUEST to network hoststo check connectivity</li>
            <ul>
              <li>Example: <code>ping google.com</code> or <code>ping 192.168.0.1</code></li>
            </ul>
            <li><code>traceroute/tracert hostname</code>: trace the path to a network host</li>
            <li><code>route</code>: display or modify the IP routing table</li>
            <li><code>getent hosts</code>: display IP address and hostname mappings in the local host file</li>
            <li><code>host hostname</code>: display IP address for a hostname</li>
            <li><code>dig hostname</code>: display DNS information for a hostname</li>
            <li><code>netstat</code>: display all active network connections on the device</li>
            <ul>
              <li><code>ss</code>: display socket & network statistics on Linux systems</li>
              <ul>
                <li><code>ss -t</code>: shows active TCP sockets</li>
                <li><code>ss -at</code>: shows all TCP sockets</li>
                <li><code>ss -atn</code>: shows all TCP sockets with numeric port numbers</li>
                <li><code>ss -atnp</code>: shows all TCP sockets with numeric port numbers and process information</li>
                <li><code>ss -u</code>: shows active UDP sockets</li>
              </ul>
              <li><code>nmap</code>: scan remote device for opened ports; network exploration tool and security scanner</li>
              <ul>
                <li><code>nmap -sT -sU localhost</code>: shows the open TCP and UDP ports on the local machine</li>
              </ul>
            </ul>
            <li><code>nc</code>: opens network connections for reading/writing data across network connections in raw text</li>
            <ul>
              <li>The command is only available on Mac and Linux systems. But apps like PuTTY/Telnet can be used instead on Windows systems</li>
              <li><code>telnet hostname portNumber</code> : opens a Telnet connection to a remote host through a specified port</li>
            </ul>
          </ul>
        <li>Firewall:</li>
        <ul>
          <li><code>ufw</code>: Uncomplicated Firewall, a user-friendly interface for managing firewall rules on Linux systems</li>
            <ul>
              <li><code>ufw enable</code></li>
              <li><code>ufw status</code>: will also list the current rules of the firewall; if no rules are listed then all inbound traffic will be blocked</li>
              <li><code>ufw allow portNumber/tcp</code>: allow incoming TCP traffic on a specific port</li>
               <li><code>sudo ufw allow from [hostname] to [remoteAddress/any] app [appname]</code> - allow traffic from a specific host to all the ports listed by the app profile</li>
              <li><code>ufw app list</code>: list available applications for firewall rules</li>
              <ul>
                <li><code>{`ufw app info {appname}`}</code>: display information about a specific application</li>
              </ul>
              <li><code>ufw delete 2</code>: delete the second rule on the list from <code>ufw status</code></li>
            </ul>
        </ul>
      </ul>
      
      <hr/>

      <h3 className="section-header" id="cmd">CMD Commands</h3>
      <SearchContainer placeholder="Search for commands..." searchSelector='tbody tr'>
        <table className="cmd-table">
          <caption>Common Terminal Commands (macOS/Linux vs Windows PowerShell)</caption>
          <thead>
            <tr>
              <th>Task</th>
              <th>macOS / Linux</th>
              <th>Windows (PowerShell)</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Show current directory</td>
              <td>pwd</td>
              <td>Get-Location (alias: pwd)</td>
              <td><code>pwd</code></td>
            </tr>
            <tr>
              <td>List files</td>
              <td>ls</td>
              <td>Get-ChildItem (alias: ls)</td>
              <td><code>ls -la</code></td>
            </tr>
            <tr>
              <td>Change directory</td>
              <td>cd</td>
              <td>Set-Location (alias: cd)</td>
              <td><code>cd projects</code></td>
            </tr>
            <tr>
              <td>Move up one directory</td>
              <td>cd ..</td>
              <td>Set-Location (alias: cd ..)</td>
              <td><code>cd .. projects</code></td>
            </tr>
            <tr>
              <td>Make directory</td>
              <td>mkdir</td>
              <td>New-Item -ItemType Directory (alias: mkdir)</td>
              <td><code>mkdir assets</code></td>
            </tr>
            <tr>
              <td>Remove empty directory</td>
              <td>rmdir</td>
              <td>Remove-Item -Force (alias: rmdir)</td>
              <td><code>rmdir old</code></td>
            </tr>
            <tr>
              <td>Remove directory (recursive)</td>
              <td>rm -r</td>
              <td>Remove-Item -Recurse</td>
              <td><code>rm -rf build</code></td>
            </tr>
            <tr>
              <td>Copy file</td>
              <td>cp</td>
              <td>Copy-Item (alias: cp)</td>
              <td><code>cp a.txt b.txt</code></td>
            </tr>
            <tr>
              <td>Move/Rename</td>
              <td>mv</td>
              <td>Move-Item (alias: mv, ren)</td>
              <td><code>mv app.js app.old.js</code></td>
            </tr>
            <tr>
              <td>Delete file</td>
              <td>rm</td>
              <td>Remove-Item (alias: rm, del)</td>
              <td><code>rm notes.tmp</code></td>
            </tr>
            <tr>
              <td>View file (print)</td>
              <td>cat</td>
              <td>Get-Content (alias: cat, type)</td>
              <td><code>cat README.md</code></td>
            </tr>
            <tr>
              <td>Paged view</td>
              <td>less / more</td>
              <td>more</td>
              <td><code>less big.log</code></td>
            </tr>
            <tr>
              <td>Search in files</td>
              <td>grep</td>
              <td>Select-String (similar to grep)</td>
              <td><code>grep -R "TODO" .</code></td>
            </tr>
            <tr>
              <td>Find files by name</td>
              <td>find</td>
              <td>Get-ChildItem -Recurse</td>
              <td><code>find . -name "*.js"</code></td>
            </tr>
            <tr>
              <td>Show running processes</td>
              <td>ps / top</td>
              <td>Get-Process</td>
              <td><code>ps aux</code></td>
            </tr>
            <tr>
              <td>Kill process</td>
              <td>kill / kill -9</td>
              <td>Stop-Process / taskkill.exe</td>
              <td><code>kill -9 12345</code></td>
            </tr>
            <tr>
              <td>Show username</td>
              <td>whoami</td>
              <td>whoami (or $env:USERNAME)</td>
              <td><code>whoami</code></td>
            </tr>
            <tr>
              <td>Environment variables</td>
              <td>printenv / export</td>
              <td>Get-ChildItem Env: / $env:VAR=</td>
              <td><code>printenv PATH</code></td>
            </tr>
            <tr>
              <td>Make empty file</td>
              <td>touch</td>
              <td>New-Item file.txt (or &gt; file.txt)</td>
              <td><code>touch .gitignore</code></td>
            </tr>
            <tr>
              <td>Download HTTP</td>
              <td>curl / wget</td>
              <td>Invoke-WebRequest (alias: curl, iwr)</td>
              <td><code>curl -O https://example.com/file.zip</code></td>
            </tr>
            <tr>
              <td>Archive (tar)</td>
              <td>tar</td>
              <td>tar (on recent Windows) / Compress-Archive</td>
              <td><code>tar -czf site.tgz dist/</code></td>
            </tr>
            <tr>
              <td>Disk usage</td>
              <td>du -sh</td>
              <td>Get-ChildItem | Measure-Object -Sum Length</td>
              <td><code>du -sh *</code></td>
            </tr>
            <tr>
              <td>Free disk space</td>
              <td>df -h</td>
              <td>Get-PSDrive</td>
              <td><code>df -h</code></td>
            </tr>
            <tr>
              <td>Network config</td>
              <td>ifconfig / ip</td>
              <td>ipconfig</td>
              <td><code>ipconfig</code></td>
            </tr>
            <tr>
              <td>Ping host</td>
              <td>ping</td>
              <td>ping</td>
              <td><code>ping example.com</code></td>
            </tr>
            <tr>
              <td>Change file mode</td>
              <td>chmod</td>
              <td>(No direct equivalent; use file properties/ACLs)</td>
              <td><code>chmod +x script.sh</code></td>
            </tr>
            <tr>
              <td>Change owner</td>
              <td>chown</td>
              <td>(Use icacls / Set-Acl)</td>
              <td><code>sudo chown user:group file</code></td>
            </tr>
            <tr>
              <td>Print text</td>
              <td>echo</td>
              <td>Write-Output / echo</td>
              <td><code>echo "Hello"</code></td>
            </tr>
            <tr>
              <td>Show manual/help</td>
              <td>man</td>
              <td>Get-Help</td>
              <td><code>man ls</code></td>
            </tr>
          </tbody>
        </table>
      </SearchContainer>
      <hr />


      {/* <!-- NPM COMMANDS --> */}
      <h3 className="section-header" id="npm">npm Commands</h3>
      <SearchContainer placeholder="Search for commands..." searchSelector='tbody tr'>
        <table className="npm-table">
          <thead>
            <tr>
              <th>Command</th>
              <th>Alias</th>
              <th>Purpose</th>
              <th>Example</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>npm init</code></td>
              <td>—</td>
              <td>Create a <code>package.json</code></td>
              <td><code>npm init -y</code></td>
              <td><code>-y</code> skips prompts with defaults.</td>
            </tr>
            <tr>
              <td><code>npm --version</code></td>
              <td>npm -v</td>
              <td>Check installed version of npm</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><code>npm install &lt;pkg&gt;</code></td>
              <td><code>npm i</code></td>
              <td>Install a dependency</td>
              <td><code>npm i react</code></td>
              <td>Saved to <code>dependencies</code> by default.</td>
            </tr>
            <tr>
              <td><code>npm install --save-dev &lt;pkg&gt;</code></td>
              <td><code>npm i -D</code></td>
              <td>Install a dev dependency</td>
              <td><code>npm i -D typescript</code></td>
              <td>Saves under <code>devDependencies</code>.</td>
            </tr>
            <tr>
              <td><code>npm install</code></td>
              <td><code>npm i</code></td>
              <td>Install from <code>package.json</code></td>
              <td><code>npm install</code></td>
              <td>Reads versions from <code>package.json</code>/<code>package-lock.json</code>.</td>
            </tr>
            <tr>
              <td><code>npm uninstall &lt;pkg&gt;</code></td>
              <td><code>npm remove</code>, <code>npm rm</code></td>
              <td>Remove a dependency</td>
              <td><code>npm uninstall lodash</code></td>
              <td>Updates <code>package.json</code> and lockfile.</td>
            </tr>
            <tr>
              <td><code>npm update</code></td>
              <td><code>npm up</code></td>
              <td>Update deps within semver ranges</td>
              <td><code>npm up</code></td>
              <td>Uses ranges in <code>package.json</code>.</td>
            </tr>
            <tr>
              <td><code>npm outdated</code></td>
              <td>—</td>
              <td>Show available updates</td>
              <td><code>npm outdated</code></td>
              <td>Compares current, wanted, latest.</td>
            </tr>
            <tr>
              <td><code>npm run &lt;script&gt;</code></td>
              <td>—</td>
              <td>Run a script from <code>package.json</code></td>
              <td><code>npm run build</code></td>
              <td>Scripts are under <code>"scripts"</code>.</td>
            </tr>
            <tr>
              <td><code>npm start</code></td>
              <td>—</td>
              <td>Run <code>scripts.start</code></td>
              <td><code>npm start</code></td>
              <td>Shortcut for <code>npm run start</code>.</td>
            </tr>
            <tr>
              <td><code>npm test</code></td>
              <td><code>npm t</code></td>
              <td>Run <code>scripts.test</code></td>
              <td><code>npm test</code></td>
              <td>Shortcut for <code>npm run test</code>.</td>
            </tr>
            <tr>
              <td><code>npm exec &lt;bin&gt;</code></td>
              <td><code>npm x</code></td>
              <td>Run a package binary</td>
              <td><code>npm exec eslint .</code></td>
              <td>Uses local <code>node_modules/.bin</code> if present.</td>
            </tr>
            <tr>
              <td><code>npx &lt;bin&gt;</code></td>
              <td>—</td>
              <td>Execute a package (no install)</td>
              <td><code>npx create-vite@latest</code></td>
              <td>Convenience tool bundled with npm.</td>
            </tr>
            <tr>
              <td><code>npm list</code></td>
              <td><code>npm ls</code></td>
              <td>List installed packages</td>
              <td><code>npm ls --depth=0</code></td>
              <td>Add <code>--depth=0</code> for top-level only.</td>
            </tr>
            <tr>
              <td><code>npm view &lt;pkg&gt;</code></td>
              <td><code>npm v</code>, <code>npm info</code></td>
              <td>Show package metadata</td>
              <td><code>npm view react version</code></td>
              <td>Great for checking latest versions.</td>
            </tr>
            <tr>
              <td><code>npm audit</code></td>
              <td>—</td>
              <td>Scan for vulnerabilities</td>
              <td><code>npm audit</code></td>
              <td>Use <code>npm audit fix</code> to apply fixes.</td>
            </tr>
            <tr>
              <td><code>npm cache clean --force</code></td>
              <td>—</td>
              <td>Clear npm cache</td>
              <td><code>npm cache clean --force</code></td>
              <td><code>--force</code> required for cleaning.</td>
            </tr>
            <tr>
              <td><code>npm ci</code></td>
              <td>—</td>
              <td>Clean install from lockfile</td>
              <td><code>npm ci</code></td>
              <td>Faster, reproducible installs (CI).</td>
            </tr>
            <tr>
              <td><code>npm link</code></td>
              <td>—</td>
              <td>Symlink a package for local dev</td>
              <td><code>npm link</code></td>
              <td>Use in package & consumer repos.</td>
            </tr>
            <tr>
              <td><code>npm pack</code></td>
              <td>—</td>
              <td>Create a tarball of the package</td>
              <td><code>npm pack</code></td>
              <td>Useful to inspect what will publish.</td>
            </tr>
            <tr>
              <td><code>npm publish</code></td>
              <td>—</td>
              <td>Publish to the registry</td>
              <td><code>npm publish --access public</code></td>
              <td>Requires login & proper settings.</td>
            </tr>
            <tr>
              <td><code>npm login</code> / <code>logout</code></td>
              <td>—</td>
              <td>Authenticate with the registry</td>
              <td><code>npm login</code></td>
              <td>Stores credentials for publish, etc.</td>
            </tr>
            <tr>
              <td><code>npm version &lt;type&gt;</code></td>
              <td>—</td>
              <td>Bump version & tag</td>
              <td><code>npm version patch</code></td>
              <td><code>patch</code> | <code>minor</code> | <code>major</code> or exact.</td>
            </tr>
            <tr>
              <td><code>npm prune</code></td>
              <td>—</td>
              <td>Remove extraneous packages</td>
              <td><code>npm prune</code></td>
              <td>Keeps only what’s in <code>package.json</code>.</td>
            </tr>
            <tr>
              <td><code>npm dedupe</code></td>
              <td><code>npm ddp</code></td>
              <td>Reduce duplicate dependencies</td>
              <td><code>npm dedupe</code></td>
              <td>Flattens dependency tree where possible.</td>
            </tr>
            <tr>
              <td><code>npm config get/set</code></td>
              <td>—</td>
              <td>Manage npm config</td>
              <td><code>npm config set registry &lt;url&gt;</code></td>
              <td>Use <code>--global</code> for global config.</td>
            </tr>
            <tr>
              <td><code>npm doctor</code></td>
              <td>—</td>
              <td>Diagnose common issues</td>
              <td><code>npm doctor</code></td>
              <td>Checks environment & configuration.</td>
            </tr>
            <tr>
              <td><code>npm fund</code></td>
              <td>—</td>
              <td>Show funding info</td>
              <td><code>npm fund</code></td>
              <td>Lists packages seeking funding.</td>
            </tr>
            <tr>
              <td><code>npm explain &lt;pkg&gt;</code></td>
              <td>—</td>
              <td>Explain why a pkg is installed</td>
              <td><code>npm explain ansi-regex</code></td>
              <td>Shows dependency path(s).</td>
            </tr>
          </tbody>
        </table>
      </SearchContainer>
      <hr />
    </>
  );
}