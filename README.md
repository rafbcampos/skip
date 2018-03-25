# Skip - An application prototype in React / Redux to order food online.

### Description

This application started production during the Hackathon promoted by VanHack and Skip the Dishes on March 17, 2018.

Content made exclusively during Hackathon is on the `master` branch, while its finished version is on the `done` branch.

The application uses an [API](http://api-vanhack-event-sp.azurewebsites.net) made available for the event.

The components that make up the UI were cataloged using Storybook. The catalog is available through port `6006` after running the `yarn run storybook` command.

The application is composed of the following routes:

* `/:` Login or register, only available to unregistered users or those who have not yet logged in. For others, an HOC promotes redirection to page stores;
* `/stores`: List of stores that can be filtered by type of cuisine;
* `/store/:id`: List of products available in that store, with stepper to add or remove items;
* `/cart`: Shopping cart with selected products, with button to make the purchase;
* `/orders`: List of purchases, informing their status.
* `/order/:id`: Purchase Details

The status of the application is managed by Redux, which has its store persisted with Redux-Persist. API calls are made through Axios and promises are resolved through redux-axios-middleware.

The app relies on Service Work through the WorkBox, caching API calls and using the staleWhileRevalidate strategy to refresh the cache with API responses, delivering the cached version while you call, for faster speed.

### Installation

* Clone or download this repository;
* Install dependencies with `yarn` or `npm install` ;
* For development: run `yarn dev`. This app uses webpack-dev-server, and you can access it through localhost:8080.
* For production: run `yarn build` and `yarn start`. The express server can be access through localhost:3000.
* To access the storybook: run `yarn run storybook`. You can access the catalog through localhost:6006.

### Contributing

1.  Fork it!
2.  Create your feature branch: git checkout -b my-new-feature
3.  Commit your changes: git commit -am 'Add some feature'
4.  Push to the branch: git push origin my-new-feature
5.  Submit a pull request :D

### Technologies

* React;
* React-Router;
* Redux;
* Axios;
* Webpack (v.4.1.1);
* Express;
* Moment;
* Redux-Axios-Middleware;
* Workbox;
* TypeScript;
* Emotion;
* Babel;

### License

The MIT License (MIT)

Copyright (c) 2017 Rafael Campos

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
