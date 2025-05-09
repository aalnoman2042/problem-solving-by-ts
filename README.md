<!-- Explain the difference between any, unknown, and never types in TypeScript -->

 By using any in typescript it allows to use any type of data. it means thre is no cheacking of data.

    let value: any = 5;
    value = "hello";
    value.toUpperCase();

Unknown also similar to any but there is a small differenece between  them i cant use the value to others method untill  cheack its data type.

    let value: unknown = "hello";
    if (typeof value === "string") {
  console.log(value.toUpperCase()); }


Never is use to reperesent a value which is never occurs, mostly it is used in funtions, a fucntion that thow error, and a fucntion that nevery returns

            function infiniteLoop(): never {
                    while (true) {}
             }


<!-- Provide an example of using union and intersection types in TypeScript. -->
as we are based in Javascript we know AND operator, OR operator sim similar to that here in typesscript uwe use union as OR,it allows a variable to hold one of multiple types. (|)

and a intersection is like AND, it  combines multiple types into one for example a value have to satisfy all the types of the value assigned (&)



