//jasmine
describe('Testing AngularJS Test Suite',function(){

	describe('Testing AngularJS Controller',function(){

		it('should initialize the title int the scope',function(){
			module('testingAngularApp');

			var scope={};
			var ctrl ;
			inject(function($controller){
				ctrl=$controller('testingAngularCtrl',{$scope:scope});
			});

			expect(scope.title).toBeDefined();
			expect(scope.title).toBe("Testing AngularJS  Application");

		});

	});

});