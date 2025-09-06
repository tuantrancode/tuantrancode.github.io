import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'C++ Methods Reference',
  description: 'Reference page for various methods in C++',
};

export default function CppMethodsReference() {
  return (
    <>
      {/* Vector Methods */}
      <section>
        <h3 className='section-header' id='vector-methods'>
          Vector (&lt;vector&gt;) Methods
        </h3>
        <h4 className='sub-section-header'>Common Methods</h4>
        <ul>
          <li>
            <b>begin()</b>: Returns iterator to the first element.
            <ul>
              <li>
                <code>iterator begin()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>end()</b>: Returns iterator to the past-the-end element.
            <ul>
              <li>
                <code>iterator end()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>push_back()</b>: Appends an element to the end.
            <ul>
              <li>
                <code>void push_back(const T& value)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>pop_back()</b>: Removes the last element.
            <ul>
              <li>
                <code>void pop_back()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>insert()</b>: Inserts element before pos.
            <ul>
              <li>
                <code>iterator insert(iterator pos, const T& value)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>erase()</b>: Removes element(s) from vector.
            <ul>
              <li>
                <code>iterator erase(iterator pos)</code>
              </li>
              <li>
                <code>iterator erase(iterator first, iterator last)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>clear()</b>: Removes all elements.
            <ul>
              <li>
                <code>void clear()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>size()</b>: Returns number of elements.
            <ul>
              <li>
                <code>size_t size()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>empty()</b>: Checks if vector is empty.
            <ul>
              <li>
                <code>bool empty()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>at()</b>: Accesses element with bounds checking.
            <ul>
              <li>
                <code>T& at(size_t pos)</code>
              </li>
            </ul>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3};
    v.push_back(4);
    v.insert(v.begin() + 1, 10);
    v.erase(v.begin());

    for (auto it = v.begin(); it != v.end(); ++it)
        cout << *it << " ";
}
        `}</CodeBlock>
        <hr />
      </section>

      {/* String Methods */}
      <section>
        <h3 className='section-header' id='string-methods'>
          String (&lt;string&gt;) Methods
        </h3>
        <h4 className='sub-section-header'>Common Methods</h4>
        <ul>
          <li>
            <b>length()</b>: Returns string length.
            <ul>
              <li>
                <code>size_t length()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>size()</b>: Same as <code>length()</code>.
            <ul>
              <li>
                <code>size_t size()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>substr()</b>: Returns substring.
            <ul>
              <li>
                <code>string substr(size_t pos, size_t count = npos)</code> <i>(count optional)</i>
              </li>
              <li>
                <code>count</code> is the length of the substring, or it defaults to the end of the string
              </li>
            </ul>
          </li>
          <li>
            <b>find()</b>: Finds substring.
            <ul>
              <li>
                <code>size_t find(const string& str, size_t pos = 0)</code> <i>(pos optional)</i>
              </li>
              <li>
                <code>pos</code> is the starting position in the string where the search begins
              </li>
            </ul>
          </li>
          <li>
            <b>replace()</b>: Replaces portion of string.
            <ul>
              <li>
                <code>string& replace(size_t pos, size_t len, const string& str)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>append()</b>: Appends string.
            <ul>
              <li>
                <code>string& append(const string& str)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>insert()</b>: Inserts string at pos.
            <ul>
              <li>
                <code>string& insert(size_t pos, const string& str)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>erase()</b>: Erases portion.
            <ul>
              <li>
                <code>string& erase(size_t pos = 0, size_t len = npos)</code> <i>(pos & len optional)</i>
              </li>
            </ul>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
#include <string>
#include <iostream>
using namespace std;

int main() {
    string s = "Hello World";
    s.replace(6, 5, "C++");
    cout << s << endl;
}
        `}</CodeBlock>
        <hr />
      </section>

      {/* Map Methods */}
      <section>
        <h3 className='section-header' id='map-methods'>
          Map (&lt;map&gt;) Methods
        </h3>
        <ul>
          <li>
            <b>insert()</b>: Inserts key-value pair.
            <ul>
              <li>
                <code>pair{`<iterator, bool`} insert(const value_type& val)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>erase()</b>: Removes element(s).
            <ul>
              <li>
                <code>size_t erase(const key_type& key)</code>
              </li>
              <li>
                <code>iterator erase(iterator pos)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>find()</b>: Finds element by key.
            <ul>
              <li>
                <code>iterator find(const key_type& key)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>count()</b>: Returns number of elements with key.
            <ul>
              <li>
                <code>size_t count(const key_type& key)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>clear()</b>: Removes all elements.
            <ul>
              <li>
                <code>void clear()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>size()</b>: Returns number of elements.
            <ul>
              <li>
                <code>size_t size()</code>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
      </section>

      {/* Set Methods */}
      <section>
        <h3 className='section-header' id='set-methods'>
          Set (&lt;set&gt;) Methods
        </h3>
        <ul>
          <li>
            <b>insert()</b>: Inserts value.
            <ul>
              <li>
                <code>pair{`<iterator, bool>`} insert(const value_type& val)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>erase()</b>: Removes element(s).
            <ul>
              <li>
                <code>size_t erase(const key_type& key)</code>
              </li>
              <li>
                <code>iterator erase(iterator pos)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>find()</b>: Finds value.
            <ul>
              <li>
                <code>iterator find(const key_type& key)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>count()</b>: Checks existence.
            <ul>
              <li>
                <code>size_t count(const key_type& key)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>clear()</b>: Removes all elements.
            <ul>
              <li>
                <code>void clear()</code>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
      </section>

      {/* Algorithm Methods */}
      <section>
        <h3 className='section-header' id='algorithm-methods'>
          Algorithm (&lt;algorithm&gt;) Methods
        </h3>
        <ul>
          <li>
            <b>sort()</b>: Sorts range.
            <ul>
              <li>
                <code>void sort(RandomIt first, RandomIt last, Compare comp = {})</code> <i>(comp optional)</i>
              </li>
            </ul>
          </li>
          <li>
            <b>reverse()</b>: Reverses range.
            <ul>
              <li>
                <code>void reverse(BidirectionalIt first, BidirectionalIt last)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>find()</b>: Finds value.
            <ul>
              <li>
                <code>InputIt find(InputIt first, InputIt last, const T& value)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>count()</b>: Counts occurrences.
            <ul>
              <li>
                <code>size_t count(InputIt first, InputIt last, const T& value)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>max_element()</b>: Finds max.
            <ul>
              <li>
                <code>ForwardIt max_element(ForwardIt first, ForwardIt last)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>min_element()</b>: Finds min.
            <ul>
              <li>
                <code>ForwardIt min_element(ForwardIt first, ForwardIt last)</code>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
      </section>

      {/* Stack Methods */}
      <section>
        <h3 className='section-header' id='stack-methods'>
          Stack (&lt;stack&gt;) Methods
        </h3>
        <h4 className='sub-section-header'>Common Methods</h4>
        <ul>
          <li>
            <b>push()</b>: Inserts an element at the top.
            <ul>
              <li>
                <code>void push(const T& value)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>pop()</b>: Removes the top element.
            <ul>
              <li>
                <code>void pop()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>top()</b>: Accesses the top element.
            <ul>
              <li>
                <code>T& top()</code>
              </li>
              <li>
                <code>const T& top() const</code> : for const stack, returns a read-only access to the top element
              </li>
            </ul>
          </li>
          <li>
            <b>empty()</b>: Checks if stack is empty.
            <ul>
              <li>
                <code>bool empty()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>size()</b>: Returns the number of elements.
            <ul>
              <li>
                <code>size_t size()</code>
              </li>
            </ul>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
