<template>
	<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
		<title-component>Products</title-component>

		<success-message v-if="success">Product saved</success-message>

		<form method="post" action="" @submit.prevent="submit()">
			<form-row>
				<label-component>Name</label-component>
				<textbox-component></textbox-component>
			</form-row>

			<form-row>
				<label-component>Status</label-component><br>
				<radio-component name="status" value="A">Active</radio-component>
				<radio-component name="status" value="I">Inactive</radio-component>
			</form-row>

			<form-row>
				<label-component>Brand</label-component>
				<select2-component name="brand" :options='{1: "Apple", 2: "Samsung", 3: "Huawei"}'></select2-component>
			</form-row>

			<form-row>
				<label-component>Category</label-component>
				<select-component :options='{1: "Tablet", 2: "Smartphone"}'></select-component>
			</form-row>

			<form-row>
				<label-component>Cost Price</label-component>
				<textbox-component></textbox-component>
			</form-row>

			<form-row>
				<label-component>Selling Price</label-component>
				<textbox-component></textbox-component>
			</form-row>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</main>
</template>

<script>
	import TitleComponent from "../components/TitleComponent"
	import Datepicker from "../components/Datepicker"
	import LabelComponent from "../components/LabelComponent"
	import FormRow from "../components/FormRow"
	import TextboxComponent from "../components/TextboxComponent"
	import RadioComponent from "../components/RadioComponent"
	import SelectComponent from "../components/SelectComponent"
	import Select2Component from "../components/Select2Component"
	import SuccessMessage from "../components/SuccessMessage"

	export default {
		name: 'Products',
		data() {
			return {
				success: false
			}
		},
		components: {
			TitleComponent,
			Datepicker,
			LabelComponent,
			FormRow,
			TextboxComponent,
			RadioComponent,
			SelectComponent,
			Select2Component,
			SuccessMessage,
		},
		methods: {
			submit() {
				this.success = true;
			}
		}
	}
</script>
