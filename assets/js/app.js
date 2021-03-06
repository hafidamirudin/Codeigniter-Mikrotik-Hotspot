function update_server()
{
	setInterval(function(){
		$.ajax({
			dataType: 'json',
			url: 'welcome/server',
			success: function(data){
				$("#uptime").html(data.uptime);
				$("#cpu_load").html(data.cpu_load);
				$("#cpu_count").html(data.cpu_count);
				$("#cpu_frequency").html(data.cpu_frequency);
				$("#cpu").html(data.cpu);
				$("#free_hdd_space").html(data.free_hdd_space);
				$("#total_hdd_space").html(data.total_hdd_space);
				$("#free_memory").html(data.free_memory);
				$("#total_memory").html(data.total_memory);
				$("#version").html(data.version);
			}
		});
	}, 3000);
}
