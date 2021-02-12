// const { response } = require("express");

let db;
// create a new db request for a "budget" database.
const request = indexedDB.open("budget", 1);
request.onupgradeneeded = function (event) {
  // create object store called "pending" and set autoIncrement to true
  const db = event.target.result;
  const pendingStore = db.createObjectStore( "pendingList", {
    autoIncrement: true
  });
};
request.onsuccess = function (event) {
  db = event.target.result;
  if (navigator.onLine) {
    checkDatabase();
  }
};
request.onerror = function (event) {
  if (err => {
    response.json(err);
  });
};
function saveRecord( record ) {
  // create a transaction on the pending db with readwrite access
  // access your pending object store
  // add record to your store with add method.
  console.log( record );
  const transaction = db.transaction( ["pendingList"], "readwrite" );
  const pendingListStore = transaction.objectStore( "pendingList" );
  // const pendingIndex = pendingListStore.index( "pendingIndex" );
  pendingListStore.add( record ); 
}
function checkDatabase() {
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable
  const transaction = db.transaction(["pendingList"], "readwrite");
  const pendingListStore = transaction.objectStore("pendingList");
  // const pendingIndex = pendingListStore.index( "pendingIndex" );
  const getAll = pendingListStore.getAll();
  console.log(pendingListStore);
  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
          const transaction = db.transaction(["pendingList"], "readwrite");
          const pendingListStore = transaction.objectStore("pendingList");
          pendingListStore.clear();
          console.log(pendingListStore);
        });
    }
  };
}
// listen for app coming back online
window.addEventListener('online', checkDatabase);