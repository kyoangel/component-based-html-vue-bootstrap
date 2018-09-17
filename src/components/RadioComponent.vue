<template>
	<div class="form-check form-check-inline">
	  <input class="form-check-input" type="radio" :name="name" :value="value">
	  <label class="form-check-label">
	  	<slot></slot>
	  </label>
	</div>
</template>

<script>
	export default {
		props: ["name", "value"]
	}
</script>