1) What is the difference between var, let, and const?

        Answer:
        
        var:
        i.var a = 20
        ii.Redeclare Allow 
        iii.Reassign Allow
        iv.Function Scope
        v.Fully reassignable and Muitable
        
        let:
        i.let a = 20
        ii.Not Allow in same scope
        iii.Reassign Allow
        iv.Block Scope
        v.Ressignable and Mutable 
        
        const:
        i.const a = 20
        ii.Not Allow in same scope
        iii.Reassign Not Allow
        iv.Block Scope
        v.Not Ressignable and  Muitable
               


2) What is the difference between map(), forEach(), and filter()?

        Answer:
        
        forEach():
        i.Loops through an array and runs a function on each element
        ii.Return value Undefinded
        
        map():
        i.Loops through an array, transforms each element, and returns a new array
        ii.New array with transformed values
        
        filter():
        i.Loops through an array and returns a new array with only elements that pass a test
        ii.New array with filtered elements


3) What are arrow functions in ES6?

        Answer:
        
        Arrow functions are a super-short way to write functions in JavaScript introduced in ES6
        Regular function example:
        function add(a, b) {
          return a + b;
        }
        
        Arrow function Example :
        const add = (a, b) => a + b;


4) How does destructuring assignment work in ES6?

        Answer:
        
        Destructuring in ES6 lets you unpack values from arrays or properties from objects into distinct variables in a concise way.
        Example:
        const [a, b] = [1, 2]; 
        const {name, age} = {name: 'shehab', age: 20}; 

5) Explain template literals in ES6. How are they different from string concatenation?

        Answer:
        
        Template literals in ES6 are strings wrapped with backticks (`) that allow embedded expressions and multi-line strings. You can insert variables or expressions directly using ${...}.
        Example:
        const name = "Alex";
        const greeting = `Hello, ${name}!`; 