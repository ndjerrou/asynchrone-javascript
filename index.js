// single threated - similaire au serveur dans un restaurant

// code bloquant - synchrone
// console.log("Before");
// //code non bloquant  - asynchrone

// console.log("After");

// function getUser(id, cb) {
//   setTimeout(() => {
//     console.log("Fetching user in a DB...");
//     cb({ id, githubUsername: "ndjerrou" });
//   }, 2000);
// }

// function getRepositories(username, cb) {
//   setTimeout(() => {
//     console.log("Fetching repos from the user...");
//     cb(["repo1", "repo2", "repo3"]);
//   }, 2000);
// }

// const user = getUser(1, (user) => {
//   getRepositories(user.githubUsername, (repos) => {
//     console.log(repos);
//   });
// });

// Promises - A promise holds the eventual resultat of an asynchronous operation

//pending state when a promise is created

const p = new Promise((resolve, reject) => {
  // kick off an async work
  // everything went perfectly fine : return a value - we use resolve ()
  //   setTimeout(() => {
  //     resolve(2);
  //   }, 2000);
  // something went wrong: return un message d'erreur - we use reject
  //reject(new Error("Server not reachable..."));
});

p.then((data) => console.log(data)).catch((err) => console.log(err.message));

// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetching user in a DB...");
//       resolve({ id, githubUsername: "ndjerrou" });
//     }, 2000);
//   });
// }

// function getRepositories(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetching repos from the user...");
//       resolve(["repo1", "repo2", "repo3"]);
//     }, 2000);
//   });
// }

// getUser(1)
//   .then((user) => getRepositories(user))
//   .then((repos) => console.log(repos))
//   .catch((err) => console.log(err.message));


///////////////////////////////////---\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// async await - syntaxical sugar for dealing with promises

// BEFORE : get a user with a Promise

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetching user in a DB...");
      // resolve({ id, githubUsername: "ndjerrou" });
      reject(new Error('Access Network denied...'))
    }, 2000);
  });
}

// AFTER : and now with async await 
const fetchUser = async (id) => {
 try{
    const user =  await getUser(id)
    const repos = await getRepositories(user.githubUsername)
    
    console.log('user = ', user);
  }
  catch(err){
    console.log(err.message)

    return;
  }
};

fetchUser(1);
// console.log("Après le fetch...");
