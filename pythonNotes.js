// =======================
// DETAILED PYTHON NOTES WITH EXAMPLES
// =======================

const pythonNotes = [
  {
    title: "1. What is Python?",
    content: "Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It emphasizes readability, simplicity, and versatility."
  },
  {
    title: "2. Features of Python",
    content: "• Easy to learn and readable\n• Interpreted language\n• Dynamically typed\n• Object-Oriented\n• Large standard library\n• Cross-platform"
  },
  {
    title: "3. Python Syntax",
    content: "Python uses indentation (spaces) to define code blocks instead of curly braces {}.\n\nExample:\nif 5 > 2:\n    print('Five is greater than two')"
  },
  {
    title: "4. Variables & Data Types",
    content: "Variables store data. Python is dynamically typed.\n\nExample:\nnum = 10\nname = 'Python'\nprice = 19.99\nflag = True\n\nData Types: int, float, str, bool, list, tuple, dict, set"
  },
  {
    title: "5. Operators",
    content: "• Arithmetic: +, -, *, /, %, //, **\n• Comparison: ==, !=, >, <, >=, <=\n• Logical: and, or, not\n• Assignment: =, +=, -=, *=, /=\n\nExample:\na = 5\nb = 2\nprint(a + b)  # 7\nprint(a ** b) # 25"
  },
  {
    title: "6. Conditional Statements",
    content: "if, elif, else control program flow.\n\nExample:\nnum = 10\nif num > 0:\n    print('Positive')\nelif num < 0:\n    print('Negative')\nelse:\n    print('Zero')"
  },
  {
    title: "7. Loops",
    content: "• for loops iterate over sequences\n• while loops repeat until condition is false\n• break exits loop, continue skips iteration\n\nExample:\nfor i in range(5):\n    print(i)\n\ncount = 0\nwhile count < 3:\n    print(count)\n    count += 1"
  },
  {
    title: "8. Functions",
    content: "Defined using def keyword.\n\nExample:\ndef greet(name):\n    return f'Hello {name}'\n\nprint(greet('Alice'))"
  },
  {
    title: "9. Lambda Functions",
    content: "Anonymous functions using lambda.\n\nExample:\nsquare = lambda x: x**2\nprint(square(5))  # 25"
  },
  {
    title: "10. Lists",
    content: "Mutable sequences.\n\nExample:\nlst = [1,2,3]\nlst.append(4)\nprint(lst)  # [1,2,3,4]"
  },
  {
    title: "11. Tuples",
    content: "Immutable sequences.\n\nExample:\nt = (1,2,3)\nprint(t[0])  # 1"
  },
  {
    title: "12. Dictionaries",
    content: "Key-value pairs.\n\nExample:\nd = {'name':'Alice', 'age':25}\nprint(d['name'])  # Alice"
  },
  {
    title: "13. Sets",
    content: "Unordered collection of unique elements.\n\nExample:\ns = {1,2,2,3}\nprint(s)  # {1,2,3}"
  },
  {
    title: "14. Strings",
    content: "Immutable sequences of characters.\n\nMethods: upper(), lower(), strip(), split(), join(), replace()\n\nExample:\ntext = '  Python  '\nprint(text.strip().upper())  # 'PYTHON'"
  },
  {
    title: "15. File Handling",
    content: "• open(), read(), write()\n• with statement automatically closes file\n\nExample:\nwith open('file.txt', 'w') as f:\n    f.write('Hello World')"
  },
  {
    title: "16. Exception Handling",
    content: "try-except-finally blocks handle errors.\n\nExample:\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nfinally:\n    print('Done')"
  },
  {
    title: "17. Modules & Packages",
    content: `Modules are Python files with functions, classes, and variables.
Packages are collections of modules.

Example usage:
import math
print(math.sqrt(16))  # 4.0

import random
print(random.randint(1, 10))

import os
print(os.getcwd())

Modules Table:

| Module   | Description                  | Example                        |
|----------|----------------------------- |--------------------------------|
| math     | Math functions               | math.sqrt(16) => 4.0           |
| random   | Random numbers               | random.randint(1,5)            |
| os       | OS operations                | os.getcwd()                    |
| sys      | System-specific parameters   | sys.version                    |
| datetime | Date and time                | datetime.datetime.now()        |
| json     | JSON parsing and encoding    | json.dumps({'a':1})            |
| csv      | CSV file handling            | csv.reader(file)               |
| itertools| Advanced iteration tools     | itertools.permutations([1,2])  |
| functools| Higher-order functions       | functools.reduce(lambda x,y:x+y,[1,2,3])`
  },
  {
    title: "18. Object-Oriented Programming (OOP)",
    content: "Classes, objects, attributes, methods, inheritance, polymorphism.\n\nExample:\nclass Dog:\n    def __init__(self,name):\n        self.name = name\n    def bark(self):\n        print('Woof')\nd = Dog('Max')\nd.bark()"
  },
  {
    title: "19. Decorators",
    content: "Functions that modify other functions.\n\nExample:\ndef decorator(func):\n    def wrapper():\n        print('Before')\n        func()\n        print('After')\n    return wrapper"
  },
  {
    title: "20. Generators",
    content: "Functions using yield to produce lazy iterators.\n\nExample:\ndef gen():\n    for i in range(5):\n        yield i\nfor val in gen():\n    print(val)"
  },
  {
    title: "21. List Comprehensions",
    content: "Compact way to create lists.\n\nExample:\nsquares = [x**2 for x in range(5)]\nprint(squares)  # [0,1,4,9,16]"
  },
  {
    title: "22. Standard Library",
    content: "Python has many built-in modules like math, random, datetime, os, sys, json, csv, itertools, functools."
  },
  {
    title: "23. Virtual Environments",
    content: "Create isolated Python environments using venv.\n\nExample:\npython -m venv env_name\nsource env_name/bin/activate  # Linux/Mac\nenv_name\\Scripts\\activate  # Windows"
  },
  {
    title: "24. Best Practices",
    content: "• Follow PEP8 style\n• Use meaningful variable names\n• Keep code modular\n• Comment your code"
  }
  

  
];



window.showNotes = function() {
  const shortcutsUI = document.getElementById("shortcutsUI");
  const notesUI = document.getElementById("notesUI");

  shortcutsUI.style.display = "none";
  notesUI.style.display = "block";

  notesUI.innerHTML = "";

  pythonNotes.forEach(note => {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const title = document.createElement("h3");
    title.textContent = note.title;

    const content = document.createElement("pre");
    content.textContent = note.content;

    noteDiv.appendChild(title);
    noteDiv.appendChild(content);
    notesUI.appendChild(noteDiv);
  });
};

window.hideNotes = function() {
  const shortcutsUI = document.getElementById("shortcutsUI");
  const notesUI = document.getElementById("notesUI");

  notesUI.style.display = "none";
  shortcutsUI.style.display = "block";
};
