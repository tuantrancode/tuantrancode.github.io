import CodeBlock from '@/components/shared/CodeBlock';

export default function CppSyntax() {
  return (
    <>
      {/* Introduction */}
      <section>
        <h3 className='section-header' id='introduction'>
          Introduction
        </h3>
        <p>
          C++ is a general-purpose, high-performance, object-oriented programming language. It extends the C language
          with features like classes, templates, and the Standard Template Library (STL).
        </p>
        <h4 className='sub-section-header'>Memory Regions: Heap/Stack</h4>
        <ul>
          <li>
            <strong>Code</strong> - region where the program instructions are stored
          </li>
          <li>
            <strong>Static memory </strong> - region where global and static local variables are allocated
          </li>
          <li>
            <strong>The stack </strong> - region where a function's local variables are allocated
          </li>
          <li>
            <strong>The heap </strong> - region where the <code>new</code> operator allocates memory, and where{' '}
            <code>delete</code> operator deallocates memory
          </li>
        </ul>
        <CodeBlock language='jsx'>{`
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
        `}</CodeBlock>
        <hr />
      </section>
      {/* Variables and Data Types */}
      <section>
        <h3 className='section-header' id='variables'>
          Variables & Data Types
        </h3>
        <h4 className='sub-section-header'>Basic Types</h4>
        <CodeBlock language='jsx'>{`
const int age = 25;       // declaring constant
int age = 25;       // Integer: maximum int value is roughly 2 billion (32-bit)
float price = 9.99; // Floating point
char grade = 'A';   // Character
bool isHappy = true;// Boolean
string name = "Bob"; // String (<string> header required)

enum ErrorCode { 1, 2, 3 }; // Enumeration; only consists of a set of defined constants
ErrorCode codeVariable = 1;
        `}</CodeBlock>
        <hr />
      </section>
      {/* Input and Output */}
      <section>
        <h3 className='section-header' id='io'>
          Input & Output
        </h3>
        <CodeBlock language='jsx'>{`
#include <iostream>
using namespace std;

int main() {
    string name;
    cout << "Enter your name: ";
    cin >> name;
    cout << "Hello, " << name << "!" << endl;
    return 0;
}
        `}</CodeBlock>
        <hr />
      </section>
      {/* Conditionals */}
      <section>
        <h3 className='section-header' id='conditionals'>
          Conditionals
        </h3>
        <CodeBlock language='jsx'>{`
int x = 10;

{condition} ? true : false;

if (x > 0) {
    cout << "Positive" << endl;
} else if (x < 0) {
    cout << "Negative" << endl;
} else {
    cout << "Zero" << endl;
}

switch (a) {
  case 0:
     // Print "zero"
     break;
  case 1:
     // Print "one"
     break;
   default:
     // Print "unknown"
     break;
}
        `}</CodeBlock>
        <hr />
      </section>
      {/* Loops */}
      <section>
        <h3 className='section-header' id='loops'>
          Loops
        </h3>
        <h4 className='sub-section-header'>For Loop</h4>
        <CodeBlock language='jsx'>{`
for (int i = 0; i < 5; i++) {
    cout << i << " ";
}
        `}</CodeBlock>

        <h4 className='sub-section-header'>While Loop</h4>
        <CodeBlock language='jsx'>{`
int i = 0;
while (i < 5) {
    cout << i << " ";
    i++;
}
        `}</CodeBlock>

        <h4 className='sub-section-header'>Do-While Loop</h4>
        <CodeBlock language='jsx'>{`
int i = 0;
do {
    cout << i << " ";
    i++;
} while (i < 5);
        `}</CodeBlock>
        <hr />
      </section>
      {/* Functions */}
      <section>
        <h3 className='section-header' id='functions'>
          Functions
        </h3>
        <CodeBlock language='jsx'>{`
#include <iostream>
#include "filename.h"
using namespace std;

int add(int a, int b = 9) {
    return a + b;
}

int main() {
    cout << add(3, 4) << endl; // 7
    return 0;
}
        `}</CodeBlock>
        <hr />
      </section>

{/* Array Section */}
<section>
<h3 className="section-header" id="array-basics">Arrays in C++</h3>


<h4 className="sub-section-header">1. Declaring Arrays</h4>
<ul>
<li><b>Syntax:</b> <code>type arrayName[size]</code></li>
<li>Example:
<CodeBlock language='jsx'>{`
int numbers[5]; // Array of 5 integers
char letters[10]; // Array of 10 characters
double scores[3]; // Array of 3 doubles
`}</CodeBlock>
</li>
</ul>


<h4 className="sub-section-header">2. Initializing Arrays</h4>
<ul>
<li><b>Method 1:</b> Inline initialization
<CodeBlock language='jsx'>{`
int numbers[5] = {1, 2, 3, 4, 5};
char letters[] = {'A', 'B', 'C'}; // Size deduced automatically
`}</CodeBlock>
</li>
<li><b>Method 2:</b> Partial initialization (rest will be 0)
<CodeBlock language='jsx'>{`
int nums[5] = {10, 20}; // nums = {10, 20, 0, 0, 0}
`}</CodeBlock>
</li>
</ul>


<h4 className="sub-section-header">3. Accessing Array Elements</h4>
<ul>
<li><b>Syntax:</b> <code>arrayName[index]</code></li>
<li>Index starts at <code>0</code> and goes up to <code>size - 1</code>.</li>
<li>Example:
<CodeBlock language='jsx'>{`
int numbers[5] = {10, 20, 30, 40, 50};
cout << numbers[0]; // 10
cout << numbers[3]; // 40
`}</CodeBlock>
</li>
</ul>


<h4 className="sub-section-header">4. Modifying Array Elements</h4>
<ul>
<li><b>Syntax:</b> <code>arrayName[index] = newValue;</code></li>
<li>Example:
<CodeBlock language='jsx'>{`
int numbers[3] = {1, 2, 3};
numbers[1] = 99; // Change second element to 99
cout << numbers[1]; // Outputs 99
`}</CodeBlock>
</li>
</ul>


<h4 className="sub-section-header">5. Looping Through Arrays</h4>
<ul>
<li><b>Using for-loop:</b>
<CodeBlock language='jsx'>{`
int arr[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
cout << arr[i] << " ";
}
// Output: 10 20 30 40 50
`}</CodeBlock>
</li>
<li><b>Using range-based for-loop (C++11+):</b>
<CodeBlock language='jsx'>{`
int arr[5] = {10, 20, 30, 40, 50};
for (int num : arr) {
cout << num << " ";
}
// Output: 10 20 30 40 50
`}</CodeBlock>
</li>
</ul>


<h4 className="sub-section-header">6. Getting Array Size</h4>
<ul>
<li>Use <code>sizeof</code> operator:
<CodeBlock language='jsx'>{`
int arr[5] = {1, 2, 3, 4, 5};
int size = sizeof(arr) / sizeof(arr[0]);
cout << "Size: " << size; // 5
`}</CodeBlock>
</li>
</ul>


<hr />
</section>

      {/* Vectors */}
      <section>
        <h3 className='section-header' id='vectors'>
          Vectors
        </h3>
        <p>
          Vectors are safer to use than arrays. Arrays are fixed references <code>arr1 = arr2</code> is not allowed
        </p>
        <ul>
          <li>Vector can be dynamically created, but arrays need a fixed size on build</li>
        </ul>
        <CodeBlock language='jsx'>{`
vector<int> orderedList(5) = {1, 2, 3, 4, 5};
vector<int> dynamicArr[]; 

orderList.push_back(77); // appends 77
orderList.back(); // return the last element (w/o changing vector)
orderList.pop_back(); // removes the last element'

orderList[5]; // access/set value at index 6, return 77
orderList.at(5); // access/set value at index 6, return 77

orderList.size(); // return size of vector, return 6
orderList.reszie(10); // resize vector to have 10 elements
        `}</CodeBlock>
        <hr />
      </section>
      {/* Header File Guards */}
      <section>
        <h3 className='section-header' id='headerFileGuard'>
          Header File Guards
        </h3>
        <p>
          Prevent the preprocessor to include the file only once. Useful for making libraries or project headers/utils
        </p>
        <CodeBlock language='jsx'>{`
#ifndef MY_HEADER_H   // If not defined
#define MY_HEADER_H   // Define it

// Your declarations here
void myFunction();
class MyClass { };

#endif // MY_HEADER_H
        `}</CodeBlock>

        <h4 className='sub-section-header'>Modern Alternative: #pragma once</h4>
        <CodeBlock language='jsx'>{`
#pragma once

void myFunction();
class MyClass { };
        `}</CodeBlock>
        <hr />
      </section>
      {/* Pointers */}
      <section>
        <h3 className='section-header' id='pointers'>
          Pointers
        </h3>
        <p>
          Pointers store the <strong>memory address</strong> of a variable. You can use them to access and modify data
          directly.
        </p>
        <ul>
          <li>
            <code>new</code> operator allocate memory to create an object/ array and return a pointer to that object
          </li>
          <li>
            <code>delete</code> operator deallocate memory
          </li>
          <li>
            Dynmamically allocated objects need to have <code>delete</code> call on it at the end to avoid memory leak
          </li>
          <li>Use smart pointers to avoid having to manual delete</li>
        </ul>
        <CodeBlock language='jsx'>{`
int x = 10;
int y;
int* ptr = &x; // Pointer stores the address of x
ptr = nullptr; // Pointer points to nothing now
ptr = &x;
cin >> y;
int* arrPtr = new int[y]; // dynamically allocate memory for new array

cout << "Value: " << x << endl;       // 10
cout << "Address: " << ptr << endl;   // Memory address
cout << "Dereferenced: " << *ptr << endl; // Access the data the ptr points to; 10

delete[] arrPtr; to deallocate the memory used by the array
arrPtr = new int[]; // now it's safe to have the pointer reference a new array

---------------------------------------
// Overview

int normal; // holds data value
int* ptr; // holds memory address
&normal; // return address of variable
*ptr; // * dereferences ptr and access data value of ptr
&ptr; // address of pointer

---------------------------------------
// Pointers and objects

int* arrPtr;
MyClass *objPtr, *objArrPtr;
arrPtr = new int[size]; // points to address of new int array 
objPtr = new MyClass();  // points to MyClass object;
// objPtr is pointer to MyClass object;
objArrPtr = new MyClass[size]; // points to dynamically allocated array of MyClass objects;
// objArrPtr[0] is a MyClass object

objPtr->someMethod();
objArrPtr[0].someMethod();

// Risk of memory leak below
Object& obj = *( new Object() ); // obj is a reference, not a pointer, to an object
delete obj; // ❌ ERROR because obj is not a pointer
obj = *(new Object());  // Causes memory leak

        `}</CodeBlock>

        <h4 className='sub-section-header'>Pointer Arithmetic</h4>
        <CodeBlock language='jsx'>{`
int arr[3] = {10, 20, 30};
int* p = arr;

cout << *p << endl;     // 10
cout << *(p + 1) << endl; // 20
cout << *(p + 2) << endl; // 30
        `}</CodeBlock>

        <h4 className='sub-section-header'>Passing by reference</h4>
        <CodeBlock language='jsx'>{`
void ComputeChange(int totCents, int& numQuarters ) {
   numQuarters = totCents / 25;
}

int main () {
    int numQuarters;
    int totCents = 99;

    ComputeChange(totCents, numQuarters);
    cout << "Number of Quarters: " << numQuarters

    return 0;
}
        `}</CodeBlock>
        <hr />
      </section>

      {/* // Smart Pointers in C++ */}
      <section>
        <h3 className='section-header' id='smart-pointers'>
          Smart Pointers
        </h3>

        <p>
          Smart pointers are C++ objects that manage dynamic memory automatically, reducing the risk of memory leaks.
          The main types are
          <code>unique_ptr</code>, <code>shared_ptr</code>, and <code>weak_ptr</code>.
        </p>
        <p>Smart pointers are used the same way as normal pointer</p>
        <ul>
          <li>
            <code>{`obj->someMethod()`}</code>
          </li>
          <li>
            <code>{`(*obj).someMethod()`}</code>
          </li>
        </ul>
        <h4 className='sub-section-header'>1. unique_ptr</h4>
        <p>
          - Owns a dynamically allocated object exclusively.
          <br />
          - Cannot be copied, only moved.
          <br />- Automatically deletes the object when it goes out of scope.
        </p>
        <ul>
          <li>obj1 = obj2 is not allowed</li>
          <li>obj2 = move(obj1) is allowed; it transfer ownership to obj2 so now obj1 points to nullptr</li>
        </ul>
        <CodeBlock language='cpp'>{`
#include <memory>
#include <iostream>
using namespace std;

auto obj = make_unique<int>(42); // preferred way
cout << *obj << endl;

// Move ownership
auto obj2 = move(obj); // obj is now null

-------------------------------------
// Passing by const reference to avoid transfer of ownership
void useObject(const unique_ptr<MyClass>& obj) {
    obj->method();
}

int main() {
    auto obj = make_unique<MyClass>();
    useObject(obj);
}            
`}</CodeBlock>

        <h4 className='sub-section-header'>2. shared_ptr</h4>
        <p>
          - Allows multiple pointers to share ownership of an object.
          <br />- Object is destroyed when the last <code>shared_ptr</code> goes out of scope.
          <br />- Keeps a reference count internally.
        </p>
        <CodeBlock language='cpp'>{`
#include <memory>
#include <iostream>
using namespace std;

auto obj1 = make_shared<int>(10);
auto obj2 = obj1;  // copy allowed
cout << obj1.use_count() << endl; // 2
cout << *obj2 << endl;
`}</CodeBlock>

        <h4 className='sub-section-header'>3. weak_ptr</h4>
        <p>
          - Non-owning pointer to an object managed by <code>shared_ptr</code>.<br />
          - Does not increase reference count.
          <br />- Used to break cyclic references.
        </p>
        <CodeBlock language='cpp'>{`
#include <memory>
#include <iostream>
using namespace std;

auto sp = make_shared<int>(50);
weak_ptr<int> wp = sp;      // weak_ptr does not increase ref count
cout << sp.use_count() << endl; // 1

if (auto temp = wp.lock()) { // convert weak_ptr to shared_ptr temporarily
    cout << *temp << endl;  // 50
}
`}</CodeBlock>

        <h4 className='sub-section-header'>4. make_unique & make_shared</h4>
        <p>
          - Preferred way to create smart pointers.
          <br />- Safer than manually using <code>new</code>.<br />- Ensures exception safety and cleaner code.
        </p>
        <CodeBlock language='cpp'>{`
auto uPtr = make_unique<MyClass>();
auto sPtr = make_shared<MyClass>();
`}</CodeBlock>

        <h4 className='sub-section-header'>5. When to Use Each</h4>
        <ul>
          <li>
            <code>unique_ptr</code>: Exclusive ownership, no copying needed.
          </li>
          <li>
            <code>shared_ptr</code>: Shared ownership among multiple objects.
          </li>
          <li>
            <code>weak_ptr</code>: Break cycles, observe <code>shared_ptr</code> without owning.
          </li>
          <li>
            Always prefer <code>make_unique</code> or <code>make_shared</code> over raw <code>new</code>.
          </li>
        </ul>

        <hr />
      </section>
      {/* Classes */}
      <section>
        <h3 className='section-header' id='classes'>
          Classes & Objects
        </h3>
        <p>
          <strong>Rule of Three</strong> : if any of the destructor, copy constructor, or copy assignment operator is
          defined, then all 3 should be explicitly define as well
        </p>
        <CodeBlock language='jsx'>{`
#include <iostream>
using namespace std;

class Person {
public:
    string name;
    int age;
    OtherObject dataObject;
    static int planet;

    // constructor
    Person(string name){ 
        this->name = name;
    }

     // destructor (called when 'delete' operator is used on object)
    ~Person() {    
        // cleanup
    }

     // copy constructor (called when a new object is created)
    Person(const Person& origObj) {  
        // copy all neccessary properties to make a deep copy
        return copyObj;
    }

    // assignment operator (called when assigning an old object)
    Person& operator=(Person other){
          swap(dataObject, other.dataObject);
          return *this;
    }


    void introduce() {
        cout << "Hi, I'm " << name << " and I'm " << age << " years old." << endl;
    }
private:
   void helperFunc(int n); 
}

void Person::helperFunc(int n){
   // do something
}

int main() {
    Person p1;
    p1.name = "Bob";
    p1.age = 21;
    p1.introduce();
    Person* p2 = new Person(); // make new Person obj
    Person* p3 = new Person(p2); // copy p2 obj into p3, but needs to define a copy constructor (deep copy)
    Person* p4 = p2; // also copy p2 to p4 using the copy constructor (deep copy)

    p4 = p3; // does NOT call the copy constructor, it will use the assignment operator instead
    return 0;
}
        `}</CodeBlock>

        <h4 className='sub-section-header'>Separate Files for One Class</h4>
        <p>
          Dev will keep a className.h file for class definitions and a className.cpp that contains the member functions
          definitions. The main.cpp file will <code>#include "className.h"</code> only
        </p>
        <CodeBlock language='jsx'>{`
// StoreItem.h
#ifndef STOREITEM_H
#define STOREITEM_H

class StoreItem {
   public:
      StoreItem();  // constructor
      StoreItem(int n);
      ~StoreItem();  // destructor
      StoreItem(const StoreItem& origObj); // copy constructor
      void SetWeightOunces(int ounces);
      void Print() const;
   private:
      int weightOunces;
};

#endif
------------------------------------------------------------
// StoreItem.cpp
#include <iostream>
using namespace std;

#include "StoreItem.h"

StoreItem::StoreItem() {

}

StoreItem::StoreItem(int n){

}

void StoreItem::SetWeightOunces(int ounces) {
   weightOunces = ounces;
}

void StoreItem::Print() const {
   cout << "Weight (ounces): " << weightOunces << endl;
}
------------------------------------------------------------
// main.cpp
#include <iostream>
using namespace std;

#include "StoreItem.h"

int main() {
   StoreItem item1;

   item1.SetWeightOunces(16);
   item1.Print();

   return 0;
}

        `}</CodeBlock>
        <h4 className='sub-section-header'>Operator Overloading</h4>
        <p>
          Allows operations on classes like <code>obj1 + obj2</code> or <code>obj1 == obj2</code>
        </p>
        <CodeBlock language='jsx'>{`
#include <iostream>
using namespace std;

class TimeHrMn {
public:
   TimeHrMn(int timeHours = 0, int timeMinutes = 0);
   void Print() const;
   <mark>TimeHrMn operator+(TimeHrMn rhs) ;</mark>
private:
   int hours;
   int minutes;
};

// Overload + operator for TimeHrMn
<mark>TimeHrMn TimeHrMn::operator+(TimeHrMn rhs) </mark>
   TimeHrMn timeTotal;
   
   timeTotal.hours   = hours   + rhs.hours;
   timeTotal.minutes = minutes + rhs.minutes;
   
   return timeTotal;
}

TimerHrMn timer1, timer2, timer3
timer3 = timer1 + timer2;   // shortway to write below
timer3.hours = timer1.hours + timer2.hours;
timer3.minutes = timer1.minutes + timer2.minutes;

        `}</CodeBlock>

        <hr />
      </section>
 

      {/* Namespaces */}
      <section>
        <h3 className='section-header' id='namespaces'>
          Namespaces
        </h3>
        <p>
          Namespaces in C++ are used to organize code and prevent name collisions between variables, functions, or
          classes with the same name.
        </p>

        <h4 className='sub-section-header'>Basic Usage</h4>
        <CodeBlock language='jsx'>{`
// auditorium.h
namespace auditorium {
   class Seat { 
      ... 
   };
}
---------------------------------
// airplane.h
namespace airplane {
   class Seat { 
      ... 
   };
}
---------------------------------
// main.cpp
#include "auditorium.h"
#include "airplane.h"

int main() {
   auditorium::Seat concertSeat; 
   airplane::Seat flightSeat;

   // ...

   return 0;
};
`}</CodeBlock>

        <h4 className='sub-section-header'>Using Namespace</h4>
        <CodeBlock language='jsx'>{`
#include <iostream>
using namespace std; // Brings all std names into global scope


int main() {
cout << "Hello World" << endl; // No need for std:: prefix
return 0;
}
`}</CodeBlock>

        <h4 className='sub-section-header'>Nested Namespaces (C++17+)</h4>
        <CodeBlock language='jsx'>{`
namespace A::B {
void sayHello() {
std::cout << "Hello from A::B" << std::endl;
}
}


int main() {
A::B::sayHello();
return 0;
}
`}</CodeBlock>

        <h4 className='sub-section-header'>Best Practices</h4>
        <ul>
          <li>
            Avoid <code>using namespace std;</code> in header files.
          </li>
          <li>Use namespaces to avoid naming collisions in large projects or libraries.</li>
          <li>Use nested namespaces for better code organization.</li>
        </ul>

        <hr />
      </section>
    </>
  );
}