#include <iostream>
#include <stack>
using namespace std;


int main() {
stack<int> st;
st.push(10);
st.push(20);
cout << "Top: " << st.top() << endl; // 20
st.pop();
cout << "New Top: " << st.top() << endl; // 10
return 0;
}
`}</CodeBlock>
        <hr />
      </section>

      {/* Queue Methods */}
      <section>
        <h3 className='section-header' id='queue-methods'>
          Queue (&lt;queue&gt;) Methods
        </h3>
        <h4 className='sub-section-header'>Common Methods</h4>
        <ul>
          <li>
            <b>push()</b>: Inserts an element at the back.
            <ul>
              <li>
                <code>void push(const T& value)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>pop()</b>: Removes the front element.
            <ul>
              <li>
                <code>void pop()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>front()</b>: Accesses the first element.
            <ul>
              <li>
                <code>T& front()</code>
              </li>
              <li>
                <code>const T& front() const</code> : for const queue, returns a read-only access to the front element
              </li>
            </ul>
          </li>
          <li>
            <b>back()</b>: Accesses the last element.
            <ul>
              <li>
                <code>T& back()</code>
              </li>
              <li>
                <code>const T& back() const</code> : for const queue, returns a read-only access to the back element
              </li>
            </ul>
          </li>
          <li>
            <b>empty()</b>: Checks if queue is empty.
            <ul>
              <li>
                <code>bool empty()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>size()</b>: Returns the number of elements.
            <ul>
              <li>
                <code>size_t size()</code>
              </li>
            </ul>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
#include <iostream>
#include <queue>
using namespace std;


int main() {
queue<int> q;
q.push(1);
q.push(2);
q.push(3);
cout << "Front: " << q.front() << endl; // 1
cout << "Back: " << q.back() << endl; // 3
q.pop();
cout << "New Front: " << q.front() << endl; // 2
return 0;
}
`}</CodeBlock>
        <hr />
      </section>

      {/* Math Functions */}
      <section>
        <h3 className='section-header' id='math-functions'>
          Math (&lt;cmath&gt;) Functions
        </h3>
        <h4 className='sub-section-header'>Common Functions</h4>
        <ul>
          <li>
            <b>sqrt()</b>: Returns square root.
            <ul>
              <li>
                <code>double sqrt(double x)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>pow()</b>: Raises base to power exp.
            <ul>
              <li>
                <code>double pow(double base, double exp)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>abs()</b>: Returns absolute value.
            <ul>
              <li>
                <code>int abs(int x)</code>
              </li>
              <li>
                <code>double fabs(double x)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>ceil()</b>: Rounds up.
            <ul>
              <li>
                <code>double ceil(double x)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>floor()</b>: Rounds down.
            <ul>
              <li>
                <code>double floor(double x)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>round()</b>: Rounds to nearest integer.
            <ul>
              <li>
                <code>double round(double x)</code>
              </li>
            </ul>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
