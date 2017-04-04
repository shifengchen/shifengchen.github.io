// $(document).ready(function () {
//   $(".navbar-nav li").click(function () {
//     $(this).addClass("active");
//   });
// });

// $(document).ready(function () {
//   $(".navbar-nav li").each(function() {
//     $(this).removeClass();
//   })
//   $(".navbar-nav li").click(function () {
//     $(this).addClass("active");
//   });
// })

// $(document).ready(function () {
//   $(".navbar-collapse").find("li").each(function(){
//     var a = $(this).find("a:first")[0];
//     console.log(a);
//     console.log(location.pathname);
//     if ($(a).attr("href") === "#"){
//         $(this).removeClass("active");
//     }else{
//         $(this).addClass("active");
//     }
//   });
// });

// $(function() {
// 	$('.navbar-nav li a').filter(function(){
// 		return this.href==location.href}).parents("li").addClass('active').siblings().removeClass('active')
// 	$('.navbar-nav li a').click(function(){
// 		$(this).parent().parents("li").addClass('active').siblings().removeClass('active')
// 	})
// });
