<template>
	<select :id="'select2-'+name" :name="name" class="form-control">
      <option :value="key" v-for="(val, key) in options">
        {{ val }}
      </option>
      
    </select>	
</template>

<script>
	export default {
		props: ['options', 'name'],
		mounted() {
			$("#select2-"+this.name).select2();
		}
	}
</script>