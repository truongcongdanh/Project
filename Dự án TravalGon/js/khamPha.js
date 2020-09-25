// OwlCarousel đầu tiên
$('.slider1').owlCarousel({
			items: 1, 	//hiển thị số ảnh
			loop: true, 	//vòng lặp
			margin: 10,
			autoplay: true,		// tự chuyển ảnh
			autoplayTimeout: 2000,		// tự chuyển ảnh sau 2s
			autoplayHoverPause: true, 	//dừng tự chuyển ảnh khi đưa chuột vào
			dots: true,  // hiển thị dấu chấm chuyển ảnh
			nav: false 	//nút prev and next,false ẩn,true hiện
		});


// OwlCarousel địa điểm khác
$('.welcome').owlCarousel({
	loop: true,
	margin: 25,
	nav: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 2000,
	autoplayHoverPause: true,
  // responsiveClass:true,
	responsive: {
		0: {
			items:2
		},
		768: {
			items:3
		}
	}
});
//dùng chuột lăn để qua trang owlCarousel
$('.welcome').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        $('.welcome').trigger('prev.owl');
    } else {
        $('.welcome').trigger('next.owl');
    }
    e.preventDefault();
});

// set event remove img
		// Go to the next item
		$('.Tright').click(function() {
			$('.welcome').trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.Tleft').click(function() {
			$('.welcome').trigger('prev.owl.carousel', [300]);
		})

		
// responsive
function chon1() {
  // block dùng để hiển thị
  $('.khamPhaDiaDiem1').show(500);
  $('.plus1').hide();
  $('.minus1').show();
}
function chon2() {
  // block dùng để hiển thị
  $('.khamPhaDiaDiem2').show(500);
  $('.plus2').hide();
  $('.minus2').show();
}
function chon3() {
  // block dùng để hiển thị
  $('.khamPhaDiaDiem3').show(500);
  $('.plus3').hide();
  $('.minus3').show();
}
function chon4() {
  // block dùng để hiển thị
  $('.banQuanTam').show(500);
  $('.plus4').hide();
  $('.minus4').show();
}


function huy1() {
  // none dùng để ẩn
  // document.getElementById("div3").style.display = "none";
  $('.khamPhaDiaDiem1').hide(500);
  $('.plus1').show();
  $('.minus1').hide();
}
function huy2() {
  // none dùng để ẩn
  // document.getElementById("div3").style.display = "none";
  $('.khamPhaDiaDiem2').hide(500);
  $('.plus2').show();
  $('.minus2').hide();
}
function huy3() {
  // block dùng để hiển thị
  $('.khamPhaDiaDiem3').hide(500);
  $('.plus3').show();
  $('.minus3').hide();
}
function huy4() {
  // block dùng để hiển thị
  $('.banQuanTam').hide(500);
  $('.plus4').show();
  $('.minus4').hide();
}
