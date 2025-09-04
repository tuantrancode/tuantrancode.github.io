import React from 'react';

export const metadata = {
    title: "AI Basics",
    description: "Notes on the basics of AI",
};

export default function AIBasics() {
    return (
        <>
            {/* AI DEFINITION */}
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
                    <li><strong>Generative AI:</strong> AI systems capable of creating new content (e.g., text, images, music, code); often powered by LLMs</li>
                    <ul>
                        <li><strong>Temperature</strong> : the parameter that influences the level of randomness in generated outputs; lower temperatures produces conservative/deterministic outputs while high temperaures lead to more diverse results</li>
                    </ul>
                </ul>
                <hr />
                <h4 className="sub-section-header">4. AI Models</h4>
                <p>Computer programs designed to make predictions or decisions based on input data.</p>
                <ul>
                    <li><strong>Large Language Models (LLMs):</strong> Trained on massive amounts of text to understand and generate human-like language.</li>
                    <li><strong>Image Model:</strong> Trained on creating images</li>
                    <li><strong>Diffusion Model:</strong> For editing and polishing images </li>
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
                <hr />
            </section>

            {/* USES */}
            <section>
                <h3 className="section-header" id="ai-uses">
                    Uses of Artificial Intelligence
                </h3>
                <ul>
                    <li><strong>Text Extracting</strong> : get specific information from the text</li>
                    <ul>
                        <li><strong>Document Summarization</strong> : helps document codes or other contents  </li>
                        <li>Extract keywords use for SEO</li>
                        <li>Classify the input and re-organize it</li>
                    </ul>
                    <li>
                        <strong>Optimization:</strong> Optimizes routes for deliveries, processes, and testing.
                    </li>
                    <li>
                        <strong>Research & Testing:</strong> Research variety of topics or tech and give quick analysis as a preliminary for a project.
                    </li>
                    <li>
                        <strong>Software Development:</strong> Assisting developers by autocompleting code, explaining errors, documentation, debugging, and optimizing programs.
                    </li>
                    <ul>
                        <li>Read code documentation and answer questions</li>
                        <li>Help make preliminary plans for software architecture</li>
                    </ul>
                    <li><strong>Data Handling:</strong> Finding insights/predcitions within large, complex datasets across finance, healthcare, research, and more. </li>
                    <ul>
                        <li>Data cleaning and correction : identifies and correct errors in data; break down the cleaning prompts to column-by-column</li>
                        <li>Data classification : categorizing data into predefined classes or labels</li>
                        <li>Intelligent grouping and clustering : detects patterns, clusters similar data points, and identifies trends</li>
                        <li>Data visualization : transform datasets into intuitive visual formats</li>
                    </ul>
                    <li>
                        <strong>Language Processing:</strong> Rephrasing and rewriting text in different styles while preserving the core meaning, as well as understanding and generating human-like language.
                    </li>
                    <li>
                        <strong>Recommendation Systems:</strong> Powering engines that suggest relevant content, products, or services.
                    </li>
                    <li>
                        <strong>Work Automation:</strong> Helping schedule meetings, manage tasks, prioritize work, and improve productivity.
                    </li>
                    <li>
                        <strong>Computer Vision:</strong> Identifying objects, people, text, and other elements within images and videos.
                    </li>
                    <li>
                        <strong>Audio Processing:</strong> Transcribing recordings, identifying speakers, removing noise, and generating speech.
                    </li>

                    <li>
                        <strong>Creative Generation:</strong> Producing original images, music, stories, and other creative works from text prompts.
                    </li>

                </ul>
                <p><strong>Notes</strong></p>
                <ul>
                    <li>Large, diverse, and veried datasets mitigate bias</li>
                    <li>Content filters and fact-checking mechanisms can help improve dataset and learning</li>
                    <li>Use human oversight in sensitive domains, like healthcare and law</li>
                </ul>
                <hr />
            </section>


            {/* LIMITATION */}
            <section>
                <h3 className="section-header" id="ai-limits">
                    LImits of Artificial Intelligence
                </h3>
                <ul>
                    <li>Difficulty dealing with unknowns: AI is good at answering questions rather than discovering new ideas or solutions on their own</li>
                    <li>AI models rely on training patterns, not fact-checking which can lead to AI hallucination - when AI generates false, misleading, or fabricated info</li>
                    <li>Limited based on the scope of their training data</li>
                    <ul>
                        <li>Can create nonsensical or unraelistic content</li>
                        <li>AI drift: overtime it can become less accurate compared to when it was first trained</li>
                    </ul>
                    <li>Handling open-ended problems that require unconventional approaches</li>
                    <li>If the training data is biased in some way, AI will learn it and perpetuate it</li>
                    <ul>
                        <li>Samping Bias : lack of diversity</li>
                        <li>Measurement Bias : errors in data or faulty tools</li>
                        <li>Algorithmic Bias : caused by bias decisions made in the training data or during algorithm design </li>
                        <li>Selection Bias : when training data is not randomly selected</li>
                        <li>Confirmation Bias : when dev only consider data that supports pre-existing beliefs</li>
                        <li>User & Prompting Bias : Repeatedly asking AI similar questions can skew responses, creating a feedback loop where AI reinforces certain perspectives</li>
                    </ul>
                    <li>Predicting an individual human behavior</li>
                    <li>Lack of common sense.</li>
                    <li>Adversarial Attack: deliberate attempts to deceive or manipulate AI systems by introducing carefully crafted perturbations to the input data; like putting up false signs for AI to inpterpret</li>
                </ul>
                <hr />
            </section>


            {/* PROMPT */}
            <section>
                <h3 className="section-header" id="prompts">
                    Designing Specific Prompts
                </h3>
                <ol>
                    <li>Identify the Topic</li>
                    <li>Clarify the Objective: clearly define objective and desired output</li>
                    <li>Specificity/ Scope: be specific</li>
                    <ul>
                        <li>Add any relevant background/context information to improve the response</li>
                        <li>Make neutral and inclusive prompts to avoid biased outputs</li>
                    </ul>
                    <li>Revise and Reiterate: ask for revision if output is not optimal</li>
                </ol>

                <h4 className="sub-section-header" id="parts">Key Parts of a Prompt</h4>
                <ul>
                    <li><strong>Persona</strong> : define the AI's role or identy and shapes the tone/style of the response</li>
                    <li><strong>Instructions</strong> : core purpose of the prompt; be clear and specific</li>
                    <li><strong>Input Content</strong> : relevance info/background provided by the user</li>
                    <ul>
                        <li>Separate the inputs from the rest of the instructions using delimiters like <code>###</code> or <code>---</code> or <code>{`//`}</code></li>
                    </ul>
                    <li><strong>Output Format:</strong> : the desired structure, format, verbosity (detail-level), length, style, and tone of the output</li>
                    <ul>
                        <li>Example: Companies: [list of companies]</li>
                    </ul>
                    <li><strong>Addtional Information</strong> : adding constraints/context will lead to more relevant, personalized responses </li>
                    <ul>
                        <li>Give use cases/ scenarios to help AI understands the context</li>
                        <li>Context like programming language, frameworks, project structure</li>
                        <li>Example: "If you don't know the answer, then response with idk"</li>
                        <li>Example: "If you have question about the prompt, ask."</li>
                    </ul>
                </ul>
                <hr />
            </section>

            {/* PROMPT TECHNIQUES */}
            <section>
                <div>
                    <h3 className="section-header" id="promptsTechniques">Advanced Prompting Techniques</h3>
                    <ul>
                        <li>
                            <strong>Cognitive Verifier Pattern</strong>
                            <ul>
                                <li>
                                    <strong>Description:</strong> The AI asks clarifying questions
                                    before responding to ensure accuracy and relevance.
                                </li>
                                <li>
                                    <strong>When to use:</strong> When working with ambiguous,
                                    open-ended, or multi-step queries.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Zero-Shot Prompting</strong>
                            <ul>
                                <li>
                                    <strong>Description:</strong> The model responds directly based on
                                    its existing knowledge without any examples.
                                </li>
                                <li>
                                    <strong>When to use:</strong> For general queries where the model
                                    likely already has enough context.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Few-Shot Prompting</strong>
                            <ul>
                                <li>
                                    <strong>Description:</strong> Provides a few examples in the
                                    prompt to guide the AI toward more accurate results.
                                </li>
                                <li>
                                    <strong>When to use:</strong> When precision is important or the
                                    task involves a specific structure or style.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Chain-of-Thought (CoT)</strong>
                            <ul>
                                <li>
                                    <strong>Description:</strong> Encourages the AI to explain its
                                    reasoning step by step, improving logical accuracy.
                                </li>
                                <li>
                                    <strong>When to use:</strong> For multi-step problems like math,
                                    reasoning, or structured decision-making.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Least-to-Most Prompting</strong>
                            <ul>
                                <li>
                                    <strong>Description:</strong> Starts with simple prompts and
                                    gradually increases complexity as the AI builds understanding.
                                </li>
                                <li>
                                    <strong>When to use:</strong> When solving complex problems where
                                    breaking them into smaller steps improves accuracy.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Tree-of-Thought (ToT)</strong>
                            <ul>
                                <li>
                                    <strong>Description:</strong> Explores multiple reasoning paths
                                    before selecting the best solution.
                                </li>
                                <li>
                                    <strong>When to use:</strong> For problems with multiple possible
                                    answers or strategic planning scenarios.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Self-Consistency Prompting</strong>
                            <ul>
                                <li>
                                    <strong>Description:</strong> Generates multiple responses to the
                                    same prompt and selects the most consistent or accurate one.
                                </li>
                                <li>
                                    <strong>When to use:</strong> When reliability and coherence are
                                    critical, such as research or reporting.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Generated Knowledge Prompting</strong>
                            <ul>
                                <li>
                                    <strong>Description:</strong> First generates relevant background
                                    information, then uses it to improve the final response.
                                </li>
                                <li>
                                    <strong>When to use:</strong> For highly technical, niche, or
                                    domain-specific queries where additional context improves results.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <hr />
            </section>

            {/* AI IMAGE AND VIDEO */}
            <section>
                <h3 className="section-header" id="imageVideo">
                    Image and Video
                </h3>
                <ul>
                    <li><strong>DALL-E</strong> : generates images from text</li>
                    <ul>
                        <li>Easy to use as it is the same as chatting with ChatGPT</li>
                        <li>API Documentation : <a href="https://platform.openai.com/docs/quickstart">platform.openai.com/docs/quickstart</a></li>
                        <li>DALL-E 3 Features : <a href="https://cookbook.openai.com/articles/what_is_new_with_dalle_3">cookbook.openai.com/articles/what_is_new_with_dalle_3</a></li>
                    </ul>
                    <li><strong>Midjourney</strong> : allows users to refine images through iterative feedback</li>
                    <ul>
                        <li>Uses Discord as an interface; Creates own server and add the Midjourney Bot into it</li>
                        <li>Use <code>/imagine</code> to start the prompt and add parameters like cmd</li>
                        <li>Produces images in varying styles</li>
                        <li>Library of Image Styles: <a href="https://midlibrary.io/">midlibrary.io/</a></li>
                        <li>Documentation: <a href="https://docs.midjourney.com/hc/en-us/categories/32013335627533-Documentation">link/</a></li>
                        <li>Parameter List: <a href="https://docs.midjourney.com/hc/en-us/articles/32859204029709-Parameter-List">link/</a></li>
                    </ul>
                    <li><strong>InVideo</strong> : creates image and video</li>
                    <ul>
                        <li>Create video from a script or title</li>
                    </ul>
                </ul>
            </section>
        </>
    );
}


