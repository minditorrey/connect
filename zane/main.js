/*$(document).ready(function () {
console.log('body:', $('body'));

	$('.parent-container').magnificPopup({

  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {enabled:true}
  // other options
});

	$('#some-button').magnificPopup({
	    items: {
	      src: '../images/puppy.jpg'
	    },
	    type: 'image' // this is default type
	});

})
*/

window.jquerytest = {
	init: function() {

		var selectedItem;
		var listTwo = $('.list-2 ul');
		var listOne = $('.list-1 ul');

		function moveFromList (selectedItem, listTwo) {
			if(selectedItem.data('selected') === true) {
				selectedItem.data('selected', false);
				listTwo.append(selectedItem);
			} else {
				selectedItem.data('selected', true);
			}

		}


		$('.column li').click(function(e) {
			
			selectedItem = $(this);
			selectedItem.toggleClass("selected");

			if(selectedItem.closest('.list-1').length) {
				moveFromList(selectedItem, listTwo);
			} else {
				moveFromList(selectedItem, listOne);
			}
		});



		/*var listOneFirstLi = $('.list-1 li:first-child');
		var listTwo = $('.list-2 ul');
		var btn = $('.btn');
		btn.click(function() {
			alert('test');

		listTwo.append(listOneFirstLi);
		
		
		}) */

	}
}; 	window.jquerytest.init(); 






