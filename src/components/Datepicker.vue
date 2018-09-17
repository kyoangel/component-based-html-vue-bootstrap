<template>
	<input id="datepicker" class="form-control" />
	
</template>

<script>
	export default {
		name: "datepicker",
		mounted() {
			$('#datepicker').datepicker({
		        uiLibrary: 'bootstrap4'
		    });	
		}
	}
        
</script>