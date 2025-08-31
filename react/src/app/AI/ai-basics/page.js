import React from 'react';

export const metadata = {
    title: "AI Basics",
    description: "Notes on the basics of AI",
};

export default function AIBasics() {
    return (
        <section>
            <h3 className="section-header" id="definition">
                Definitions
            </h3>

            <h4 className="sub-section-header">1. Artificial Intelligence (AI)</h4>
            <p>The study of creating machines and computer systems capable of performing tasks that typically require human intelligence.</p>

            <h4 className="sub-section-header">Types of AI</h4>
            <ul>
                <li><strong>Narrow AI:</strong> AI designed and trained for a specific task or narrow set of tasks.</li>
                <li><strong>General AI:</strong> A hypothetical future AI system with human-level intelligence.</li>
            </ul>

            <h4 className="sub-section-header">Applications of AI</h4>
            <ul>
                <li><strong>Chatbots:</strong> AI programs designed to engage in natural conversations with people.</li>
                <li><strong>Computer Vision:</strong> Enables computers to interpret and analyze visual information like images and videos.</li>
                <li><strong>Robotics:</strong> Focuses on designing, constructing, and operating robots.</li>
                <li><strong>AI Tools:</strong> Software programs designed to assist users in performing AI-related tasks.</li>
            </ul>
            <hr />

            <h4 className="sub-section-header">2. Algorithms</h4>
            <p>Defined methods or processes employed to train models, generate predictions, and execute tasks using data.</p>
            <p>Used in machine learning, AI models, and statistical analysis.</p>
            <hr />
            <h4 className="sub-section-header">3. Machine Learning (ML)</h4>
            <p>A branch of AI that enables computers to improve their performance through experience without explicit programming.</p>

            <h4 className="sub-section-header">Types of Machine Learning</h4>
            <ul>
                <li><strong>Supervised Learning:</strong> Uses labeled data for training.</li>
                <li><strong>Unsupervised Learning:</strong> Uses unlabeled data without explicit guidance.</li>
                <ul>
                    <li>Uses advanced ML algorithm to process the unstructured data to train AI</li>
                </ul>
                <li><strong>Reinforcement Learning:</strong> Trains agents through rewards and penalties based on interactions with an environment.</li>
            </ul>

            <h4 className="sub-section-header">Subfields of ML</h4>
            <ul>
                <li><strong>Neural Networks:</strong> Computational models inspired by the human brain, used for recognizing patterns, classification, and predictions.
                    <ul>
                        <li><strong>Deep Learning:</strong> A subset of ML using multi-layered neural networks to process large amounts of data.</li>
                        <li><strong>Fine Tuning:</strong> the process of adjusting parameters/ weights/biases of a pre-existing neural network model so a new model does not have to be trained from scratch</li>
                    </ul>
                </li>
                <li><strong>Generative AI:</strong> AI systems capable of creating new content (e.g., text, images, music, code).</li>
            </ul>
            <hr />
            <h4 className="sub-section-header">4. AI Models</h4>
            <p>Computer programs designed to make predictions or decisions based on input data.</p>
            <ul>
                <li><strong>Large Language Models (LLMs):</strong> Trained on massive amounts of text to understand and generate human-like language.</li>
                <li>Other model types: Image recognition, Speech recognition, Recommendation models</li>
            </ul>
            <hr />
            <h4 className="sub-section-header">5. Natural Language Processing (NLP)</h4>
            <p>A subfield of AI focused on enabling computers to understand, interpret, and generate human language.</p>
            <ul>
                <li>Applications: Chatbots, Language translation systems, Sentiment analysis, Text summarization</li>
                <li>Related Models: Large Language Models (LLMs)</li>
            </ul>
            <hr />
            <h4 className="sub-section-header">6. Statistical Analysis</h4>
            <p>Techniques involving data collection, organization, examination, and interpretation to identify patterns and make predictions.</p>
            <p>Supports: Machine learning model training, AI model evaluation, Data-driven decision-making.</p>

        </section>
    );
}


