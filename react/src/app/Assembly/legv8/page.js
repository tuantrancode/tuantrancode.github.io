import React from 'react';

export const metadata = {
  title: 'LEGv8 Assembly Language',
  description: 'Notes on the LEGv8 assembly language.',
};

export default function LEGv8Instructions() {
  return (
    <>
      {/* Architecture Overview */}
      <section>
        <h3 className='section-header' id='architectures'>
          Architectures Overview
        </h3>

        <h4 className='sub-section-header'>LEGv8 / ARMv8</h4>
        <ul>
          <li>LEGv8 is the educational subset of ARMv8</li>
          <li>Power-efficient</li>
          <li>RISC - reduced instruction set computer</li>
        </ul>

        <h4 className='sub-section-header'>x86 (Intel/AMD)</h4>
        <ul>
          <li>Higher backward compatibility</li>
          <li>CISC - complex instruction set computer</li>
        </ul>

        <h4 className='sub-section-header'>IBM</h4>
        <ul>
          <li>For high-end servers and supercomputers</li>
          <li>Optimized for throughput and parallelism</li>
          <li>RISC - reduced instruction set computer</li>
        </ul>
        <hr />
      </section>

      {/* LEGv8 Instructions */}
      <section>
        <h3 className='section-header' id='legv8-instructions'>
          LEGv8 Instructions
        </h3>

        <ul>
            <li>Green : common</li>
            <li>Yellow : useful</li>
        </ul>
        <div style={{ display: 'block', margin: 'auto'}}>
            <a href="/assets/images/LEGv8 instructions.png" target="_blank" rel="noopener noreferrer">
            <img style={{display: 'block', width: '100%'}} src="/assets/images/LEGv8 instructions.png" alt="LEGv8 Instructions"/>
            </a>
        </div>
      </section>
    </>
  );
}
