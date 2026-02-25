import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Security Tools',
  description: 'Notes on tools used security and penetration testing',
};

export default function Security() {
  return (
    <>
      {/* NETWORK SCANNERS */}
      <section>
         <h3 className="section-header" id="network-scanners">Network Scanners</h3>
        <ul>
            <li>Nmap / Zenmap (GUI): scan for open ports and other hosts/devices on network</li>
            <li>hping: craft custom TCP/IP packets and send them to target host; can be used for firewall testing, DoS attacks, and network testing</li>
        </ul>
        <hr/>
      </section>

       {/* WEB SCANNERS */}
      <section>
         <h3 className="section-header" id="web-scanners">Web Scanners / Web App Analysis Tools</h3>
        <ul>
            <li>Nikto / Wikto (GUI): scan web server for vulnerabilities</li>
            <li>Burp Suite: a web application security testing tool</li>
            <li>OWASP ZAP: a web application security scanner</li>
            <ul>
                <li>Also has a sample vulnernable project</li>
            </ul>
        </ul>
        <hr/>
      </section>

        {/* GENERAL SECURITY TOOLS */}
       <section>
         <h3 className="section-header" id="general-security-tools">General Security Tools</h3>
        <ul>
            <li>Nessus: a vulnerability scanner for servers, network, and devices security testing</li>
            <li>Fuzzers: tool to test input validation by sending random inputs</li>
            <li>Binscope: analyses binary files and source code for security issues</li>
        </ul>
        <hr/>
      </section>

      {/* EXPLOIT FRAMEWORK */}
       <section>
         <h3 className="section-header" id="exploit-framework">Exploit Framework</h3>
        <ul>
            <li>Metasploit: a penetration testing framework that can be used to exploit vulnerabilities</li>
            <li>Core Impact: a commercial penetration testing framework</li>
            <li>Immunity CANVAS: a framework for developing and testing exploits</li>
        </ul>
        <hr/>
      </section>

       {/* PACKET SNIFFERS */}
       <section>
         <h3 className="section-header" id="packet-sniffers">Packet Sniffers</h3>
        <ul>
            <li>Wireshark (GUI): a network protocol analyzer that captures and displays network packets</li>
            <li>tcpdump: a command-line packet analyzer</li>
        </ul>
        <hr/>
      </section>

       {/* LAWS */}
       <section>
         <h3 className="section-header" id="laws">Laws</h3>
        <ul>
            <li><b><u>FI</u></b>SHA (Federal Information Security Management Act): protects <u>federal infomation</u> and assets</li>
            <li>F<b><u>E</u></b>RPA (Family Educational Rights and Privacy Act): protects student <u>education</u> records</li>
            <li><b><u>HI</u></b>PPA (Health Insurance Portability and Accountability Act): protects confidentiality & integrity of personal <u>healthcare information</u></li>
            <li>HI<b><u>TECH</u></b> (Health Information Technology for Economic and Clinical Health Act): <u>technology</u>; promote and expand adoption of health info, especially the use of electronic health records</li>
            <li>P<b><u>C</u></b>I DSS (Payment Card Industry Data Security Standard): a set of security standards for organizations that handle <u>credit cards</u> data</li>
            <li><b><u>CO</u></b>PPA (Children’s Online Privacy Protection Act): protects <u>children's online</u> privacy that are under 13 years old</li>
            <li>SOX (Sarbanes-Oxley Act): a law that sets standards for financial reporting and internal controls in public companies</li>
            <li>GLBA (Gramm-Leach-Bliley Act): protects financial information of customers of financial institutions</li>
        </ul>
      </section>
    </>
  );
}
