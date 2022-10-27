import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='grid grid-cols-2'>
            <div id='blog'>
                <h1 className='text-5xl'>01</h1>
                <h1 className='text-violet-600'>what is cors?</h1>
                <p>
                    Cross-Origin Resource Sharing(CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others. CORS is implemented primarily in web browsers, but it can also be used in API clients as an option.
                    Works: Everything starts on the client side, before sending the main request. The client sends a CORS preflight request to a service for resources with parameters in HTTP headers (CORS headers). The service responses using the same headers with different or the same values. The client decides, based on a CORS preflight response, if he can or cannot send the main request to the service. The web browser (client) will throw an error if the response does not meet the requirements of CORS preflight.
                </p>
            </div>
            <div id='blog'>
                <h1 className='text-5xl'>02</h1>
                <h1 className='text-violet-600'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>
                    Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.All of these can save you a significant amount of development cost, as you don't need to pay as high as developing from scratch. Firebase pricing is equally flexible.

                    Others Options:
                    AWS Amplify,
                    Okta,
                    Amazon Cognito,
                    Auth0,
                    Nhost,
                    Heroku etc.
                </p>
            </div>
            <div id='blog'>
                <h1 className='text-5xl'>03</h1>
                <h1 className='text-violet-600'>How does the private route work?</h1>
                <p>
                    The private route is the component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).

                    Work The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state pro
                </p>
            </div>
            <div id='blog'>
                <h1 className='text-5xl'>04</h1>
                <h1 className='text-violet-600'> What is Node? How does Node work?</h1>
                <p>
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept
                    Asynchronous
                    Non-blocking I/O
                    Non-blocking i/o means working with multiple requests without blocking the thread for a single request. I/O basically interacts with external systems such as files, databases. Node.js is not used for CPU-intensive work means for calculations, video processing because a single thread cannot handle the CPU works.

                    Asynchronous: Asynchronous is executing a callback function. The moment we get the response from the other server or database it will execute a callback function. Callback functions are called as soon as some work is finished and this is because the node.js uses an event-driven architecture. The single thread doesn't work with the request instead it sends the request to another system which resolves the request and it is accessible for another request.
                </p>
            </div>
        </div>
    );
};

export default Blog;