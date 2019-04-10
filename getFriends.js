const twitter = require("twitter");
const fs = require("fs");

const client = new twitter(JSON.parse(fs.readFileSync("secret.json","utf-8")));

const params = {screen_name: 'shiyanhai', cursor:-1, count:200 } ;

console.log("@" + params.screen_name);

let i = 0;

client.get('friends/list', params, function(error,friends,response){
  console.log(friends);
  fs.appendFileSync("friends.json",JSON.stringify(friends) + "\n","utf-8");
});

client.get('friends/ids', params, function(error,friends,response){
  console.log(friends);
  fs.appendFileSync("friends.json",JSON.stringify(friends) + "\n","utf-8");
});
