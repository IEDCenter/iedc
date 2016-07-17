exports.install = function() {
	F.route('/', view_index(){
		var self = this;
		self.view('index');
	});
	// or
	// F.route('/');
};
