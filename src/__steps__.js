/**
 * 1. first install firebase: npm install firebase
 * 2. console.firebase.google.com create a project
 * 3. Register project
 * 4. get firebase config and do not save config on the client side
 * 5. create auth where it will be added
 * 6. export auth from the onit file
 * 7. in the console authentication > started > enable Google Provider
 * 8.
 *  */ 


/**
 * 1.go to firebase.google.com and then go to console
 * 2. create a firebase project
 * 3. go to web setting for firebase app and register the app
 * 4. npm install firebase
 * 5. get firebase config and [you should not] add the config in your project [do not save or share your config]
 * 6. enable sign in method that you want to use: Build > Authentication > Get Started > Click on Google > Enable > set the want email address > save
 * 7. go to firebase docs
 * 8. create auth (firebase initialize auth instance)
 * 9. go to the login button. add event handler and create a provider (google provider)
 * 10. cll the signInWithProvider (auth, googleProvider)
 * 11. after successfully getting data, you may set it to a state
 * */ 