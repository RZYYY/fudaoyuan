$(document).ready(function()
{
	addEventListener();
$("#o_11").show();
$("#011").show();



});



function addEventListener(){
	$(".right_111").bind("click",function(){
		$(".bubble").hide();
		$(".hide_text").hide();
		p_node_id = $(this).parent().attr("id");
		node_id = $(this).attr("id");
		$("#" + p_node_id + "1").show();
		$("#" + node_id + "1").show();
		
		
	}
	
	)
	
}