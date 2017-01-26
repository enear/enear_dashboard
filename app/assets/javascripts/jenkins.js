$(document).ready(function(){
	$("#fail").click(function() {
		$(".alert").addClass("hide");
		$(".alert-danger").removeClass("hide");
		$(this).addClass("active");
		$("#success").removeClass("active");
		$("#all").removeClass("active");
		$("#disabled").removeClass("active");
	});

	$("#success").click(function() {
		$(".alert").addClass("hide");
		$(".alert-success").removeClass("hide");
		$(this).addClass("active");
		$("#fail").removeClass("active");
		$("#all").removeClass("active");
		$("#disabled").removeClass("active");
	});

	$("#disabled").click(function() {
		$(".alert").addClass("hide");
		$(".alert-info").removeClass("hide");
		$(this).addClass("active");
		$("#fail").removeClass("active");
		$("#all").removeClass("active");
		$("#success").removeClass("active");
	});

	$("#all").click(function() {
		$(".alert").removeClass("hide");
		$(this).addClass("active");
		$("#success").removeClass("active");
		$("#fail").removeClass("active");
		$("#disabled").removeClass("active");
	});
});