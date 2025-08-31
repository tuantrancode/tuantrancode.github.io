import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
    title: "Interface vs Inheritance",
    description: "Comparing when to use interface vs inheritance",
};

export default function InterfaceInheritanceComparison() {

    return (
        <>
            {/* INTERFACE */}
            <section>
                <h3 className="section-header" id="interface">Interface</h3>
                <ul>
                    <li>Define a "can-do" relationship - classes implement abilities</li>
                    <li>No code sharing, only gives methods and properties name</li>
                    <li>One class can implements multiple interface</li>
                    <li>Class follows a structure</li>
                    <li>Best for when unrelated classes need to share the same API</li>
                    <ul>
                        <li>Like when integrating third party libraries; use interface so even if the library is changed/updated the purpose stays the same, but implemented in different ways</li>
                    </ul>
                    <li>Interface is a set of rules that the implementing classes share</li>
                    <ul>
                        <li>The classes <u>do the same thing, but in different ways</u></li>
                    </ul>
                </ul>

                <hr />
            </section>

            {/* INHERITANCE */}
            <section>
                <h3 className="section-header" id='inheritance'>Inheritance</h3>
                <ul>
                    <li>Define a "is-a" relation - subclasses extend a base class</li>
                    <li><strong>Allow code sharing</strong> where subclasses inherit methods, variables and constructors</li>
                    <li>Can only inherit from one parent (superclass)</li>
                    <li>Subclasses depends on base implementation</li>
                    <li>Best for when classes share common logic and state</li>
                    <li>Inheritance is a blueprint that all subclasses share</li>
                </ul>

                <hr />
            </section>


            {/* JAVA SAMPLE */}
            <section>
                <h3 className="section-header" id='javaExample'>Java Example</h3>
                <p>Example for coding different ways to pay</p>
                <CodeBlock language='jsx'>{`
// All payments need to be processed
interface Payment {
  processPayment(amount: number): void;
}

// Base class for reusable logic
abstract class PaymentProvider <mark>implements Payment</mark> {
  constructor(protected amount: number) {}

  validateAmount() {
    if (this.amount <= 0) throw new Error("Invalid amount");
  }

  abstract processPayment(): void;
}
---------------------------------------------------------
// Stripe reuses common logic
class StripePayment extends PaymentProvider {
  processPayment() {
    this.validateAmount();
    console.log(\`Stripe processed $\{this.amount}\`);
  }
}

// ApplePay skips base class but still respects interface
class ApplePayPayment implements Payment {
  processPayment(amount: number) {
    console.log(\`ApplePay processed $\{amount}\`);
  }
}
-----------------------------------------------------------
// Common handler for all payments
function handlePayment(payment: Payment, amount: number) {
  payment.processPayment(amount);
}

handlePayment(new StripePayment(100), 100);
handlePayment(new ApplePayPayment(), 50);
                 
                 `}
                </CodeBlock>
                <hr />
            </section>


            {/* NEXT.JS SAMPLE */}
            <section>
                <h3 className="section-header" id='jsExample'>Javascript Example with API Route</h3>
                <p>Example for coding different ways to pay alongside Next.js API routes</p>
                <CodeBlock language='jsx'>{`
// All payments need to be processed
export interface Payment {
  processPayment(amount: number): Promise<string>;
}

// Base class for reusable logic
export abstract class PaymentProvider implements Payment {
  constructor(protected amount: number) {}

  protected validateAmount() {
    if (this.amount <= 0) {
      throw new Error("Amount must be greater than 0");
    }
  }

  abstract processPayment(): Promise<string>;
}
-----------------------------------------------------------
// Stripe reuses common logic
export class StripePayment extends PaymentProvider {
  async processPayment(): Promise<string> {
    this.validateAmount();
    // Simulate Stripe API call
    return \`Stripe successfully processed $\{this.amount}\`;
  }
}

// ApplePay skips base class but still respects interface
export class ApplePayPayment implements Payment {
  async processPayment(amount: number): Promise<string> {
    // ApplePay doesn’t need base class logic
    return \`ApplePay processed $\{amount}\`;
  }
}   
                 `}</CodeBlock>
                <p><strong>Putting it together with Next.js API routes</strong></p>
                <CodeBlock language='jsx'>{`
import { NextRequest, NextResponse } from "next/server";
import { StripePayment } from "@/lib/payments/StripePayment";
import { PayPalPayment } from "@/lib/payments/PayPalPayment";
import { ApplePayPayment } from "@/lib/payments/ApplePayPayment";
import { CryptoPayment } from "@/lib/payments/CryptoPayment";
import { Payment } from "@/lib/payments/Payment";

export async function POST(req: NextRequest) {
  try {
    const { provider, amount } = await req.json();

    let payment: Payment;

    switch (provider) {
      case "stripe":
        payment = new StripePayment(amount);
        return NextResponse.json({ message: await payment.processPayment() });

      case "paypal":
        payment = new PayPalPayment(amount);
        return NextResponse.json({ message: await payment.processPayment() });

      case "applepay":
        payment = new ApplePayPayment();
        return NextResponse.json({ message: await payment.processPayment(amount) });

      case "crypto":
        payment = new CryptoPayment();
        return NextResponse.json({ message: await payment.processPayment(amount) });

      default:
        return NextResponse.json({ error: "Invalid payment provider" }, { status: 400 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

                 `}</CodeBlock>
                <hr />
            </section>

        </>
    );
}