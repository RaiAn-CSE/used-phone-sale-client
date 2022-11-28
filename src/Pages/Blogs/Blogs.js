import React from 'react';

const Blogs = () => {
    return (
        <div className='my-5'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part. <br />

                        We can use URL to store some data e.g.<br />

                        The id of the current item, being viewed<br />
                        Filter parameters<br />
                        Pagination offset and limit<br />
                        Sorting data<br />

                        Keeping such data in the URL allows users to share deep links with others.<br />

                        It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change.<br />

                        React Router is a great tool to handle routes and manage the params.<br />
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.<br />
                        It is a method by which an object can inherit the properties and methods of another object.<br />
                        Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        What is meant by unit test? <br />
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.<br /><br />

                        When should you write unit tests?<br />
                        For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.
                    </p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-5">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>
                        Angular: <br />
                        Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works. <br /> <br />


                        react React: <br />
                        React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices. <br /> <br />

                        Vue: <br />
                        Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;