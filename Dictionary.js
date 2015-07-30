function Dictionary() {
	this.add = add;
	this.datastore = new Array();
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
}

// key is experimentID
function add(key,value) {
	this.datastore[key] = value;
}

function find(experimentID) {
	return this.datastore[experimentID];
}

function remove(experimentID) {
	delete this.datastore[experimentID];
}

function showAll() {
	for (var experimentID= 0; experimentID < Dictionary.length; experimentID++) {
		print(experimentID + ":" + this.datastore[experimentID]);
	}
}

function count() {
	var n = 0;
	for (var experimentID= 0; experimentID < Dictionary.length; experimentID++) {
		++n;
	}
	return n;
}

function clear() {
	for (var experimentID=0; experimentID < Dictionary.length; experimentID++) {
		delete this.datastore[experimentID];
	}
}

var test = new Dictionary();
test
test.add('10', "2");
console.log(test);
// test.add("197806", 2);
// test.showAll();
// test.count();
// print(test.count());
