var ham = document.querySelector(".ham");
		var headNav = document.querySelector(".header-list")

		ham.addEventListener('click', function(){
			headNav.classList.toggle("active");
		});