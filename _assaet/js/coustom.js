var acc_btn = document.querySelectorAll(".filter-accordian .filter-accordian-btn");
acc_btn.forEach(function(single){
	single.addEventListener("click", function(){
		var par_ele = single.parentElement;
		if(par_ele.hasAttribute('open')){
			par_ele.removeAttribute('open');
		}
		else {
			par_ele.setAttribute('open','');
		}
		// single.nextElementSibling.classList.add("active");
	});
});


var fil_cb = document.querySelectorAll(".filters-wrap .filter-color");
var all_pro = document.querySelectorAll(".product-wrap");
fil_cb.forEach(function(single){
	console.log(single);
	single.addEventListener('change',function(e){
		if(e.currentTarget.checked){
			console.log('checked------', single, e.target.attributes.value.value);
			all_pro.forEach(function(single_pro){
				if(single_pro.dataset.color == e.target.attributes.value.value){
					single_pro.style.display = 'block';
				}
				else {
					single_pro.style.display = 'none';
				}
				console.log(single_pro.dataset.color, single_pro);
			})
		}
		else {
			console.log('noooo', single, e);
		}
	})
})
