var com = com || {};
com.apress = com.apress || {};
com.apress.collection = com.apress.collection || {};

com.apress.collection.Timeline = Backbone.Collection.extend({
	// the model that this collection uses
	model: com.apress.model.Tweet,
	// the server side url to connect to for the collection
	url: 'http://ec2-54-201-89-147.us-west-2.compute.amazonaws.com:8080/timeline',

	initialize: function(options) {
		// anything to be defined on the construction goes here

	}
});