#include <iostream>
#include <cmath>
using namespace std;

int main() {
    cout << sqrt(25) << endl;   // 5
    cout << pow(2, 3) << endl;  // 8
    cout << floor(2.9) << endl; // 2
    return 0;
}
        `}</CodeBlock>
        <hr />
      </section>

      {/* Memory Management */}
      <section>
        <h3 className='section-header' id='memory-management'>
          Memory Management (&lt;cstdlib&gt; / new & delete)
        </h3>
        <h4 className='sub-section-header'>C-style Functions</h4>
        <ul>
          <li>
            <b>malloc()</b>: Allocates memory.
            <ul>
              <li>
                <code>void* malloc(size_t size)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>calloc()</b>: Allocates zero-initialized memory.
            <ul>
              <li>
                <code>void* calloc(size_t num, size_t size)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>realloc()</b>: Resizes allocated memory.
            <ul>
              <li>
                <code>void* realloc(void* ptr, size_t size)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>free()</b>: Frees allocated memory.
            <ul>
              <li>
                <code>void free(void* ptr)</code>
              </li>
            </ul>
          </li>
        </ul>

        <h4 className='sub-section-header'>C++-style Operators</h4>
        <ul>
          <li>
            <b>new</b>: Allocates memory.
            <ul>
              <li>
                <code>int* ptr = new int;</code>
              </li>
            </ul>
          </li>
          <li>
            <b>delete</b>: Frees allocated memory.
            <ul>
              <li>
                <code>delete ptr;</code>
              </li>
            </ul>
          </li>
          <li>
            <b>new[]</b>: Allocates array.
            <ul>
              <li>
                <code>int* arr = new int[5];</code>
              </li>
            </ul>
          </li>
          <li>
            <b>delete[]</b>: Frees allocated array.
            <ul>
              <li>
                <code>delete[] arr;</code>
              </li>
            </ul>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
    int* arr = (int*)malloc(5 * sizeof(int));
    free(arr);

    int* nums = new int[5];
    delete[] nums;
    return 0;
}
        `}</CodeBlock>
        <hr />
      </section>

      {/* Random Numbers */}
      <section>
        <h3 className='section-header' id='random-numbers'>
          Random Numbers (&lt;cstdlib&gt; / &lt;ctime&gt;)
        </h3>
        <ul>
          <li>
            <b>rand()</b>: Returns random integer.
            <ul>
              <li>
                <code>int rand()</code>
              </li>
            </ul>
          </li>
          <li>
            <b>srand()</b>: Seeds random generator.
            <ul>
              <li>
                <code>void srand(unsigned int seed)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>time()</b>: Returns current time.
            <ul>
              <li>
                <code>time_t time(time_t* arg)</code>
              </li>
            </ul>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0));
    for (int i = 0; i < 5; i++) {
        cout << rand() % 100 << " "; // Random 0-99
    }
    return 0;
}
        `}</CodeBlock>
        <hr />
      </section>

      {/* Character Classification */}
      <section>
        <h3 className='section-header' id='character-classification'>
          Character Classification (&lt;cctype&gt;)
        </h3>
        <h4 className='sub-section-header'>Common Functions</h4>
        <ul>
          <li>
            <b>isalpha()</b>: Checks if character is a letter.
            <ul>
              <li>
                <code>int isalpha(int c)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>isdigit()</b>: Checks if character is a digit.
            <ul>
              <li>
                <code>int isdigit(int c)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>isalnum()</b>: Checks if alphanumeric.
            <ul>
              <li>
                <code>int isalnum(int c)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>isspace()</b>: Checks if whitespace.
            <ul>
              <li>
                <code>int isspace(int c)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>islower()</b>: Checks if lowercase.
            <ul>
              <li>
                <code>int islower(int c)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>isupper()</b>: Checks if uppercase.
            <ul>
              <li>
                <code>int isupper(int c)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>tolower()</b>: Converts to lowercase.
            <ul>
              <li>
                <code>int tolower(int c)</code>
              </li>
            </ul>
          </li>
          <li>
            <b>toupper()</b>: Converts to uppercase.
            <ul>
              <li>
                <code>int toupper(int c)</code>
              </li>
            </ul>
          </li>
        </ul>

        <CodeBlock language='jsx'>{`
#include <iostream>
#include <cctype>
using namespace std;

int main() {
    char c = 'A';
    if (isupper(c)) cout << "Uppercase" << endl;
    cout << (char)tolower(c) << endl; // 'a'
    return 0;
}
        `}</CodeBlock>
      </section>
    </>
  );
}
