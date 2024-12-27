const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AYl5o4aVv8LytX7MlcKCrjMLxgcKjof6GxXeoO3NHsT7B-CTmNhOwSTwmO07GFTxEC9PWdPdCq9JYZON",
  client_secret: "EBo0ooagqKYAvP6lJRKqbiqxHP9lLTvzCuZF_-hNoeY6_3QNlvh6aT9Yu6gIIj03ObYL7AbQZGvOkL7I",
});

module.exports = paypal;
