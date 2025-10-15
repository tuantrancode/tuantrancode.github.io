import SearchContainer from '@/components/shared/SearchContainer';

export const metadata = {
  title: 'Java Core Packages',
  description: 'Notes on using the core Java packages: lang, util, io, swing',
};

export default function JavaCore() {
  return (
    <>
      {/* Java Lang */}
      <section>
        <h3 className='section-header' id='lang'>
          java.lang
        </h3>
        <p>Core language classes</p>
        <ul>
            <li><code>String</code></li>
            <li><code>Math</code></li>
            <li><code>Object</code></li>
            <li><code>Integer</code></li>
            <li><code>Thread</code></li>
        </ul>
        <hr />
      </section>

        {/* Java Util */}
      <section>
        <h3 className='section-header' id='util'>
          java.util
        </h3>
         <p>Data structures, algorithms, and utilities classes</p>
        <ul>
            <li><code>ArrayLists</code></li>
            <li><code>Collections</code></li>
            <li><code>Scanner</code></li>
        </ul>
        <hr />
      </section>

        {/* Java IO */}
      <section>
        <h3 className='section-header' id='io'>
          java.io
        </h3>
         <p>Reading/writing files and streams</p>
        <ul>
            <li><code>File</code></li>
            <li><code>FileReader</code></li>
            <li><code>BufferedWriter</code></li>
            <li><code>ObjectOutputStream</code></li>
        </ul>
        <hr />
      </section>

        {/* Java Swing */}
      <section>
        <h3 className='section-header' id='swing'>
          javax.swing
        </h3>
          <p>Building desktop GUI applications</p>
        <ul>
            <li><code>JFrame</code></li>
            <li><code>JButton</code></li>
            <li><code>JLabel</code></li>
            <li><code>JTextField</code></li>
        </ul>
        <hr />
      </section>

{/* <!-- String --> */}
<section>
  <h3 className='section-header' id='string'>
    String
  </h3>
  <SearchContainer searchSelector='tbody tr, thead:not(.firstHead) tr' placeholder='Search methods...'>

    {/* <!-- Returns BOOLEAN --> */}
    <h4 className='sub-section-header'>Return Type: Boolean</h4>
    <table>
      <thead className='firstHead'>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>equals(Object anObject)</code></td>
          <td>Checks if this string is equal to another object.</td>
          <td><code>"hello".equals("hello")</code></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>equalsIgnoreCase(String anotherString)</code></td>
          <td>Checks equality ignoring case.</td>
          <td><code>"Hello".equalsIgnoreCase("hello")</code></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>contains(CharSequence s)</code></td>
          <td>Returns true if string contains the specified sequence.</td>
          <td><code>"hello".contains("ell")</code></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>startsWith(String prefix)</code></td>
          <td>Checks if string starts with specified prefix.</td>
          <td><code>"hello".startsWith("he")</code></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>startsWith(String prefix, int offset)</code></td>
          <td>Checks if string starts with prefix at the given offset.</td>
          <td><code>"hello".startsWith("ll", 2)</code></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>endsWith(String suffix)</code></td>
          <td>Checks if string ends with specified suffix.</td>
          <td><code>"hello".endsWith("lo")</code></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>isEmpty()</code></td>
          <td>Returns true if string length is 0.</td>
          <td><code>"".isEmpty()</code></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>matches(String regex)</code></td>
          <td>Returns true if string matches regex.</td>
          <td><code>"abc123".matches("\\w+\\d+")</code></td>
          <td><code>true</code></td>
        </tr>
      </tbody>
    </table>

    {/* <!-- Returns INT --> */}
    <h4 className='sub-section-header'>Return Type: int</h4>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>length()</code></td>
          <td>Returns number of characters in the string.</td>
          <td><code>"hello".length()</code></td>
          <td><code>5</code></td>
        </tr>
        <tr>
          <td><code>indexOf(int ch)</code></td>
          <td>Returns index of first occurrence of character (-1 if not found).</td>
          <td><code>"hello".indexOf('l')</code></td>
          <td><code>2</code></td>
        </tr>
        <tr>
          <td><code>indexOf(String str)</code></td>
          <td>Returns index of first occurrence of substring (-1 if not found).</td>
          <td><code>"hello".indexOf("ll")</code></td>
          <td><code>2</code></td>
        </tr>
        <tr>
          <td><code>lastIndexOf(int ch)</code></td>
          <td>Returns index of last occurrence of character (-1 if not found).</td>
          <td><code>"hello".lastIndexOf('l')</code></td>
          <td><code>3</code></td>
        </tr>
        <tr>
          <td><code>lastIndexOf(String str)</code></td>
          <td>Returns index of last occurrence of substring (-1 if not found).</td>
          <td><code>"hello".lastIndexOf("l")</code></td>
          <td><code>3</code></td>
        </tr>
        <tr>
          <td><code>compareTo(String anotherString)</code></td>
          <td>Compares two strings lexicographically.</td>
          <td><code>"abc".compareTo("abd")</code></td>
          <td><code>-1</code></td>
        </tr>
        <tr>
          <td><code>compareToIgnoreCase(String str)</code></td>
          <td>Compares two strings ignoring case.</td>
          <td><code>"abc".compareToIgnoreCase("ABC")</code></td>
          <td><code>0</code></td>
        </tr>
        <tr>
          <td><code>codePointAt(int index)</code></td>
          <td>Returns Unicode code point at specified index.</td>
          <td><code>"ABC".codePointAt(1)</code></td>
          <td><code>66</code></td>
        </tr>
        <tr>
          <td><code>codePointBefore(int index)</code></td>
          <td>Returns Unicode code point before the specified index.</td>
          <td><code>"ABC".codePointBefore(2)</code></td>
          <td><code>66</code></td>
        </tr>
        <tr>
          <td><code>codePointCount(int beginIndex, int endIndex)</code></td>
          <td>Returns the number of Unicode code points in the specified text range.</td>
          <td><code>"ABC".codePointCount(0,3)</code></td>
          <td><code>3</code></td>
        </tr>
      </tbody>
    </table>

    {/* <!-- Returns ELEMENT (char / String / String[]) --> */}
    <h4 className='sub-section-header'>Return Type: char / String / String[]</h4>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>charAt(int index)</code></td>
          <td>Returns character at specified index.</td>
          <td><code>"hello".charAt(1)</code></td>
          <td><code>'e'</code></td>
        </tr>
        <tr>
          <td><code>substring(int beginIndex)</code></td>
          <td>Returns substring from beginIndex to end.</td>
          <td><code>"hello".substring(2)</code></td>
          <td><code>"llo"</code></td>
        </tr>
        <tr>
          <td><code>substring(int beginIndex, int endIndex)</code></td>
          <td>Returns substring from beginIndex (inclusive) to endIndex (exclusive).</td>
          <td><code>"hello".substring(1,4)</code></td>
          <td><code>"ell"</code></td>
        </tr>
        <tr>
          <td><code>concat(String str)</code></td>
          <td>Concatenates specified string to the end.</td>
          <td><code>"Hello".concat(" World")</code></td>
          <td><code>"Hello World"</code></td>
        </tr>
        <tr>
          <td><code>replace(char oldChar, char newChar)</code></td>
          <td>Replaces all occurrences of oldChar with newChar.</td>
          <td><code>"hello".replace('l','p')</code></td>
          <td><code>"heppo"</code></td>
        </tr>
        <tr>
          <td><code>replace(CharSequence target, CharSequence replacement)</code></td>
          <td>Replaces all occurrences of target sequence with replacement.</td>
          <td><code>"hi hi".replace("hi","yo")</code></td>
          <td><code>"yo yo"</code></td>
        </tr>
        <tr>
          <td><code>replaceFirst(String regex, String replacement)</code></td>
          <td>Replaces first substring matching regex with replacement.</td>
          <td><code>"a1b2c3".replaceFirst("\\d","")</code></td>
          <td><code>"ab2c3"</code></td>
        </tr>
        <tr>
          <td><code>replaceAll(String regex, String replacement)</code></td>
          <td>Replaces all substrings matching regex with replacement.</td>
          <td><code>"a1b2c3".replaceAll("\\d","")</code></td>
          <td><code>"abc"</code></td>
        </tr>
        <tr>
          <td><code>trim()</code></td>
          <td>Removes leading and trailing whitespace.</td>
          <td><code>"  hi  ".trim()</code></td>
          <td><code>"hi"</code></td>
        </tr>
        <tr>
          <td><code>toUpperCase()</code></td>
          <td>Converts string to uppercase.</td>
          <td><code>"hi".toUpperCase()</code></td>
          <td><code>"HI"</code></td>
        </tr>
        <tr>
          <td><code>toLowerCase()</code></td>
          <td>Converts string to lowercase.</td>
          <td><code>"HI".toLowerCase()</code></td>
          <td><code>"hi"</code></td>
        </tr>
        <tr>
          <td><code>split(String regex)</code></td>
          <td>Splits string around matches of regex.</td>
          <td><code>"a,b,c".split(",")</code></td>
          <td><code>["a","b","c"]</code></td>
        </tr>
        <tr>
          <td><code>split(String regex, int limit)</code></td>
          <td>Splits string with limit on number of elements.</td>
          <td><code>"a,b,c".split(",",2)</code></td>
          <td><code>["a","b,c"]</code></td>
        </tr>
        <tr>
          <td><code>intern()</code></td>
          <td>Returns canonical representation from string pool.</td>
          <td><code>"hello".intern()</code></td>
          <td><code>"hello"</code></td>
        </tr>
        <tr>
          <td><code>format(String format, Object... args)</code></td>
          <td>Returns formatted string.</td>
          <td><code>String.format("%d + %d = %d",1,2,3)</code></td>
          <td><code>"1 + 2 = 3"</code></td>
        </tr>
      </tbody>
    </table>

    {/* <!-- Returns VOID --> */}
    <h4 className='sub-section-header'>Return Type: void</h4>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin)</code></td>
          <td>Copies characters from string into destination array.</td>
          <td>
            <code>char[] arr = new char[5]; "hello".getChars(0,5,arr,0)</code>
          </td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

  </SearchContainer>
  <hr/>
</section>


{/* <!-- Object --> */}
<section>
  <h3 className='section-header' id='object'>
    Object
  </h3>
  <SearchContainer searchSelector='tbody tr, thead:not(.firstHead) tr' placeholder='Search methods...'>

    {/* <!-- Returns BOOLEAN --> */}
    <h4 className='sub-section-header'>Return Type: Boolean</h4>
    <table>
      <thead className='firstHead'>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>equals(Object obj)</code></td>
          <td>Indicates whether some other object is "equal to" this one.</td>
          <td>
            <code>obj1.equals(obj2)</code>
          </td>
          <td><code>true</code> or <code>false</code></td>
        </tr>
        <tr>
          <td><code>equalsIgnoreCase</code> does not exist for Object</td>
          <td>—</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>notify()</code></td>
          <td>Wakes up a single thread waiting on this object's monitor.</td>
          <td><code>synchronized(obj)&#123; obj.notify(); &#125;</code></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>notifyAll()</code></td>
          <td>Wakes up all threads waiting on this object's monitor.</td>
          <td><code>synchronized(obj)&#123; obj.notifyAll(); &#125;</code></td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    {/* <!-- Returns INT --> */}
    <h4 className='sub-section-header'>Return Type: int</h4>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>hashCode()</code></td>
          <td>Returns a hash code value for the object.</td>
          <td><code>obj.hashCode()</code></td>
          <td><code>12345678</code> (example)</td>
        </tr>
        <tr>
          <td><code>wait()</code></td>
          <td>Causes current thread to wait until notified. Returns int? Actually void—so remove from INT table</td>
          <td>—</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    {/* <!-- Returns ELEMENT (Object) --> */}
    <h4 className='sub-section-header'>Return Type: Object</h4>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>clone()</code></td>
          <td>Creates and returns a copy of this object (if class implements Cloneable).</td>
          <td><code>obj.clone()</code></td>
          <td><code>new Object()</code> copy</td>
        </tr>
      </tbody>
    </table>

    {/* <!-- Returns STRING --> */}
    <h4 className='sub-section-header'>Return Type: String</h4>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>toString()</code></td>
          <td>Returns a string representation of the object.</td>
          <td><code>obj.toString()</code></td>
          <td><code>"ClassName@hashcode"</code></td>
        </tr>
      </tbody>
    </table>

    {/* <!-- Returns VOID --> */}
    <h4 className='sub-section-header'>Return Type: void</h4>
    <table>
      <thead>
        <tr>
          <th>Method</th>
          <th>Description</th>
          <th>Example</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>wait()</code></td>
          <td>Causes current thread to wait until another thread invokes <code>notify()</code> or <code>notifyAll()</code> on this object.</td>
          <td><code>synchronized(obj)&#123; obj.wait(); &#125;</code></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>wait(long timeout)</code></td>
          <td>Waits up to the specified time in milliseconds.</td>
          <td><code>synchronized(obj)&#123; obj.wait(1000); &#125;</code></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>wait(long timeout, int nanos)</code></td>
          <td>Waits up to the specified time (ms + nanos).</td>
          <td><code>synchronized(obj)&#123; obj.wait(1000,500); &#125;</code></td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

  </SearchContainer>
</section>

    </>
  );
}
