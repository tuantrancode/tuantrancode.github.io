import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import Link from 'next/link';
import { Code } from '@mui/icons-material';

export const metadata = {
  title: 'Ansible',
  description: 'Notes on configuration management tool, Ansible',
};

export default function Ansible() {
  return (
    <>
      {/* INSTALLING ANSIBLE */}
      <section>
         <h3 className="section-header" id="installing-ansible">Installing Ansible</h3>
         <p><u><b>Installing</b></u></p>
         <p>Ansible is a configuration management (CM) tool to repicate and update configurations across servers.</p>
        <ul>
           <li>Install WSL in Windows to use Linux:</li>
           <ul>
            <li>List available versions:  <code>wsl --list --online</code></li>
            <li>Install specific distro: <code>wsl --install Ubuntu-24.04</code></li>
            <li>Restart if prompted and complete first time setup to add user</li>
            <li>Check version: wsl -l -v</li>
            <li>Set default version: <code>wsl --set-default-version 2</code></li>
           </ul>
           <li>Install Ansible through Linux shell</li>
           <ul>
            <li>Install Ansible PPA:</li>
            <ul>
                <li><code>sudo apt install -y software-properties-common</code></li>
                <li><code>sudo add-apt-repository --yes --update ppa:ansible/ansible</code></li>
            </ul>
            <li>Install Ansible: <code>sudo apt install -y ansible</code></li>
            <li>Check version: <code>ansible --version</code></li>
           </ul>
        </ul>
        <p><u><b>Useful</b></u></p>
        <ul>
            <li>To access files in Windows partition while running WSL Linux shell, use <code>mtn/</code> to access any file drives</li>
            <ul>
                <li><code>C:\Users\Tran\Desktop</code> translate to <code>/mnt/c/Users/Tran/Desktop</code> in Linux shell</li>
            </ul>
            <li>VS Code has extensions that are useful for ansible files</li>
            <ul>
                <li>Ansible: (<code>redhat.ansible</code>)</li>
                <ul>
                    <li>Has autocomplete for modules, syntax validation, and hover a module to see its documentation</li>
                </ul>
                <li>YAML: (<code>redhat.vscode-yaml</code>)</li>
                <ul>
                    <li>Has YAML validation, autocomplete, and built-in Kubernetes syntax support</li>
                </ul>
            </ul>
        </ul>
        <hr/>
      </section>

      {/* SETUP ANSIBLE */}
      <section>
         <h3 className="section-header" id="setup-ansible">Setup and Running Ansible</h3>
         <p><u><b>Setting Up Ansible</b></u></p>
         <p>Ansible, at the bare minimum, requires a <code>inventory</code> file and a <code>playbook.yml</code> file</p>
         <ul>
            <li><code>inventory</code>: holds the group of servers IP and SSH info</li>
            <CodeBlock>{`
[solr-nodes]
{host1} ansible_user={username} ansible_ssh_private_key_file={private key}
{host2} ansible_user={username} ansible_ssh_private_key_file={private key}

[solr-zk]
{host1} ansible_user={username} ansible_ssh_private_key_file={private key}
=================================================
// Alternative

[solr-nodes]
{host1}
{host2}

[solr-zk]
zk1 ansible_host=10.0.0.5
zk2 ansible_host=10.0.0.6

[all:vars]
ansible_user={username} 
ansible_ssh_private_key_file={private key}
            `}</CodeBlock>
            <ul>
                <li><code>[solr-nodes]</code>: the name of the group</li>
                <li><code>ansible_user</code>: SSH username</li>
                <li><code>ansible_ssh_private_key_file</code>: SSH key</li>
            </ul>
            <br/>
            <li><code>playbook.yml</code>: holds the tasks that can be run on any server in <code>inventory</code></li>
            <CodeBlock>{`
---                    # Indicate start of YAML file
- hosts: solr-nodes    # Group name the tasks are for
  become: true         # Use sudo

  tasks:                         # list of actions
    - name: Install nginx        # description 
      apt:                       # ansible module
        name: nginx
        state: present
        update_cache: yes
            `}</CodeBlock>
         </ul>
        <p><u><b>Running Ansible</b></u></p>
         <p>To run the playbook:</p>
         <ul>
            <li><code>ansible-playbook -i inventory playbook.yml</code></li>
            <li><code>ansible-playbook -i inventory playbook.yml --check --diff</code>: dry run that show the exact file differences</li>
            <li><code>ansible-playbook playbook.yml --ask-vault-pass</code>: run playbook with value secrets inserted</li>
            <li><code>ansible-playbook -i inventory playbook.yml -u [username] --private-key [private key]</code>: include SSH info if not in inventory</li>
            <li><code>ansible-playbook -i inventory playbook.yml -u [username] --private-key [private key] -K</code>: ask for sudo password</li>
            <br/>
            <li><code>ansible-playbook -i inventory playbook.yml --limit zk1,zk2</code>: limit tasks to zk1 and zk2 servers label in inventory</li>
            <li><code>ansible-playbook -i inventory playbook.yml --limit 10.0.0.5</code>: limit task to specific IP</li>
            <br/>
            <li><code>ansible-playbook -i inventory playbook.yml -u [username] --private-key [private key] -K --ask-vault-pass</code>: main overall</li>
         </ul>
        <hr/>
      </section>

       {/* ANSIBLE DIRECTORY STRUCTURE */}
      <section>
         <h3 className="section-header" id="directory-structure">Directory Structure</h3>
         <p>In an ansible folder, the roles/ directory is used to organize reusable server configuration</p>
         <ul>
            <li><code>tasks/</code>: the main playbook</li>
            <li><code>files/</code>: static files copied to servers</li>
            <li><code>templates/</code>: Jinja2 templates (dynamic configs)</li>
            <li><code>handlers/</code>: Actions triggered when something changes (restart nginx etc.)</li>
            <li><code>vars/</code>: Variables specific to the role</li>
         </ul>
         <CodeBlock>{`
ansible/
├── inventory
├── playbook.yml
└── roles/
    ├── nginx/
    │   ├── tasks/
    │   │   └── main.yml
    │   ├── files/
    │   │   └── nginx.conf
    │   ├── templates/
    │   │   └── nginx.conf.j2
    │   ├── handlers/
    │   │   └── main.yml
    │   └── vars/
    │       └── main.yml
    │
    └── solr/
        ├── tasks/
        │   └── main.yml
        ├── files/
        │   └── solr.xml
        └── templates/         
         `}</CodeBlock>
         <br/>
         <p><b><u>Using roles in playbook</u></b></p>
         <CodeBlock>{`
---
- hosts: solr-nodes
  become: true

  roles:
    - nginx
    - solr         
============================================================================
Ansible automatically loads:
    roles/nginx/tasks/main.yml
    roles/solr/tasks/main.yml
         `}</CodeBlock>
        <hr/>
      </section>

      {/* TASKS DIRECTORY */}
      <section>
         <h3 className="section-header" id="tasks-directory">Tasks Directory</h3>
         <p>The <code>tasks/</code> folder has a <code>main.yml</code> file, containing a list of tasks that get inserted into the playbook</p>
         <CodeBlock>{`
# tasks/main.yml
---
- name: Install nginx
  apt:
    name: nginx
    state: present
    update_cache: yes

- name: Enable nginx
  service:
    name: nginx
    state: started
    enabled: true         
         `}</CodeBlock>
       
        <hr/>
      </section>

      {/* FILES DIRECTORY */}
      <section>
         <h3 className="section-header" id="files-directory">Files Directory</h3>
         <p>The <code>files/</code> is for static files you want to copy exactly as-is to the remote server</p>
         <ul>
            <li>The <code>copy</code> module replace the file at the destination if it exists</li>
            <li>Numeric(Octal) Mode for File Permission:</li>
            <ul>
                <li><code>7</code>: rwx</li>
                <li><code>6</code>: rw-</li>
                <li><code>5</code>: r-x</li>
                <li><code>4</code>: r--</li>
                <li><code>3</code>: -wx</li>
                <li><code>2</code>: -w-</li>
                <li><code>1</code>: --x</li>
                <li><code>0</code>: ---</li>
            </ul>
         </ul>
         <CodeBlock>{`
roles/
└── nginx/
    ├── tasks/
    │   └── main.yml
    ├── files/
    │   ├── mysite.conf
    │   └── ssl/
    │       └── example.crt     
============================================================================
# Copy single file
- name: Copy SSL key
  copy:
    src: ssl/example.key
    dest: /etc/ssl/private/example.key
    owner: root
    group: root
    mode: '0600'
============================================================================
# Copy multiple files
- name: Copy multiple static files
  copy:
    src: "{{ item.src }}"
    dest: "{{ item.dest }}"
    owner: root
    group: root
    mode: "{{ item.mode }}"
  loop:
    - { src: "mysite.conf", dest: "/etc/nginx/sites-available/mysite.conf", mode: "0644" }
    - { src: "ssl/example.crt", dest: "/etc/ssl/certs/example.crt", mode: "0644" }
    - { src: "ssl/example.key", dest: "/etc/ssl/private/example.key", mode: "0600" }
         `}</CodeBlock>
        <hr/>
      </section>

      {/* TEMPLATES DIRECTORY */}
      <section>
         <h3 className="section-header" id="templates-directory">Templates Directory</h3>
         <p>The <code>templates/</code> is used for dynamic configuration files that need variable substitution or logic. It uses Jinja2, <code>.j2</code>, syntax.</p>
         <ul>
            <li>Jinja2 also supports conditionals in the templates</li>
            <li><code>template</code> module is the same as <code>copy</code> module except used for <code>.j2</code> file</li>
            <li>Facts: host-specific variables that Ansible automatically knows and replace</li>
            <ul>
                <li><code>ansible_host</code>: IP/hostname Ansible connects to (10.0.0.5)</li>
                <li><code>inventory_hostname</code>: The name used in the inventory (zk1)</li>
                <li><code>ansible_user</code>: SSH user connecting</li>
                <li><code>ansible_port</code>: SSH port</li>
                <li><code>ansible_fqdn</code>: Fully qualified domain name</li>
                <li><code>ansible_hostname</code>: Hostname</li>
                <li><code>ansible_default_ipv4.address</code>: Primary IPv4 address</li>
            </ul>
         </ul>
         <CodeBlock>{`
roles/
└── nginx/
    ├── tasks/
    │   └── main.yml
    ├── templates/
    │   └── nginx.conf.j2
    └── handlers/
        └── main.yml
============================================================================
# nginx.conf.j2
server {
    listen 80;
    server_name {{ server_name }};          # {{server_name}} will be replaced

    {% if enable_ssl %}                     # start if
    listen 443 ssl;                         |
    ssl_certificate {{ ssl_cert }};         |
    ssl_certificate_key {{ ssl_key }};      |
    {% endif %}                             # end if

    root {{ document_root }};
}  
============================================================================
# playbook.yml
---
- hosts: webservers
  become: true
  
  vars:
    server_name: www.example.com            # variable replacement
    document_root: /var/www/html
    enable_ssl: true                        # conditional variable
    ssl_cert: /etc/ssl/certs/example.crt
    ssl_key: /etc/ssl/private/example.key      
 
  roles:
    - nginx
============================================================================
# nginx/tasks/main.yml
---
- name: Render nginx config from template
  template:                          # How to copy templates to dest
    src: nginx.conf.j2
    dest: /etc/nginx/sites-available/mysite.conf
    owner: root
    group: root
    mode: '0644'
  notify: restart nginx
         `}</CodeBlock>
        <hr/>
      </section>

       {/* VARS DIRECTORY */}
      <section>
         <h3 className="section-header" id="vars-directory">Vars Directory</h3>
         <p>The <code>main.yml</code> file whole the variables that can be applied to the whole role</p>
         <ul>
            <li>Good for variables that rarely change</li>
         </ul>
         <CodeBlock>{`
# vars/main.yml
---
nginx_package: nginx
nginx_port: 80
document_root: /var/www/html
ssl_cert: /etc/ssl/certs/example.crt
ssl_key: /etc/ssl/private/example.key           
         `}</CodeBlock>
       
        <hr/>
      </section>

      {/* HANDLERS DIRECTORY */}
      <section>
         <h3 className="section-header" id="handlers-directory">Handlers Directory</h3>
         <p>The <code>handlers/</code> directory in Ansible roles is used for actions that should run only when something changes</p>
         <ul>
            <li>Commonly used to <code>restart services | reload service | restart daemons after config changes</code></li>
            <li>Handlers are run AFTER all tasks in the playbook finish so even if a handler is triggered multiple times, it'll only run once</li>
         </ul>
         <CodeBlock>{`
# handlers/main.yml
---
- name: restart nginx
  service:
    name: nginx
    state: restarted
============================================================================     
# nginx/tasks/main.yml
---
- name: Install nginx               # handler alias must match value of notify parameter
  apt:
    name: nginx
    state: present
    
- name: Upload nginx config
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf
  notify: restart nginx             # if nginx.conf was changed then handler "restart nginx" will run

- name: Upload site config
  template:
    src: site.conf.j2
    dest: /etc/nginx/sites-enabled/site.conf
  notify: restart nginx             # if site.conf was changed then handler "restart nginx" will run
         `}</CodeBlock>       
        <hr/>
      </section>

      {/* MODULES */}
      <section>
         <h3 className="section-header" id="modules">Modules</h3>
         <p>Ansible modules are standalone scripts that perform the tasks</p>
         <ul>
            <li>Index of Modules: <a href="https://docs.ansible.com/projects/ansible/latest/collections/index_module.html">link</a></li>
            <li><code>state</code> parameter: tells Ansible the desired end condtion of a resource</li>
            <li><code>loop</code>: keyword used to repeat a task multiple times while replacing <code>{`"{{ item }}"`}</code> each time</li>
            <ul>
                <li>Can also be used to loop over a range</li>
            </ul>
            <CodeBlock>{`
- name: Upload config files
  copy:
    src: "{{ item.src }}"
    dest: "{{ item.dest }}"
  loop:
    - { src: "nginx.conf", dest: "/etc/nginx/nginx.conf" }
    - { src: "site.conf", dest: "/etc/nginx/sites-enabled/site.conf" }
         `}</CodeBlock>
            <li><code>become_user: root</code>: set the user per task</li>
            <ul>
                <li><code>become: yes</code>: required for it to work</li>
            </ul>
            <li><code>remote_user: root</code>: set the user per playbook</li>
         </ul>
         <hr/>

        <p><b><u>apt</u></b>: install/remove/update packages</p>
        <ul>
            <li><code>state: present</code>: ensure package installed or file is there</li>
            <li><code>state: absent</code>: ensure package or file is removed</li>
            <li><code>state: lastest</code>: upgrade package or file to newest version</li>
            <li><code>state: reinstalled</code>: force reinstall</li>
        </ul>      
         <CodeBlock>{`
- name: Install packages
  apt:
    name:
      - nginx
      - openjdk-17-jdk
      - curl
    state: present         
         `}</CodeBlock>
         <hr/>

          <p><b><u>service</u></b>: manage services</p>
        <ul>
            <li><code>state: started</code>: service is running</li>
            <li><code>state: stopped</code>: service is stopped</li>
            <li><code>state: restarted</code>: restart service</li>
            <li><code>state: reloaded</code>: reload config</li>
            <li><code>enabled: true</code>: enable service at boot</li>
            <li><code>disabled: true</code>: disable service at boot</li>
        </ul>      
         <CodeBlock>{`
- name: Ensure nginx is running
  service:
    name: nginx
    state: started
    enabled: true       
         `}</CodeBlock>
         <hr/>

         <p><b><u>copy</u></b>: upload static files</p>
        <ul>
            <li><code>state: file</code>: creates or updates the file</li>
            <li><code>state: absent</code>: remove the file</li>
            <li><code>state: directory</code>: creates a directory instead</li>
        </ul>      
         <CodeBlock>{`
- name: Upload config file
  copy:
    src: nginx.conf
    dest: /etc/nginx/nginx.conf
    owner: root
    group: root
    mode: "0644"     
         `}</CodeBlock>
         <hr/>

          <p><b><u>template</u></b>: upload dynamic config</p>
        <ul>
            <li><code>state: file</code>: creates or updates the file</li>
            <li><code>state: absent</code>: remove the file</li>
        </ul>      
         <CodeBlock>{`
- name: Upload nginx config template
  template:
    src: nginx.conf.j2
    dest: /etc/nginx/nginx.conf 
         `}</CodeBlock>
         <hr/>

         <p><b><u>file</u></b>: manage files and directories</p>
        <ul>
            <li><code>state: directory</code>: creates directory</li>
            <li><code>state: file</code>: creates empty file</li>
            <li><code>state: touch</code>: Updates file timestamp or creates file if missing</li>
            <li><code>state: absent</code>: remove file or directory</li>
            <li><code>state: link</code>: create a symbolic link</li>
            <li><code>state: hard</code>: create a hard link</li>
        </ul>      
         <CodeBlock>{`
- name: Create Solr directory
  file:
    path: /opt/solr
    state: directory
    owner: solr
    group: solr
    mode: "0755"
         `}</CodeBlock>
         <hr/>

        <p><b><u>get_url</u></b>: download files</p>
        <ul>
            <li><code>state: file</code>: Ensure file exists; download if missing or changed</li>
            <li><code>state: absent</code>: Remove the file</li>
        </ul>      
         <CodeBlock>{`
- name: Download Solr archive
  get_url:
    url: https://archive.apache.org/dist/solr/9.5.0/solr-9.5.0.tgz
    dest: /tmp/solr.tgz
         `}</CodeBlock>
         <hr/>

        <p><b><u>unarchive</u></b>: extract <code>.tar.gz</code> or <code>/zip</code></p>
        <ul>
            <li><code>state: present</code>: Ensure archive is extracted</li>
            <li><code>state: absent</code>: Remove extracted files</li>
        </ul>      
         <CodeBlock>{`
- name: Extract Solr
  unarchive:
    src: /tmp/solr.tgz
    dest: /opt/
    remote_src: yes
         `}</CodeBlock>
         <hr/>

         <p><b><u>user</u></b>: manage users</p>
        <ul>
            <li><code>state: present</code>: Create user if missing</li>
            <li><code>state: absent</code>: Remove user</li>
            <li><code>state: locked</code>: Lock user login</li>
            <li><code>state: unlocked</code>: Unlock user login</li>
            <li><code>system: yes</code>: creates system user</li>
            <li><code>create_home: yes</code>: creates normal user</li>
            <li><code>password: {`"{{ 'vaultPassword' | password_hash('sha512') }}"`}</code></li>
            <ul>
                <li>Use ansible-value instead of hardcoding password into the password field</li>
                <li>Setting up ansible-vault</li>
                <ul>
                    <li><code>ansible-vault create vault.yml</code>: create the value file and open a text editor</li>
                    <li>Inside <code>vault.yml</code>, add <code>userPassword: "MyVerySecurePassword123!"</code></li>
                    <ul>
                      <li><code>vault.yml</code> is encrypted on disk after</li>
                    </ul>
                    <li>Run playbook as <code>ansible-playbook playbook.yml --ask-vault-pass</code></li>
                    <li><code>ansible-vault view vault.yml</code>: check the vault</li>
                </ul>
            </ul>
        </ul>      
         <CodeBlock>{`
- name: Create user securely
  user:
    name: username
    shell: /bin/bash
    state: present
    create_home: yes
    password: "{{ userPassword | password_hash('sha512') }}"
         `}</CodeBlock>
         <hr/>

          <p><b><u>group</u></b>: manage groups</p>
        <ul>
            <li><code>state: present</code>: Create user if missing</li>
            <li><code>state: absent</code>: Remove user</li>
        </ul>      
         <CodeBlock>{`
- name: Create solr group
  group:
    name: solr
         `}</CodeBlock>
         <hr/>

         <p><b><u>lineinfile</u></b>: modify single line in a file</p>
        <ul>
            <li><code>state: present</code>: Ensure line exists (insert if missing)</li>
            <li><code>state: absent</code>: Ensure line is removed</li>
            <li><code>insertafter: EOF</code>: ensures line is appended at the end</li>
        </ul>      
         <CodeBlock>{`
- name: Disable root SSH login
  lineinfile:
    path: /etc/ssh/sshd_config
    regexp: '^PermitRootLogin'
    line: 'PermitRootLogin no'
         `}</CodeBlock>
         <hr/>

        <p><b><u>ufw</u></b>: firewall rules</p>
        <ul>
            <li><code>state: enabled</code>: Enable firewall</li>
            <li><code>state: disabled</code>: Disable firewall</li>
            <li><code>state: reloaded</code>: Reload rules</li>
            <li><code>state: reset</code>: Reset firewall to default</li>
        </ul>      
         <CodeBlock>{`
- name: Allow SSH
  ufw:
    rule: allow
    port: 22
         `}</CodeBlock>
         <hr/>

         <p><b><u>command</u></b>: run commands</p>    
         <CodeBlock>{`
- name: Check solr version
  command: solr --version
         `}</CodeBlock>
         <hr/>

        <p><b><u>shell</u></b>: run shell commands</p>    
         <CodeBlock>{`
- name: Run install script
  shell: |
    cd /tmp
    bash install_solr.sh
         `}</CodeBlock>
      </section>
    </>
  )
}