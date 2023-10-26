import React from 'react'

export default function About(props) {
  return (
    <div className={`my-2 text-${props.mode==='light'?'dark':'light'}`}>
       <h1>About TextUtils</h1>
    <p>TextUtils is a versatile text manipulation library designed to simplify text-related operations in your applications. It offers a wide range of functions to help you process and format text efficiently. Whether you're working with strings, paragraphs, or entire documents, TextUtils provides the tools you need to handle text data with ease.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>String Manipulation:</strong> TextUtils allows you to perform common string operations, such as concatenation, trimming, case conversion, and more.</li>
        <li><strong>Regular Expressions:</strong> Utilize regular expressions for advanced pattern matching and text extraction tasks.</li>
        <li><strong>Text Formatting:</strong> Format text according to various styles and rules, including capitalization, date and time formatting, and numeric representation.</li>
        <li><strong>Whitespace Handling:</strong> Easily manage whitespace, remove extra spaces, or add indentation for cleaner text.</li>
        <li><strong>Word and Character Count:</strong> Get information about the number of words, characters, lines, or paragraphs in your text.</li>
        <li><strong>Encoding and Decoding:</strong> Convert text between different character encodings, such as UTF-8, UTF-16, and ASCII.</li>
        <li><strong>HTML and XML Parsing:</strong> Parse and manipulate HTML and XML documents with specialized functions.</li>
    </ul>
    </div>
  )
}
