<template>
	<select class="form-control">
      <option :value="key" v-for="(val, key) in options">
        {{ val }}
      </option>
      
    </select>	
</template>

<script>
	export default {
		props: ['options']
	}
</script>