## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples, explanations, and potential use cases. Write your answer below and use markdown to format your text.

array = [1, 2, 3 ,4,5]

# forEach

array.forEach(value, index) { console.log("for index : " + index + "the value is: " value)}

# map

### loops through the object to

    let items;
    items = this.state.searchResult.map((item) => {
      return (
        <ul key={item.login + item.id} id={item.login}>
          {item.login}
        </ul>
      );
    });

# filter

### when you need to filter out certain values in an array but save the rest of them in the array

array.filter(a) {a > 3}

# find

### when you need to find a specific value inside the array

array.find(a) { a == 2}
